import Modifier from 'ember-modifier';

interface SetupDragSignature {
    // TODO: Specify the correct `Element` type:
    Element: HTMLElement;
    Args: {
        Named: {};
        Positional: [];
    };
}

export default class SetupDragModifier extends Modifier<SetupDragSignature> {
    isMouseDown = false;
    scrollLeft: number = 0;
    startX: number = 0;

    onMouseDown = (element: HTMLElement, event: MouseEvent) => {
        this.isMouseDown = true;
        element.classList.add('active');

        this.startX = event.pageX - element.offsetLeft;
        this.scrollLeft = element.scrollLeft;

        event.stopPropagation();
        window.addEventListener('mouseup', this.onMouseUp.bind(this, element));
        window.addEventListener(
            'mousemove',
            this.onMouseMove.bind(this, element),
        );
    };

    onMouseLeave = (element: HTMLElement) => {
        this.isMouseDown = false;
        element.classList.remove('active');
    };

    onMouseUp = (element: HTMLElement) => {
        this.isMouseDown = false;
        element.classList.remove('active');
    };

    onMouseMove = (element: HTMLElement, event: MouseEvent) => {
        if (!this.isMouseDown) {
            return;
        }

        event.preventDefault();

        const x = event.pageX - element.offsetLeft;
        const deltaX = (x - this.startX) * 1.5;
        element.scrollLeft = this.scrollLeft - deltaX;
    };

    modify(element: HTMLElement, [], {}) {
        element.addEventListener(
            'mousedown',
            this.onMouseDown.bind(this, element),
        );
        element.addEventListener('mouseup', this.onMouseUp.bind(this, element));
        element.addEventListener(
            'mousemove',
            this.onMouseMove.bind(this, element),
        );
        element.addEventListener('dragstart', (e) => e.preventDefault());
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'setup-drag': typeof SetupDragModifier;
    }
}

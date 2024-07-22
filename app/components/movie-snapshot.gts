import type { TOC } from '@ember/component/template-only';

interface MovieSnapshotSignature {
    Args: {
        movie: {
            poster: string;
            altText: string;
            productionRole: string;
            title: string;
            releaseYear: string;
        };
    };
    Element: HTMLDivElement;
}

export default class MovieSnapshot extends TOC<MovieSnapshotSignature> {
    <template>
        <div class='movie-snapshot'>
            <img src={{@movie.poster}} alt={{@movie.altText}} />
            <span>{{@movie.productionRole}}</span>
            <span>{{@movie.title}}</span>
            <span>{{@movie.releaseYear}}</span>
        </div>
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        MovieSnapshot: typeof MovieSnapshot;
        'moive-snapshot': typeof MovieSnapshot;
    }
}

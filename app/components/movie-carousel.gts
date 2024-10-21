import Component from '@glimmer/component';
import MovieCarouselCard from './movie-carousel-card';
import SetupDragModifier from '../modifiers/setup-drag';

interface MovieTile {
    titleCard: string;
}

interface MovieCarouselSignature {
    Args: {
        movieTiles: MovieTile[];
    };
    Element: HTMLDivElement;
}

export default class MovieCarousel extends Component<MovieCarouselSignature> {
    <template>
        <div class='movie-carousel' ...attributes>
            {{! <span class='movie-carousel-header'>Projects</span> }}
            <div class='movie-carousel-content' {{SetupDragModifier}}>
                {{#each @movieTiles as |movieTile|}}
                    <MovieCarouselCard @movieTile={{movieTile}} />
                {{/each}}
            </div>
        </div>
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        MovieCarousel: typeof MovieCarousel;
        'movie-carousel': typeof MovieCarousel;
    }
}

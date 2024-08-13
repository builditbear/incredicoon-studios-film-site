import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface MovieSignature {
    poster: string;
    altText: string;
    productionRole: string;
    title: string;
    releaseYear: string;
}

interface MovieReelSignature {
    Args: {
        movieStills: MovieSignature[];
    };
    Element: HTMLDivElement;
}

export default class MovieReel extends Component<MovieReelSignature> {
    @tracked displayedMovie = this.args.movieStills[0];

    <template>
        <div class='movie-snapshot'>
            <div class='movie-poster-container'>
                <img
                    class='movie-poster'
                    src={{this.displayedMovie.poster}}
                    alt={{this.displayedMovie.altText}}
                />
            </div>
            <div class='movie-poster-captionbar'>
                <span
                    class='movie-poster-captionbar-item'
                >{{this.displayedMovie.productionRole}}</span>
                <span
                    class='movie-poster-captionbar-item'
                >{{this.displayedMovie.title}}</span>
                <span
                    class='movie-poster-captionbar-item'
                >{{this.displayedMovie.releaseYear}}</span>
            </div>
        </div>
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        MovieSnapshot: typeof MovieReel;
        'movie-snapshot': typeof MovieReel;
    }
}

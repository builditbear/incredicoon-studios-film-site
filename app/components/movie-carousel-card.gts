import Component from '@glimmer/component';

interface MovieTile {
    titleCard: string;
}

interface MovieCarouselCardSignature {
    Args: {
        movieTile: MovieTile;
    };
    Element: HTMLDivElement;
}

export default class MovieCarouselCard extends Component<MovieCarouselCardSignature> {
    <template>
        <div class='movie-carousel-card'>
            <img class='movie-tile' src={{@movieTile.titleCard}} />
        </div>
    </template>
}

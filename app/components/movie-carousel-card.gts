import Component from '@glimmer/component';
import { LinkTo } from '@ember/routing';

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
    get titleCard() {
        return this.args.movieTile.titleCard;
    }
    <template>
        <div class='movie-carousel-card'>
            <LinkTo @route='movie' @model={{'1'}}>
                <img class='movie-tile' src={{this.titleCard}} />
            </LinkTo>
        </div>
    </template>
}

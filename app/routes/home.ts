import Route from '@ember/routing/route';
export default class HomeRoute extends Route {
    model() {
        return {
            movieStills: [
                {
                    poster: 'assets/images/movie-tile-thumbnails/diogenes.png',
                    altText:
                        'Diogenes movie poster featuring Diogenes the Cat.',
                    productionRole: 'Director',
                    title: 'Diogenes',
                    releaseYear: '2022',
                },
            ],
            movieTiles: [
                {
                    titleCard:
                        'assets/images/movie-tile-thumbnails/birta-njordsdottir.png',
                },
                {
                    titleCard:
                        'assets/images/movie-tile-thumbnails/frightmares.png',
                },
                {
                    titleCard:
                        'assets/images/movie-tile-thumbnails/gremlins.png',
                },
                {
                    titleCard:
                        'assets/images/movie-tile-thumbnails/horses-near-me.png',
                },
                {
                    titleCard:
                        'assets/images/movie-tile-thumbnails/love-language.png',
                },
                {
                    titleCard:
                        'assets/images/movie-tile-thumbnails/morgans-sister.png',
                },
                {
                    titleCard: 'assets/images/movie-tile-thumbnails/purple.png',
                },
                {
                    titleCard:
                        'assets/images/movie-tile-thumbnails/salty-sirens.png',
                },
                {
                    titleCard:
                        'assets/images/movie-tile-thumbnails/take-care-of-yourself.png',
                },
            ],
        };
    }
}

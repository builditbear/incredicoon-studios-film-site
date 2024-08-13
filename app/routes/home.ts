import Route from '@ember/routing/route';
export default class HomeRoute extends Route {
    model() {
        return {
            poster: 'assets/images/movie-tile-thumbnails/diogenes.png',
            altText: 'Diogenes movie poster featuring Diogenes the Cat.',
            productionRole: 'Director',
            title: 'Diogenes',
            releaseYear: '2022',
        };
    }
}

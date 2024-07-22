import Route from '@ember/routing/route';
export default class HomeRoute extends Route {
    model() {
        return {
            poster: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
            altText: 'Banana Varieties',
            productionRole: 'Director',
            title: 'The Art of the Banana',
            releaseYear: '2020',
        };
    }
}

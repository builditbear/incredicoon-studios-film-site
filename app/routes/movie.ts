import Route from '@ember/routing/route';
import { service } from '@ember/service';
import StoreService from '@ember-data/store';

export default class MovieRoute extends Route {
    @service declare store: StoreService;

    model(params: { movie_id: string }) {
        return this.store.peekRecord('movie', params.movie_id);
        // return {

        // }
    }
}

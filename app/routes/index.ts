import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Router from '@ember/routing/router';

export default class IndexRoute extends Route {
    @service router!: Router;

    beforeModel() {
        this.router.transitionTo('home');
    }
}

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import MovieCarouselCard from '../../app/components/movie-carousel-card';
import { hash } from '@ember/helper';

module('Integration | Component | MovieCarouselCard', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        await render(
            <template>
                <MovieCarouselCard @movieTile={{hash titleCard='test'}} />
            </template>,
        );
        assert.ok(true);
    });
});

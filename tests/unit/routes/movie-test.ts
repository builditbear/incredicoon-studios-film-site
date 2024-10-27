import { module, test } from 'qunit';
import { setupTest } from 'incredicoon-studios-film-site/tests/helpers';

module('Unit | Route | movie', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:movie');
    assert.ok(route);
  });
});

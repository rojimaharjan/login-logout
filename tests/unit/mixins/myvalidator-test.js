import Ember from 'ember';
import MyvalidatorMixin from '../../../mixins/myvalidator';
import { module, test } from 'qunit';

module('Unit | Mixin | myvalidator');

// Replace this with your real tests.
test('it works', function(assert) {
  let MyvalidatorObject = Ember.Object.extend(MyvalidatorMixin);
  let subject = MyvalidatorObject.create();
  assert.ok(subject);
});

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  created_at: attr(),
  disbanded_at: attr(),

  mutants: hasMany('mutants')
});

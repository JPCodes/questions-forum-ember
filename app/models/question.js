import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  note: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});

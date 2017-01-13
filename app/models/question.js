import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  note: DS.attr(),
  answerss: DS.hasMany('answer', { async: true })
});

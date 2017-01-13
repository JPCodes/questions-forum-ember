import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions:{
    updateQuestionFormShow(){
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        note: this.get('note')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});

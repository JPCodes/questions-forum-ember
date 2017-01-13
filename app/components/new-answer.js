import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       username: this.get('username'),
       comment: this.get('comment'),
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});

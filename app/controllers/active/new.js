import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTeam: function() {
      var team = this.store.createRecord('team', {
        created_at: new Date()
      });
      this.get('mutant').forEach(function(mutant) {
        team.get('mutants').pushObject(mutant);
      });
      team.save();
      this.transitionToRoute('active');
    }
  }
});

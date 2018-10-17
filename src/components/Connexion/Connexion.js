import Vue from "vue";
import VueForm from "vue-form";

Vue.use(VueForm);

new Vue({
  el: "#form-connexion",
  data: {
    formstate: {},
    model: {}
  },
  methods: {
    onSubmit: function() {
      if (this.formstate.$invalid) {
        // alert user and exit early
        return;
      }
      // otherwise submit form
    }
  }
});

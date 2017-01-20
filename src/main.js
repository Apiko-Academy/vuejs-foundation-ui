import Vue from 'vue';
import App from './App.vue';
import 'script!what-input';
import 'script!foundation-sites';

export const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  ...App,
  mounted ()  {
    $(this.$el).foundation();
  }
});


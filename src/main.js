import Vue from 'vue';
import App from './App.vue';
import 'foundation-sites';

export const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  },
  ...App,
  mounted: function()  {
    new Foundation.Accordion($('.accordion'));
  }
});


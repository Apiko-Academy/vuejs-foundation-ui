
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <foundation-accordion></foundation-accordion>

  </div>
</template>

<script>
import Hello from './components/Hello'
import FoundationAccordion from './components/Foundation-accordion'

// foundation can be imported directly at the component level
import 'foundation-sites';

console.log(Foundation);

export default {
  name: 'app',
  components: {
    Hello,
    FoundationAccordion
  }
}
</script>

<style lang="sass">
  @import "styles/theme.scss"
  @import "styles/border"
</style>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

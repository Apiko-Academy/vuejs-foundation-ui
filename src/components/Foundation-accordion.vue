<template>
  <div >

  <a href="#" data-open="myModal">Click Me For A Modal</a>

    <div id="myModal" class="reveal" data-reveal >
      <h2 id="modalTitle">Awesome. I have it.</h2>
      <p class="lead">Your couch.  It is mine.</p>
      <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
      <a class="close-button" data-close>&#215;</a>
    </div>

    <ul class="accordion" data-accordion>
      <li class="accordion-item is-active" data-accordion-item>
        <a href="#" class="accordion-title">Accordion 1</a>
        <div class="accordion-content" data-tab-content>
          {{ msg }}
        </div>
      </li>
      <li class="accordion-item" data-accordion-item>
        <a href="#" class="accordion-title">Accordion 1</a>
        <div class="accordion-content" data-tab-content>
          Second content
        </div>
      </li>
      <li class="accordion-item" data-accordion-item>
        <a href="#" class="accordion-title">Accordion 1</a>
        <div class="accordion-content" data-tab-content>
          Third content
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'foundation-accordion',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
}
</script>

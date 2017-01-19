<template>
  <div >
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
    <a class="button">Learn More</a>
  </div>
</template>

<script>
export default {
  name: 'foundation-accordion',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

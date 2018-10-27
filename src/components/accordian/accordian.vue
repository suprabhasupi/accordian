<template>
  <div id="app">
  <article class="title" :class="[!isAccordionOpen(i)?'closed':'']" v-for="acc,i in accordianList">
    <div class="header" @click="toggleAccordion(i)">
      <img :src= "acc.url">
      {{acc.place}}
    </div>
    <div class="message-body" v-if="isOpen">
      <div class="message-content">
       {{acc.description}}
      </div>
    </div>
  </article>

  </div>
</template>

<script>
  import './accordian.css'

  import Accordian from './accordian'
  export default Accordian
</script>
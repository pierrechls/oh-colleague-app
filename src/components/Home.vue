<template>
  <div class="home-view">
    <h1>Home</h1>
    <p>{{ count }}</p>
    <button @click='decrementCounter'>-</button>
    <button @click='incrementCounter'>+</button>
  </div>
</template>

<script>

  import { decrementCounter, incrementCounter } from '../vuex/actions'
  import { getCount } from '../vuex/getters'

  export default {
    name: 'Home',
    vuex: {
      getters: {
        count: getCount
      },
      actions: {
        decrementCounter,
        incrementCounter
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  h1{
    color: red;
  }

</style>

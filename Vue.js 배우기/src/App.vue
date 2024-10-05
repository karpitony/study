<template>
  <div>
    {{ count }}
  </div>
  <h1>Vue.js Lifecycle Test</h1>
</template>

<script>
export default {
  data() {
    return {
      count : 0
    }
  },
  beforeCreate() {
    console.log('Lifecycle: beforeCreate', this.count)
  // this.test()
  },
  created() {
    console.log('Lifecycle: created', this.count)
    this.test()
  },
  // beforeMount() {
  //   console.log('Lifecycle: beforeMount', document.querySelector('h1'))
  // },
  // mounted() {
  //   console.log('Lifecycle: mounted', document.querySelector('h1'))
  // },
  methods: {
    test() {
      console.log("함수호출!!!")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
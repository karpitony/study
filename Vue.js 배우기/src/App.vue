<template>
  <div>
    <div v-if="isVisible" class="red"></div>
    <div v-if="isVisible === true" class="blue"></div>
    
    <div v-else class="black"></div>
    <button @click="isVisible = !isVisible">Toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,

    }
  }
}
</script>

<style scoped>
.red {
  width: 100px;
  height: 100px;
  background-color: red;
}
.blue {
  width: 100px;
  height: 100px;
  background-color: blue;
}
.black {
  width: 100px;
  height: 100px;
  background-color: black;
}
</style>
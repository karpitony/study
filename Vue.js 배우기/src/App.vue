<template>
  <div>{{ rawHTML }}</div>  
  <div>{{ rawHTML2 }}</div>
  <h1 v-html="rawHTML2"></h1>

  <h2 v-bind:class="{ active: isActive }">클래스 바인딩 테스트입니다.</h2>
  <h2 :class="{ active: isActive }">클래스 바인딩 테스트입니다.</h2>
  <button @click="change">버튼</button>

  <h3 style="color: red; font-size: 24px">스타일 바인딩 테스트입니다.</h3>
  <h3 :style="{ color: fontColor, fontSize: fontSize}">스타일 바인딩 테스트입니다.</h3>

</template>

<script>
export default {
  data() {
    return {
      rawHTML: "이것은 텍스트입니다.",
      rawHTML2: "<span style='color: red'>이것은 빨간색이여야 합니다.</span>",
      isActive: false,
      fontColor: '#888888',
      fontSize: '48px'
    }
  },
  methods: {
    change() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>

h2.active {
  color: green  ;
}

</style>
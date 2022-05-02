<template>
  <div class="homepage">
    <div class="homepage_text">
      Добро пожаловать в галерею! <br />
      Начнем?
    </div>
    <div>
      <my-button @click="this.$emit('start', true)"> Поехали! </my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-page",
  props: {
    LetStart: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.homepage {
  background-color: rgb(49, 49, 49);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-align: center;
  position: fixed;
  width: 100vw;
  z-index: 1;
}
.homepage_text {
  font-size: 5vh;
  line-height: 8vh;
}
</style>
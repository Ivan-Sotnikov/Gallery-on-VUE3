<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div
      class="text-center text-xl md:text-4xl first-letter:lg:text-5xl antialiased leading-loose md:leading-loose lg:leading-loose"
    >
      Добро пожаловать в галерею! <br />
      Начнем?
    </div>
    <div>
      <my-button @click="$router.push('/main')"> Поехали! </my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "welcome-page",
  data() {
    return {};
  },
};
</script>

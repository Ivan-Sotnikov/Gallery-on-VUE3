<template>
  <div>
    <h1 class="text-center p-4 md:text-xl">
      Альбом {{ $route.params.galleryid }} из категории
      {{ PageNames[$route.params.name].toLowerCase() }}
    </h1>
    <div class="text-center mt-4">
      <my-button @click="$router.go(-1)">Вернуться обратно</my-button>
    </div>
    <div class="m-5">
      <my-image-board @showModal="showModal"></my-image-board>
    </div>
  </div>
</template>

<script>
import { registerRuntimeCompiler } from "@vue/runtime-core";
import MyImageBoard from "../components/MyImageBoard.vue";
export default {
  components: { MyImageBoard },

  inject: ["PageNames"],

  methods: {
    showModal(type, url, id, title) {
      this.$emit("showModal", type, url, id, title);
    },
  },
};
</script>

<style scoped></style>

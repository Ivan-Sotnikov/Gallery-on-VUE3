<template>
  <div>
    <h1 class="album_name">
      Альбом {{ $route.params.galleryid }} из категории
      {{ PageNames[$route.params.name].toLowerCase() }}
    </h1>
    <div class="btn_backward">
      <my-button @click="$router.go(-1)">Вернуться обратно</my-button>
    </div>
    <my-image-board @showModal="showModal"></my-image-board>
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

<style scoped>
.album_name {
  text-align: center;
  margin: 50px;
}

.btn_backward {
  display: flex;
  justify-content: center;
}
</style>

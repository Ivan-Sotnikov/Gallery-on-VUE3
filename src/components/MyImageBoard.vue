<template>
  <div class="text-center">
    <div class="md:text-xl">Сортировать по:</div>
    <my-select
      class="bg-gray-600 m-4"
      :options="sortOption"
      v-model="selectedSort"
    ></my-select>
  </div>
  <my-loader v-if="isLoading"></my-loader>
  <div v-else class="flex flex-wrap flex-row justify-center text-center">
    <div class="m-3 transition-all hover:text-orange-600 hover:cursor-pointer hover:brightness-110" v-for="img in imgs" :key="img.id">
      <img
        :src="img.url"
        @click="showModal(img)"
        alt="img.url"
        class="md:w-44 rounded-xl"
      />
      <div class="m-3">{{ img.title.split(" ", 2).join(" ") }}</div>
    </div>
  </div>
  <div ref="observer"></div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import MyModal from "./MyModal.vue";
import MySelect from "./MySelect.vue";
export default {
  components: { MyModal, MySelect },
  name: "my-image-board",

  data() {
    return {
      imgQty: 20,
      imgPage: 1,
      imgs: [],
      currentImgs: [],
      isLoading: true,
      selectedSort: "",
      sortOption: [
        { value: "title", name: "По названию" },
        { value: "id", name: "По  ID" },
      ],
    };
  },

  methods: {
    async addImg() {
      try {
        await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=${this.imgQty}&_page=${this.imgPage}`
        )
          .then((response) => response.json())
          .then((json) => {
            this.imgs = this.imgs.concat(json);
          });
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    },
    showModal(img) {
      let modalType = "image";
      this.$emit("showModal", modalType, img.url, img.id, img.title);
    },
  },

  mounted() {
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting) {
        if (this.imgs.length == 0) return;
        this.imgPage++;
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
    this.addImg();
  },

  watch: {
    imgPage() {
      this.addImg();
    },
    selectedSort(sort) {
      switch (sort) {
        case "title":
          this.imgs.sort((a, b) => {
            return a[sort]?.localeCompare(b[sort]);
          });
          break;
        case "id":
          this.imgs.sort((a, b) => {
            return a[sort] - b[sort];
          });
          break;

        default:
          break;
      }
    },
  },
};
</script>
<style></style>

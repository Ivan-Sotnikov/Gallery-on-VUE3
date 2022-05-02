<template>
  <div>
    <div class="image_sort">
      <div class="image_sort__title">Сортировать по:</div>
      <my-select
        class="image_sort__select"
        :options="sortOption"
        v-model="selectedSort"
      ></my-select>
    </div>
    <my-loader v-if="isLoading"></my-loader>
    <div v-else class="image">
      <div class="image_prev" v-for="img in imgs" :key="img.id">
        <img :src="img.url" @click="showModal(img)" alt="img.url" />
        <div class="image_title">{{ img.title.split(" ", 2).join(" ") }}</div>
      </div>
    </div>
    <div ref="observer" class="observer"></div>
  </div>
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


<style >
.observer {
  height: 20px;
}
.image {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;
  margin: auto;
}
.image_prev img {
  height: 200px;
  width: 200px;
}
.image_prev {
  margin: 20px;
  transition: all 0.3s;
}

.image_title {
  text-align: center;
  padding: 10px;
}
.image_prev:hover {
  filter: brightness(1.3);
  box-shadow: 0 0 10px #e74c3c;
  cursor: pointer;
}
.image_prev:hover .image_title {
  color: #e74c3c;
}
.image_sort {
  margin: auto;
  padding: 20px;
  text-align: center;
}
.image_sort__title {
  padding: 10px;
}
.image_sort__select {
  background-color: rgb(78, 78, 78);
  color: #e74c3c;
  height: 20px;
  border-radius: 5px;
}
.image_sort__select:focus {
  box-shadow: 0 0 10px #e74c3c;
  border-color: #e74c3c;
}
</style>
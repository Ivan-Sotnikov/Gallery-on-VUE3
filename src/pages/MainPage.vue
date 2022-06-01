<template>
  <div>
    <div class="text-center px-4 py-5 md:text-xl lg:text-2xl">
      <div>Привет!</div>
      <div class="p-5">
        У нас есть несколько галерей с интересными картинками.
      </div>
      Для просмотра перейди в интересующую категорию, либо кликни сразу на
      галерею.
    </div>
    <div v-if="isLoading">
      <my-loader></my-loader>
    </div>
    <div v-else>
      <my-galleries
        class=""
        :pageAlbum="pageAlbumNew"
        :galleryType="'newAlbums'"
      >
        <div class="inline-block align-top">Новые альбомы</div>
        <template v-slot:foward class="">Смотреть далее..</template>
      </my-galleries>
      <my-galleries
        class=""
        :pageAlbum="pageAlbumPopular"
        :galleryType="'popularAlbums'"
      >
        <div class="inline-block align-top">Популярное</div>
        <template v-slot:foward class="">Смотреть далее..</template>
      </my-galleries>
      <my-galleries
        class=""
        :pageAlbum="pageAlbumHiRes"
        :galleryType="'higResAlbums'"
      >
        <div class="inline-block align-top">Высокое разрешение</div>
        <template v-slot:foward class="">Смотреть далее..</template>
      </my-galleries>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageAlbumNew: [],
      pageAlbumPopular: [],
      pageAlbumHiRes: [],
      limit: 6,
      isLoading: true,
    };
  },

  methods: {
    async fetchAlbums() {
      try {
        await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=${this.limit}&_page=1`
        )
          .then((response) => response.json())
          .then((json) => (this.pageAlbumNew = json));
        await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=${this.limit}&_page=11`
        )
          .then((response) => response.json())
          .then((json) => (this.pageAlbumPopular = json));
        await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=${this.limit}&_page=21`
        )
          .then((response) => response.json())
          .then((json) => (this.pageAlbumHiRes = json));
      } catch (error) {
        alert(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.fetchAlbums();
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <div class="main-title">
      <span class="main-title_hi"> Привет! </span> <br />У нас для тебя есть
      несколько галерей с интересными картинками. <br />Для просмотра перейди в
      интересующую категорию, либо кликни сразу на галерею.
    </div>
    <div v-if="isLoading"><my-loader></my-loader></div>
    <div v-else>
      <my-galleries
        class="main-album"
        :pageAlbum="pageAlbumNew"
        :galleryType="'newAlbums'"
        ><div class="main-album_name">Новые альбомы</div>
        <template v-slot:foward class="main-album_lookFwd"
          >Смотреть далее..</template
        ></my-galleries
      >
      <my-galleries
        class="main-album"
        :pageAlbum="pageAlbumPopular"
        :galleryType="'popularAlbums'"
        ><div class="main-album_name">Популярное</div>
        <template v-slot:foward class="main-album_lookFwd"
          >Смотреть далее..</template
        ></my-galleries
      >
      <my-galleries
        class="main-album"
        :pageAlbum="pageAlbumHiRes"
        :galleryType="'higResAlbums'"
        ><div class="main-album_name">Высокое разрешение</div>
        <template v-slot:foward class="main-album_lookFwd"
          >Смотреть далее..</template
        ></my-galleries
      >
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


<style scoped>
.main-title {
  text-align: center;
  font-size: 1.3em;
  padding-top: 30px;
  line-height: 2em;
}
.main-title_hi {
  font-weight: bold;
  padding: 20px;
  display: inline-block;
}
.main-album_ {
  background-color: grey;
}
.main-album_name {
  font-size: 1.3em;
  text-align: center;
  padding: 20px;
}
.main-album_lookFwd {
  text-align: end;
}
</style>
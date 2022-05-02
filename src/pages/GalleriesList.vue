<template>
  <div>
    <div class="album_category">
      Подборка в категории {{ PageNames[$route.params.name].toLowerCase() }}
    </div>
    <div class="album_select">
      <span> Альбомов на странице </span>
      <select v-model="albumsQty">
        <option value="12" selected>12</option>
        <option value="24">24</option>
        <option value="48">48</option>
      </select>
    </div>
    <my-loader v-if="isLoading"></my-loader>
    <div v-else class="album_prev">
      <div class="album_img" v-for="album in albums" :key="album.id">
        <img
          :src="album.url"
          alt=""
          @click="
            $router.push({
              name: 'gallerypage',
              params: {
                name: $route.params.name,
                galleryid: album.id,
              },
            })
          "
        />
        <div class="album_name">Альбом {{ album.id }}</div>
      </div>
    </div>
    <my-pagination
      :currentPage="albumsPage"
      :allPages="allPages"
      @changePage="changePage"
    ></my-pagination>
  </div>
</template>

<script>
import MyPagination from "../components/UI/MyPagination.vue";
export default {
  components: { MyPagination },

  data() {
    return {
      albumsQty: 12,
      albums: [],
      allPages: 10,
      isLoading: true,
      albumsPage: 1,
    };
  },

  inject: ["PageNames"],

  methods: {
    async fetchAlbums() {
      try {
        await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=${
            this.albumsQty
          }&_page=${this.albumsPage + this.galleryPageName}`
        )
          .then((response) => response.json())
          .then((json) => {
            this.albums = json;
          });
        setTimeout(() => (this.isLoading = false), 2000);
      } catch (error) {
        console.log(error);
        isLoading = false;
      }
      /* В данном случае спиннер загрузки намеренно внесен в функцию setTimeout для имитации более долгой загрузки данных с сервера. В "боевой" ситуации спинер "выключается" в блоке finally 
      
      Также хочу отметить, что при переходе из главной страницы на страницу галереи (по кнокпе "смотреть далее"), отражаются не те галереи что были на превью: это связано лишь с особенностью серверной части и ее "топорностью".
      */
    },
    changePage(page) {
      this.albumsPage = page;
    },
  },
  computed: {
    galleryPageName() {
      switch (this.$route.params.name) {
        case "newAlbums":
          return 0;
        case "popularAlbums":
          return 10;
        case "higResAlbums":
          return 20;

        default:
          break;
      }

    },
  },

  beforeMount() {
    this.fetchAlbums();
  },

  watch: {
    albumsPage() {
      this.fetchAlbums();
    },
    albumsQty() {
      this.fetchAlbums();
    },
    galleryPageName() {
      this.fetchAlbums();
    },
  },
};
</script>

<style scoped>
.album_category {
  font-size: 2em;
  text-align: center;
  margin: 20px;
}
.album_prev {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
.album_img {
  margin: 20px;
  transition: all 0.3s;
}
.album_img img {
  height: 150px;
  width: 150px;
}
.album_name {
  text-align: center;
  transition: all 0.3s;
}
.album_img:hover {
  cursor: pointer;
  box-shadow: 0px 0px 10px #e74c3c;
  filter: brightness(1.3);
}

.album_img:hover .album_name {
  color: #e74c3c;
}
.album_select {
  margin: 20px;
}
</style>
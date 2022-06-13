<template>
  <div>
    <div class="text-center pt-5 text-lg md:text-xl lg:text-2xl px-3">
      Подборка в категории {{ PageNames[$route.params.name].toLowerCase() }}
    </div>
    <div class="text-center pt-5">
      <my-button @click="$router.go(-1)">Вернуться обратно</my-button>
    </div>
    <div class="text-center pt-5 md:text-lg">
      <span class="px-3"> Альбомов на странице </span>
      <select class="bg-gray-600" v-model="albumsQty">
        <option value="12" selected>12</option>
        <option value="24">24</option>
        <option value="48">48</option>
      </select>
    </div>
    <my-loader v-if="isLoading"></my-loader>
    <div v-else class="flex flex-row flex-wrap justify-center mt-10">
      <div
        class="w-3/5 text-center border-[1px] border-slate-50/30 rounded-2xl md:w-72 md:m-6 transition-all hover:brightness-110 hover:border-slate-50 mb-3 hover:cursor-pointer hover:text-orange-600"
        v-for="album in albums"
        :key="album.id"
      >
        <img
          :src="album.url"
          alt=""
          class="rounded-t-2xl"
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
        <div class="pt-2 pb-4">Альбом {{ album.id }}</div>
      </div>
    </div>
    <my-pagination
      :currentPage="albumsPage"
      :allPages="allPages"
      @changePage="changePage"
      class="mb-4"
    ></my-pagination>
  </div>
</template>

<script>
import MyButton from "../components/UI/MyButton.vue";
import MyPagination from "../components/UI/MyPagination.vue";
export default {
  components: { MyPagination, MyButton },

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
      /* В данном случае спиннер намеренно внесен в функцию setTimeout для имитации более долгой загрузки данных с сервера. В "боевой" ситуации спинер "выключается" в блоке finally 
      
      
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

<style scoped></style>

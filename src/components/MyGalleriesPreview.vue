<template>
  <div>
    <span class="album_pallete"> <slot /> </span>
    <div class="album_wrap">
      <div class="album_prev" v-for="album in pageAlbum" :key="album.id">
        <div>
          <img
            :src="album.thumbnailUrl"
            alt="Album Preview"
            @click="
              $router.push({
                name: 'gallerypage',
                params: {
                  name: galleryType,
                  galleryid: album.id,
                },
              })
            "
          />

          <div class="album_name">Альбом {{ album.id }}</div>
        </div>
        <hr />
      </div>
    </div>

    <div
      @click="
        $router.push({ name: 'galleriesList', params: { name: galleryType } })
      "
      class="album_forward"
    >
      <slot name="foward"></slot>
    </div>
    <hr />
  </div>
</template>

<script>
import MyPagination from "./UI/MyPagination.vue";
export default {
  components: { MyPagination },
  name: "my-galleries",
  props: {
    pageAlbum: {
      type: Array,
      required: true,
    },
    galleryType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  height: 150px;
  width: 150px;
  transition: all 0.3s;
}
img:hover {
  cursor: pointer;
  filter: brightness(1.2);
  box-shadow: 0px 0px 10px white;
}
.album_wrap {
  display: flex;
  justify-content: center;
}
.album_prev {
  display: inline-block;
  margin: 30px;
}
.album_name {
  text-align: center;
  transition: all 0.3s;
}
.album_pallete {
  padding: 10px;
  font-size: 1.4em;
}

.album_forward:hover {
  cursor: pointer;
  color: #e74c3c;
}
img:hover + .album_name {
  color: #e74c3c;
}
.album_forward {
  text-align: end;
  padding: 20px;
}
</style>

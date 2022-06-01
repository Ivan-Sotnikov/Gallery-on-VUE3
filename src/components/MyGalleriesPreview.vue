<template>
  <div class="max-w-[1500px] m-auto">
    <div
      @click="
        $router.push({ name: 'galleriesList', params: { name: galleryType } })
      "
      class="text-left text-lg pb-5 align-top md:text-center md:text-2xl hover:cursor-pointer hover:text-orange-500"
    >
      <span class="material-icons px-3"> collections </span> <slot></slot>
    </div>
    <div class="px-4 flex flex-wrap justify-center">
      <div
        class="mx-2 mb-14 border-slate-400 border-[1px] border-s rounded-lg hover:cursor-pointer hover:brightness-125 underline-offset-2 hover:text-orange-500 transition-all"
        v-for="album in pageAlbum"
        :key="album.id"
      >
        <div>
          <img
            :src="album.thumbnailUrl"
            class="rounded-t-lg"
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

          <div class="text-center mt-3">Альбом {{ album.id }}</div>
        </div>
      </div>
    </div>

    <div
      @click="
        $router.push({ name: 'galleriesList', params: { name: galleryType } })
      "
      class="text-center md:text-right md:text-xl md:px-5 mb-5 text-lg underline underline-offset-4 hover:cursor-pointer hover:text-orange-500"
    >
      <slot name="foward"></slot>
    </div>
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

<style scoped></style>

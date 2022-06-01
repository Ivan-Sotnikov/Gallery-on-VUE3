<template>
  <div class="text-white font-sansimage.png box-border">
    <my-header
      v-if="!$route.meta.isStart"
      :menuBtn="menuBtn"
      :class="{ show_header: !$route.meta.isStart }"
      @login="showModal('login', null, null)"
    />
    <div :class="{ hide_router: LetStart }">
      <router-view v-slot="{ Component }" @showModal="showModal">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <my-modal :show="modalShow" @closeModal="closeModal">
      <div v-if="modalImage">
        <div class="text-center py-5">
          {{ modalImageTitle.split(" ", 4).join(" ").toUpperCase() }}
        </div>
        <img :src="modalImageUrl" />
        <leave-comment
          :comments="modalComment"
        ></leave-comment>
      </div>

      <div v-if="modalLogin">
        <my-login></my-login>
      </div>
    </my-modal>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import MyGalleries from "./components/MyGalleriesPreview.vue";
import MyModal from "./components/MyModal.vue";
import LeaveComment from "./components/LeaveComment.vue";
import MyButton from "./components/UI/MyButton.vue";
import MyLogin from "./components/MyLogin.vue";
import headermenu from "@/data/myHeaderMenu.json";
import MyHeader from "@/components/MyHeader.vue";

export default {
  components: {
    MyGalleries,
    MyModal,
    LeaveComment,
    MyButton,
    MyLogin,
    MyHeader,
  },

  data() {
    return {
      menuBtn: headermenu,
      LetStart: false,
      startPage: true,
      pageAlbumNew: [],
      pageAlbumPopular: [],
      pageAlbumHiRes: [],
      limit: 4,
      pages: 5,
      modalImage: false,
      modalImageUrl: "",
      modalLogin: false,
      modalShow: false,
      modalComment: [],
      modalImageTitle: "",
    };
  },

  methods: {
    addComment(commentToPush) {
      this.comments.push(commentToPush);
    },

    start(flag) {
      this.LetStart = flag;
      this.$router.push("/");
      setTimeout(() => (this.startPage = false), 1000);
      this.fetchAlbums();
    },
    async showModal(type, url, id, title) {
      document.body.style.overflow = "hidden";
      switch (type) {
        case "image":
          this.modalImage = true;
          this.modalImageUrl = url;
          this.modalImageTitle = title;
          await this.fetchComments(id);
          break;
        case "login":
          this.modalLogin = true;
          break;
        default:
          console.error("Wrong content type for modal window,check the input");
      }
      this.modalShow = true;
    },
    closeModal() {
      this.modalShow = false;
      this.modalImage = false;
      this.modalLogin = false;
      this.modalComment = [];
      document.body.style.overflow = "";
    },

    async fetchAlbums() {
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${this.limit}&_page=1`
      )
        .then((response) => response.json())
        .then((json) => (this.pageAlbumNew = json));
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${this.limit}&_page=3`
      )
        .then((response) => response.json())
        .then((json) => (this.pageAlbumPopular = json));
      fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${this.limit}&_page=5`
      )
        .then((response) => response.json())
        .then((json) => (this.pageAlbumHiRes = json));
    },
    async fetchComments(id) {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.json())
        .then((json) => (this.modalComment = json));
    },
  },
  provide() {
    return {
      PageNames: {
        newAlbums: "Новые галереи",
        popularAlbums: "Популярные галереи",
        higResAlbums: "Высокое разрешение",
      },
    };
  },
};
</script>
<style scoped>
.hide_home-page {
  animation-duration: 1s;
  animation-name: slide;
  animation-fill-mode: forwards;
}

@keyframes slide {
  from {
    top: 0;
  }

  to {
    top: 100vh;
  }
}

.show_header {
  animation-delay: 1s;
  animation-duration: 2s;
  animation-name: show;
  animation-fill-mode: backwards;
}

@keyframes show {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.hide_router {
  animation-delay: 1.5s;
  animation-duration: 2s;
  animation-name: show;
  animation-fill-mode: backwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

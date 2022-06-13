<template>
  <div>
    <div class="text-center py-5">
      {{ modalImageTitle.split(" ", 4).join(" ").toUpperCase() }}
    </div>
    <img :src="modalImageUrl" />
    <leave-comment :comments="modalComment"></leave-comment>
  </div>
</template>

<script>
export default {
  name: "my-image",
  props: {
    modalImageTitle: {
      type: String,
      default: () => "",
    },
    modalImageUrl: {
      type: String,
      default: () => "",
    },
    modalImageId: {
      type: Number,
      default: () => "",
    },
  },
  data() {
    return {
      modalComment: [],
    };
  },
  mounted() {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${this.modalImageId}`
    )
      .then((response) => response.json())
      .then((json) => (this.modalComment = json));
  },
};
</script>

<template>
  <div>
    <div class="py-5 text-lg">Комментарии:</div>

    <div
      v-for="comment in comments"
      :key="comment.id"
      class="even:bg-gray-200 p-4 shadow-md"
    >
      <div class="font-bold pb-4">{{ comment.email }}</div>
      <div class="first-letter:uppercase">{{ comment.body }}</div>
    </div>
    <div
      v-for="MyComment in MyComments"
      :key="MyComment.id"
      class="bg-lime-200 shadow-md p-4"
    >
      <div class="font-bold pb-4">{{ MyComment.email }}</div>
      <div class="first-letter:uppercase">{{ MyComment.body }}</div>
    </div>
    <div class="border-t-2 mt-5">
      <div class="py-2 text-lg">Оставьте свой комментарий:</div>
      <form>
        <div class="relative">
          <input
            type="text"
            id="name"
            @keydown.enter.exact.prevent="createComment"
            v-model="MyCommentName"
            class="peer rounded-lg relative border-2 mt-5 placeholder-transparent"
            placeholder="name"
          />
          <label
            for="name"
            class="absolute left-1 -top-2 text-sm peer-placeholder-shown:text-gray-400 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:left-2 peer-placeholder-shown:text-md"
            >Ваше имя</label
          >
        </div>

        <div class="relative">
          <textarea
            id="comment"
            @keydown.enter.exact="createComment"
            v-model="MyCommentBody"
            placeholder="comment"
            class="peer rounded-lg relative border-2 w-full mt-10 placeholder-transparent"
          ></textarea>
          <label
            for="comment"
            class="absolute left-1 text-sm top-4 peer-placeholder-shown:text-gray-400 transition-all peer-placeholder-shown:top-11 peer-placeholder-shown:left-2 peer-placeholder-shown:text-md peer-placeholder-shown:after:content-['...']"
            >Комментарий</label
          >
        </div>
        <button
          type="button"
          @click="createComment"
          class="float-right border-2 p-1 rounded-lg"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "leave-comment",
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        month: "numeric",
        year: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      },
      MyComments: [],
      MyCommentBody: "",
      MyCommentName: "",
    };
  },
  methods: {
    createComment() {
      if (this.MyCommentBody == "" || this.MyCommentName == "") {
        this.deniedComment();
        return;
      }
      const commentToPush = {};
      commentToPush.id = this.MyComments.length;
      commentToPush.email = this.MyCommentName;
      commentToPush.body = this.MyCommentBody;
      this.MyComments.push(commentToPush);
      this.MyCommentName = "";
      this.MyCommentBody = "";
    },

    deniedComment() {
      alert('Необходимо заполнить поля "Ваше имя" и "Комментарий"');
    },
  },
};
</script>

<style scoped></style>

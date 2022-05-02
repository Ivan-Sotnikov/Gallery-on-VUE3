<template>
  <div class="comment_main">
    <div class="comment">Комментарии:</div>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <div class="comment_name">{{ comment.email }}</div>
      <div class="comment_text">{{ comment.body }}</div>
    </div>
    <div v-for="MyComment in MyComments" :key="MyComment.id" class="comment">
      <div class="comment_name">{{ MyComment.email }}</div>
      <div class="comment_text">{{ MyComment.body }}</div>
    </div>
    <div class="comment_leave">Оставьте свой комментарий:</div>
    <form class="comment_leave">
      <div class="comment_leave__name">
        <span>Ваше имя</span><br />
        <input
          type="text"
          @keydown.enter.exact.prevent="createComment"
          v-model="MyCommentName"
          placeholder="Введите имя.."
        />
      </div>

      <div class="comment_leave__text">
        <div>Комментарий</div>
        <textarea
          @keydown.enter.exact="createComment"
          v-model="MyCommentBody"
          placeholder="Ваш комментарий.."
        ></textarea>
      </div>
      <button type="button" @click="createComment" class="create_btn">
        Отправить
      </button>
    </form>
    <hr />
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
      /* this.$emit('addComment',{...this.commentToPush}); */
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

<style  scoped>
.comment_main {
  width: 100%;
}
.comment {
  font-family: Arial, Helvetica, sans-serif;
  padding: 15px;
  margin-bottom: 5px;

  border-bottom: 2px solid rgb(203, 203, 203);
  border-top: 2px solid rgb(203, 203, 203);
}
.comment_name {
  font-size: 1.2em;
  font-weight: bold;
}

.comment_text {
  margin-top: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.comment-date {
  opacity: 60%;
  font-size: 0.6em;
  font-style: italic;
}

.comment_leave {
  padding: 5px;
  background-color: rgb(200, 200, 200);
}

.comment_leave__name {
  margin-bottom: 15px;
}
.comment_leave__name span {
  padding-bottom: 5px;
  display: inline-block;
}
.comment_leave__text textarea {
  resize: none;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
}
.comment_leave__text div {
  padding-bottom: 5px;
}
</style>
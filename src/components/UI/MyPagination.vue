<template>
  <div class="pagination">
    <div
      class="page"
      @click="$emit('changePage', changePage($event.target.id))"
      :class="{ unavaliable: currentPage == 1 }"
    >
      <span id="prev" class="material-icons"> navigate_before </span>
    </div>
    <div
      v-for="page in allPages"
      :key="page"
      class="page"
      :class="{ current: page == currentPage }"
      @click="$emit('changePage', page)"
    >
      {{ page }}
    </div>
    <div
      class="page"
      @click="$emit('changePage', changePage($event.target.id))"
      :class="{ unavaliable: currentPage == allPages }"
    >
      <span id="next" class="material-icons"> navigate_next </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    allPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(elem) {
      if (elem === "next") {
        if (this.currentPage == this.allPages) return this.currentPage;
        let next = this.currentPage + 1;
        return next;
      } else {
        if (this.currentPage == 1) return 1;
        let prev = this.currentPage - 1;
        return prev;
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
}
.page {
  border: 1px solid black;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
}
.page:hover {
  color: blue;
}
.unavaliable {
  background-color: grey;
  color: black;
  cursor: default;
}
.unavaliable:hover {
  color: black;
}

.current {
  background-color: #e74c3c;
}
</style>
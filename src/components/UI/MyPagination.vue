<template>
  <div class="flex justify-center h-6 select-none">
    <div
      class="w-6 text-center hover:bg-orange-400 hover:cursor-pointer rounded-md transition-all"
      @click="$emit('changePage', changePage($event.target.id))"
      :class="{
        'text-gray-500': currentPage == 1,
        'hover:bg-transparent': currentPage == 1,
        'hover:cursor-default': currentPage == 1,
      }"
    >
      <span id="prev" class="material-icons"> navigate_before </span>
    </div>
    <div
      v-for="page in allPages"
      :key="page"
      class="w-6 text-center hover:bg-orange-400 hover:cursor-pointer rounded-md transition-all"
      :class="{ 'bg-[#e74c3c]': page == currentPage }"
      @click="$emit('changePage', page)"
    >
      {{ page }}
    </div>
    <div
      class="w-6 hover:bg-orange-400 hover:cursor-pointer rounded-md transition-all"
      @click="$emit('changePage', changePage($event.target.id))"
      :class="{
        'text-gray-500': currentPage == allPages,
        'hover:bg-transparent': currentPage == allPages,
        'hover:cursor-default': currentPage == allPages,
      }"
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

<style scoped></style>

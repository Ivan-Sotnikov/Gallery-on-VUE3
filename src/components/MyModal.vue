<template>
  <div v-if="show" class="inset-0 fixed flex overflow-scroll">
    <div
      class="z-0 fixed w-full h-full bg-black opacity-40"
      @click="$emit('closeModal')"
    ></div>
    <div
      class="m-auto bg-white text-black z-10 rounded-xl p-10 w-screen md:w-96 relative"
    >
      <slot></slot>

      <div
        class="absolute top-2 right-2 select-none hover:cursor-pointer hover:text-[#e74c3c] transition-all"
        @click="$emit('closeModal')"
      >
        <span class="material-icons"> close </span>
      </div>
    </div>
  </div>
</template>

<script>
import LeaveComment from "./LeaveComment.vue";
export default {
  components: { LeaveComment },
  name: "my-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style></style>

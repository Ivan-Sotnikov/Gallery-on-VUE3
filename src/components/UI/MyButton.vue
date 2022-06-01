<template>
  <div class="inline-block">
    <button
      class="flex self-center text-xl text-[#e74c3c] cursor-pointer py-3 px-12 border-2 rounded-xl border-[#e74c3c] hover:bg-[#e74c3c] hover:text-white transition-all duration-300 ease-in-out active:brightness-90"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped></style>

<template>
  <div v-if="show" class="modal">
    <div class="modal-background" @click="$emit('closeModal')"></div>
    <div class="content">
      <slot></slot>
     
      <div class="close-btn" @click="$emit('closeModal')">
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

<style >
.modal {
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  position: fixed;
  display: flex;
  overflow: scroll;
}
.modal-background {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0;
}
.content {
  margin: auto;
  position: relative;
  padding: 20px;
  background-color: white;
  color: black;
  border-radius: 10px;
  min-height: 50px;
  min-width: 100px;
  max-width: 400px;
  z-index: 1;
}
.close-btn{
  position: absolute;
  top: 10px;
  right: 10px;
  user-select: none;
  
}
.close-btn:hover{
  cursor: pointer;
  color: #e74c3c;
  text-shadow: 0px 0px 3px black;
}

</style>
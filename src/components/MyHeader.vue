<template>
  <div>
    <div class="header" @blur="showDrop(null)" tabindex="0">
      <div @click="$emit('login')" class="login-btn">
        <span class="material-icons"> account_circle </span>
      </div>
      <div class="menu-btn_wrap">
        <div
          v-for="(key, index) of menuBtn"
          @click.self="showDrop(index)"
          :key="index"
          class="menu-btn"
        >
          {{ key.head }}
          <div v-show="index == showIndex" class="menu-btn_dropdown">
            <div
              class="menu-btn_dropdown-link"
              v-for="link in key.links"
              :key="link.id"
              @click="changeLink(link)"
            >
              <div>{{ link.linkName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-header",
  props: {
    menuBtn: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      dropMenu: { id: "", name: "", link: "" },
      showIndex: null,
    };
  },
  methods: {
    showDrop(index) {
      this.showIndex = index;
    },
    changeLink(link) {
      this.$router.push({ name: link.linkHref, params: link.linkParam });
      this.showIndex = null;
    },
  },
};
</script>

<style  scoped>
.header {
  background-color: rgb(49, 49, 49);
  height: 50px;
  width: 100vw;
  color: white;
  padding: 0;
  margin: 0;
  border-bottom: 5px solid #e74c3c;
  display: flex;
  justify-content: start;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.menu-btn {
  cursor: pointer;
  background-color: rgb(49, 49, 49);
  height: 100%;
  width: 150px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  position: relative;
  user-select: none;
  border-radius: 10px;
  transition: all 0.3s;
}
.menu-btn:hover {
  background-color: rgb(95, 95, 95);
}
.menu-btn_wrap {
  display: table;
}
.menu-btn_dropdown {
  position: absolute;
  width: 100%;
  top: 100%;
  background-color: rgb(49, 49, 49);
  border-radius: 10px;
}
.menu-btn_dropdown-link:hover {
  background-color: rgb(95, 95, 95);
}
.menu-btn_dropdown-link {
  border-radius: inherit;
  min-height: 60px;
  text-decoration: none;

  color: white;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  user-select: none;
}
.login-btn:hover {
  cursor: pointer;
  text-shadow: 0px 0px 5px white;
}
</style>

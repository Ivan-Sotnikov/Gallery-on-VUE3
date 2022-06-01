<template>
  <div>
    <div class="h-14 bg-gray-800 border-b-4 border-[#e74c3c]">
      <div
        @click="$emit('login')"
        class="select-none absolute right-3 top-3 cursor-pointer hover:shadow"
      >
        <span class="material-icons"> account_circle </span>
      </div>
      <span
        class="material-icons select-none absolute left-3 top-3 lg:invisible"
        @click="showBurger = !showBurger"
        :class="{ invisible: showBurger }"
      >
        menu
      </span>
      <span
        class="material-icons select-none absolute left-3 top-3 lg:invisible"
        @click="showBurger = !showBurger"
        :class="{ invisible: !showBurger }"
      >
        close
      </span>

      <div
        :class="{ invisible: !showBurger }"
        tabindex="0"
        @blur="showDrop(null, null)"
        class="absolute top-14 p-4 select-none lg:visible lg:top-auto lg:inline-flex lg: lg:p-2 lg:w-[90%] bg-gray-800 lg:bg-transparent"
      >
        <div
          v-for="(key, index) of menuBtn"
          :key="index"
          :linkHref="key.linkHref"
          class="p-1 cursor-pointer text-xl hovertest w-80"
          :class="{
            'bg-gray-700': index == showIndex,
            'rounded-lg': index == showIndex,
          }"
        >
          <div
            @click.self="showDrop(key, index)"
            class="hover:bg-gray-700 hover:rounded-lg lg:text-center"
          >
            <span
              v-if="key.linkHref == ''"
              @click.self="showDrop(key, index)"
              class="material-icons align-top pr-3 lg:hidden"
            >
              keyboard_arrow_down
            </span>
            <span
              class="material-icons align-top pr-3"
              v-if="key.linkHref !== ''"
            >
              home
            </span>

            {{ key.head }}
          </div>
          <div
            class="p-1 cursor-pointer"
            v-for="link in key.links"
            :key="link.id"
            @click="changeLink(link)"
            v-show="index == showIndex"
          >
            <div class="hover:bg-white/10 hover:rounded-md">
              <span class="material-icons"> minimize </span>
              {{ link.linkName }}
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
      showBurger: false,
    };
  },
  methods: {
    showDrop(key, index) {
      if (index == null) {
        this.showIndex = null;
        this.showBurger = false;
        return;
      }
      if (key.linkHref !== "") {
        this.changeLink(key);
        return;
      }
      if (index == this.showIndex) {
        this.showIndex = null;
        return;
      }
      this.showIndex = index;
    },
    changeLink(link) {
      this.$router.push({ name: link.linkHref, params: link.linkParam });
      this.showIndex = null;
      this.showBurger = null;
    },
  },
};
</script>

<style scoped></style>

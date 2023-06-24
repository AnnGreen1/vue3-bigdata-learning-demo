<template>
  <div class="app-container">
    <nav-Bar />
    <div class="app-container-main">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
import navBar from "@/layouts/components/navBar.vue";
export default {
  name: "Layout",
  components: {
    navBar,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: url("@/assets/image/newBg.jpg") no-repeat center center;
  background-size: cover;
  &-main {
    height: calc(100% - 65px);
    box-sizing: border-box;
    padding-bottom: 10px;
    width: 100%;
  }
}
</style>

<template>
  <div class="navbar">
    <div class="navbar-title">大数据分析系统</div>
    <div class="navbar-time">{{ date }} {{ time }}</div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getDate, getTime } from "@/utils/date";
export default {
  name: "navBar",
  setup() {
    const date = ref(getDate());
    const time = ref(getTime());

    onMounted(() => {
      setInterval(() => {
        time.value = getTime();
      }, 1000);
    });

    return {
      date,
      time,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 65px;
  line-height: 50px;
  width: 100%;
  background: url("@/assets/image/nav.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  position: relative;
  color: #b3efff;
  &-title {
    font-size: 1.23rem;
    font-family: "黑体";
    cursor: pointer;
  }
  &-time {
    position: absolute;
    right: 8%;
    top: 50%;
    transform: translateY(-35%);
    font-family: "Time Number";
    font-weight: bold;
    font-size: 1.22rem;
  }
}
</style>

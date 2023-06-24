<template>
  <div class="home-container">
    {{ more }}
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const more = ref("more");
    more.value +='!'

    return {
      more
    }
  },
};
</script>

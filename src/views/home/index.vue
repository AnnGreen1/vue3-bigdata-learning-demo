<template>
  <div class="home-container">
    {{ home }}
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const home = ref("home");
    home.value+='!'

    return {
      home
    }
  },
};
</script>

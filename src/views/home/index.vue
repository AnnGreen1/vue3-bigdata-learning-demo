<template>
  <div class="home-container">
    {{ home }}
  </div>
</template>

<script>
export default {
  setup(props, context) {
    const home = ref("home");
  },
};
</script>

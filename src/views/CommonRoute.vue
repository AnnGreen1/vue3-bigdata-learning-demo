<template>
  <div>
    <div class="common-style">CommonRoute.vue</div>
    <div class="common-style">
      <defineProps name="袁明月" :age="age" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import defineProps from './Mark/defineProps.vue'

import { ref } from "vue"
const age = ref(18)
</script>

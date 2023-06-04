<template>
  <div>
    <div class="common-style">
      {{ user }}
    </div>
    <div class="common-style">
      {{ user2 }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

interface User {
  name: string;
  age: string | number;
}

const user: User = reactive({
  name: "前端开发爱好者",
  age: "20",
});

const user2 = reactive<User>({
  name: "前端开发爱好者",
  age: "20",
});
</script>

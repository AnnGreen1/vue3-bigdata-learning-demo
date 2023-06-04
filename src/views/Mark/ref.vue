<template>
  <div>
    <div class="common-style">
      {{ initCode }}
    </div>
    <div class="common-style">
      {{ initCodeRef }}
    </div>
    <div class="common-style">
      {{ user }}
    </div>
    <div class="common-style">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from 'vue'

const initCode = ref<string | number>("200");

interface User {
  name: string
  age: string | number
}

const user = ref<User>({
    name:'anngreen',
    age:18
})

const initCodeRef: Ref<string | number> = ref('200')
</script>

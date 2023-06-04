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
import { ref, computed } from 'vue'

const count = ref<number>(0)

// 推导得到的类型：ComputedRef<string>
const user = computed(() => count.value + '前端开发爱好者')

const user2 = computed<string>(() => {
  // 若返回值不是 string 类型则会报错
  return '前端开发爱好者'
})
</script>
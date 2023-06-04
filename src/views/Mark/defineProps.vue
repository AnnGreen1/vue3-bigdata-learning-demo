<template>
    <div>
        <div class="common-style">
            {{ props.name }}
        </div>
        <div class="common-style">
            {{ props.age }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  age: Number
})
</script>
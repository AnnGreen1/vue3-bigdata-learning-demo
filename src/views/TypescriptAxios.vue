<template>
    <div>
        <div class="common-style">
            TypescriptAxios.vue
        </div>
           {{ qinghua }}
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { randqinghua } from '../api/api'
import { randqinghuaRequest } from '../model/commonapi'

const qinghua = ref('')
onMounted(() => {
    let randqinghua_data:randqinghuaRequest = { 'format': 'json' }
    randqinghua(randqinghua_data).then((res) => {
        console.log(res)
        qinghua.value = res.data.content;
    }).catch((error) => {
        console.log(error);
    })
});
</script>
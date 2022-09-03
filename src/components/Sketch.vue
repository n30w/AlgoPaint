<!-- Inject sketch into website -->
<template>
<div id="p5Canvas"></div>
</template>

<script setup lang="ts">
import { sketch } from "./components/sketch/sketch";
import { onMounted } from "vue";
import P5 from "p5";

onMounted(() => {
    new P5(sketch); 
})
</script>

<style lang="scss">
@import "./index.scss"; 
</style>
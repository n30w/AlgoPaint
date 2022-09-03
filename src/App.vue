<template>
<div class="container-fluid">
	<Test />
</div>
<div class="container-fluid">
	<Sketch />
</div>
</template>

<script setup lang="ts">
import Test from './components/Test.vue';
// @ts-ignore
import Sketch from './components/Sketch.vue';
</script>

<style lang="scss">
@import "./index.scss"
</style>
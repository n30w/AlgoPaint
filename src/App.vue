<template>
<div class="container">
	<div class="row">
		<div class="col-12 justify-content-center text-center">
			<Test />
		</div>
  	</div>

  	<div class="d-flex justify-content-center">
		<Sketch />
  	</div>
</div>
</template>

<script setup lang="ts">
import Test from './components/Test.vue';
// @ts-ignore
import Sketch from './components/Sketch.vue';
</script>

<style lang="scss">
// @import "./index.scss"
</style>
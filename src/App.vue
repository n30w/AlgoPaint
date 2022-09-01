<template>
<div>AHAHSDIASDI WORK PLEASE GOD DAMN {{ name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

let myName: string;
myName = "brahhh"

export default defineComponent({
	data() {
		return {
			name: myName,
		}
	}
})
</script>
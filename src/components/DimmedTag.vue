<template>
	<span class="border border-gray-300 font-bold p-1 rounded text-gray-500 text-xs">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "DimmedTag",
	props: {
		/**
		 * Text to show inside the tag
		 */ 
		text: {
			required: true,
			type: String
		}
	}
});
</script>
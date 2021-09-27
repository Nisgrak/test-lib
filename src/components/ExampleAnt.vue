<template>
	<a-typography-paragraph
	>
    Exampleee
	</a-typography-paragraph>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { TypographyParagraph as ATypographyParagraph } from "ant-design-vue/lib/typography";

export default defineComponent({
	name: "ExampleAnt",
	components: {
		ATypographyParagraph
	}
});
</script>
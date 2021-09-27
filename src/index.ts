import type { App } from "vue";


import DimmedTag from "./components/DimmedTag.vue";
export { default as DimmedTag } from "./components/DimmedTag.vue";

import ExampleAnt from "./components/ExampleAnt.vue";
export { default as ExampleAnt } from "./components/ExampleAnt.vue";

export function install(app: any) {
	app.component("DimmedTag", DimmedTag);
	// app.component("ExampleAnt", ExampleAnt);

}
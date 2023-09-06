import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

const app = createApp(App);

const myFTT = defineAsyncComponent(() => import("remote/FTT"));
const myCounter = defineAsyncComponent(() => import("remote/Counter"));
const NewComponent = defineAsyncComponent(() => import("otherRemote/NewComponent"));
app.component("myFTT", myFTT);
app.component("myCounter", myCounter);
app.component("myCatView", NewComponent);
app.mount('#freeTextToolContainer')
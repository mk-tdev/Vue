import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

import BaseContainer from "./components/base/BaseContainer.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseCheckBox from "./components/base/BaseCheckBox.vue";
import BaseLink from "./components/base/BaseLink.vue";
import BaseBadge from "./components/base/BaseBadge.vue";
import BaseSpinner from "./components/base/BaseSpinner.vue";
import BaseDialog from "./components/base/BaseDialog.vue";

const app = createApp(App);

app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);
app.component("base-container", BaseContainer);
app.component("base-checkbox", BaseCheckBox);
app.component("base-spinner", BaseSpinner);
app.component("base-dialog", BaseDialog);
app.component("base-link", BaseLink);

app.use(router);
app.use(store);

app.mount("#app");

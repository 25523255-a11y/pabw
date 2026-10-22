import { profil, daftarProyek } from "./data.js";
import * as state from "./state.js";
import * as dom from "./dom.js";
import * as events from "./events.js";

// Initialize renderer subscription
state.onChange((s) => {
  dom.render(s, { profil, daftarProyek });
});

// Load persisted state (if any) then render and attach event listeners
const init = () => {
  const loaded = state.loadFromStorage();
  if (loaded) {
    state.replaceState(loaded);
  }

  // initial render
  dom.render(state.getState(), { profil, daftarProyek });

  // attach events
  events.init();
};

init();

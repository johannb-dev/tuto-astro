import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--stirring-hummingbird-0a33b4.netlify.app/",
  integrations: [preact()]
});
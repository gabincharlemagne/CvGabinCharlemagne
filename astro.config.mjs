import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://gabincharlemagne.github.io",
  base: "CvGabinCharlemagne",
  trailingSlash: "always",
  integrations: [tailwind()],
});

import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sourceDirectory = "dist";
const assetsDirectory = join(sourceDirectory, "assets");
const outputDirectory = "release";

const cssFile = readdirSync(assetsDirectory).find((file) => file.endsWith(".css"));
const scriptFile = readdirSync(assetsDirectory).find((file) => file.endsWith(".js"));

if (!cssFile || !scriptFile) {
  throw new Error("Static CSS or JavaScript bundle is missing.");
}

const css = readFileSync(join(assetsDirectory, cssFile), "utf8").replaceAll("</style", "<\\/style");
const script = readFileSync(join(assetsDirectory, scriptFile), "utf8").replaceAll("</script", "<\\/script");

let html = readFileSync(join(sourceDirectory, "index.html"), "utf8");
html = html.replace(/<link[^>]+rel="stylesheet"[^>]*>/, () => `<style>${css}</style>`);
html = html.replace(/<script[^>]+src="[^"]+"[^>]*><\/script>/, () => `<script type="module">${script}</script>`);

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, "index.html"), html, "utf8");

import { writeFile } from "node:fs/promises";
import { SitemapStream, streamToPromise } from "sitemap";

const DOMAIN = "https://thalitadosreis.ch";
const PAGES = ["/", "/projects", "/contact"];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: DOMAIN });

  PAGES.forEach((url) => {
    sitemap.write({ url, changefreq: "monthly", priority: 1.0 });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  await writeFile("./public/sitemap.xml", data.toString());
  console.log("sitemap.xml generated");
}

generateSitemap().catch((error) => {
  console.error("Failed to generate sitemap", error);
  process.exitCode = 1;
});

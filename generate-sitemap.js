import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

const domain = "https://thalitadosreis.ch";
const pages = ["/"];

const sitemap = new SitemapStream({ hostname: domain });
pages.forEach((url) =>
  sitemap.write({ url, changefreq: "monthly", priority: 1.0 })
);
sitemap.end();

const out = createWriteStream("./public/sitemap.xml");
streamToPromise(sitemap).then((data) => {
  out.write(data.toString());
  console.log("sitemap.xml generated");
});

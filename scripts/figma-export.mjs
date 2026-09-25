// One-off asset export from the Figma design into /public.
// Usage: node --env-file=.env scripts/figma-export.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const FILE_KEY = "AM59jpDPnGe1kww6csztqa";
const TOKEN = process.env.FIGMA_TOKEN;
if (!TOKEN) {
  console.error("FIGMA_TOKEN is missing. Add it to .env");
  process.exit(1);
}

const OUT = path.join(process.cwd(), "public");

// Image fills, keyed by the start of their Figma imageRef
const IMAGE_FILLS = {
  "3f81c8d7": "images/hero.jpg",
  "5c94bd9f": "images/process-consultation.jpg",
  f3973519: "images/process-curation.jpg",
  ea4192c2: "images/process-confirmation.jpg",
  ccc34fd7: "images/destination-europe.jpg",
  "86190af2": "images/destination-asia.jpg",
  "43870715": "images/destination-india.jpg",
  "26c101c9": "images/about-history.jpg",
  b3756c05: "images/about-philosophy.jpg",
  ff47788a: "images/avatar-rachel.jpg",
  "89e402d0": "images/avatar-alex.jpg",
  "5c240d6c": "images/avatar-bella.jpg",
  "953506d3": "images/contact.jpg",
  "225087b7": "images/flag-in.png",
};

// Vector nodes rendered as SVG
const SVG_NODES = {
  "I237:23206;206:17": "logo.svg",
  "237:23184": "logo-footer.svg",
  "I237:23114;237:662;237:635": "icons/curated.svg",
  "I237:23115;237:662;237:633": "icons/logistics.svg",
  "I237:23116;237:662;237:631": "icons/support.svg",
  "I237:23205;228:2683": "icons/whatsapp.svg",
};

async function api(endpoint) {
  const res = await fetch(`https://api.figma.com/v1/${endpoint}`, {
    headers: { "X-Figma-Token": TOKEN },
  });
  if (!res.ok) throw new Error(`${endpoint}: ${res.status} ${await res.text()}`);
  return res.json();
}

async function download(url, file) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${file}: ${res.status}`);
  const dest = path.join(OUT, file);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  console.log("saved", file);
}

const { meta } = await api(`files/${FILE_KEY}/images`);
for (const [ref, url] of Object.entries(meta.images)) {
  const prefix = Object.keys(IMAGE_FILLS).find((p) => ref.startsWith(p));
  if (prefix) await download(url, IMAGE_FILLS[prefix]);
}

const ids = Object.keys(SVG_NODES).join(",");
const { images } = await api(
  `images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg&svg_outline_text=true`,
);
for (const [id, url] of Object.entries(images)) {
  if (url) await download(url, SVG_NODES[id]);
  else console.warn("no render for", id);
}

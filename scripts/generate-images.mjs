import { config } from 'dotenv';
config({ path: new URL('../.env.local', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1') });

import { generateImage } from 'ai';
import { gateway } from '@ai-sdk/gateway';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../public/images');
fs.mkdirSync(outputDir, { recursive: true });

const MODEL = 'openai/gpt-image-2';

const images = [
  {
    name: 'hero-bg.png',
    prompt: 'Wide cinematic photo of a warm intimate Jewish Torah study gathering. Young Israeli men and women sitting around a rustic wooden table covered with open books, warm string lights overhead, soft golden candlelight, shallow depth of field, photorealistic, warm cream and brown tones, cozy community atmosphere, high resolution landscape orientation',
  },
  {
    name: 'activity-circles.png',
    prompt: 'Intimate circle of young Jewish adults seated around a low wooden table in a warmly lit room, open books and cups of tea on the table, engaged in lively conversation, string lights in background, photorealistic, warm golden hour lighting, Israeli community atmosphere, documentary photography style',
  },
  {
    name: 'activity-shuk.png',
    prompt: 'Outdoor Jewish Torah study booth at an Israeli market (shuk), wooden table with books and pamphlets, young people stopping to learn, colorful market stalls in background, evening warm lighting, photorealistic, vibrant street atmosphere, community outreach',
  },
  {
    name: 'activity-yavne.png',
    prompt: 'Group of young Jewish men studying Torah together in a modern beit midrash, sitting at long wooden tables with open books and notebooks, warm library lighting, focused and engaged expressions, photorealistic, warm tones, sense of growth and purpose',
  },
  {
    name: 'cta-bg.png',
    prompt: 'Aerial view of a warm Shabbat dinner gathering, multiple hands reaching for challah bread at a beautifully set table with candles and flowers, warm golden light, joyful community celebration, photorealistic, rich warm tones, top-down perspective',
  },
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateWithRetry(img, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const { images: generated } = await generateImage({
        model: MODEL,
        prompt: img.prompt,
        size: '1536x1024',
        providerOptions: { gateway: { tags: ['hashivenu-images'] } },
      });
      const dest = path.join(outputDir, img.name);
      fs.writeFileSync(dest, Buffer.from(generated[0].uint8Array));
      console.log(`  ✓ Saved: ${dest}`);
      return;
    } catch (err) {
      console.error(`  attempt ${attempt} failed: ${err.message}`);
      if (attempt < retries) await sleep(5000 * attempt);
    }
  }
  console.error(`  ✗ Gave up: ${img.name}`);
}

async function generateAll() {
  for (const img of images) {
    const dest = path.join(outputDir, img.name);
    if (fs.existsSync(dest)) {
      console.log(`  ↩ Skip (exists): ${img.name}`);
      continue;
    }
    console.log(`Generating: ${img.name}...`);
    await generateWithRetry(img);
    await sleep(3000); // avoid rate limit between requests
  }
  console.log('\nDone!');
}

generateAll();

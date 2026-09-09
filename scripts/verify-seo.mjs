import fs from "fs";

function checkFile(path, name) {
  if (!fs.existsSync(path)) {
    console.log(`File ${path} does not exist`);
    return;
  }
  const html = fs.readFileSync(path, 'utf8');
  console.log(`\n=== ${name} ===`);
  
  const h1Matches = html.match(/<h1[\s\S]*?<\/h1>/gi);
  console.log('H1 Count:', h1Matches ? h1Matches.length : 0);
  if (h1Matches) h1Matches.forEach((h, i) => console.log(`  H1 [${i}]: ${h.replace(/\s+/g, ' ')}`));

  const titleMatch = html.match(/<title[\s\S]*?<\/title>/i);
  console.log('Title:', titleMatch ? titleMatch[0] : 'None');

  const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*>/i);
  console.log('Canonical:', canonicalMatch ? canonicalMatch[0] : 'None');

  const ogTitle = html.match(/<meta[^>]*property="og:title"[^>]*>/i);
  console.log('OG Title:', ogTitle ? ogTitle[0] : 'None');

  const scripts = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
  console.log('JSON-LD count:', scripts ? scripts.length : 0);
  if (scripts) {
    scripts.forEach((s, idx) => {
      const raw = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '');
      try {
        const parsed = JSON.parse(raw);
        console.log(`  JSON-LD [${idx}] @type:`, parsed['@type'] || (parsed['@graph'] ? 'Graph' : 'Unknown'));
      } catch (e) {
        console.log(`  JSON-LD [${idx}] parse error:`, e.message);
      }
    });
  }
}

checkFile('.next/server/app/index.html', 'HOME PAGE');
checkFile('.next/server/app/services.html', 'SERVICES PAGE');
checkFile('.next/server/app/about.html', 'ABOUT PAGE');
checkFile('.next/server/app/contact.html', 'CONTACT PAGE');
checkFile('.next/server/app/dog-care-process.html', 'DOG CARE PROCESS PAGE');
checkFile('.next/server/app/food-and-health.html', 'FOOD & HEALTH PAGE');
checkFile('.next/server/app/gallery.html', 'GALLERY PAGE');

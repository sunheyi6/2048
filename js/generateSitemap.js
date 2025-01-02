const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

// Creates a sitemap object given the input configuration with URLs
const sitemap = new SitemapStream({ hostname: 'https://www.2048qp.com' });

const writeStream = createWriteStream('././sitemap.xml');
sitemap.pipe(writeStream);

sitemap.write({ url: '/', changefreq: 'daily', priority: 0.3 });
sitemap.end();

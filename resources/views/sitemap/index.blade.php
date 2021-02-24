<?php echo '<?xml version="1.0" encoding="UTF-8"?>'; ?>

<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://bridyc.com/sitemap/static</loc>
        <lastmod>2021-02-19T11:58:36+00:00</lastmod>
    </sitemap>
    <sitemap>
        <loc>https://bridyc.com/sitemap/channels</loc>
        <lastmod>{{ $channel->created_at->tz('UTC')->toAtomString() }}</lastmod>
    </sitemap>
</sitemapindex>

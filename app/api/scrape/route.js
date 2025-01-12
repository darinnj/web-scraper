// app/api/scrape/route.js

import axios from 'axios';
import { load } from 'cheerio';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'No URL provided.' }, { status: 400 });
    }

    try {
        const { data: html } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            },
        });
        const $ = load(html);
          const headings = [];
          $('h2').each((_, el) => headings.push($(el).text()));

        return NextResponse.json({
            success: true,
            data: {
                headings,
            },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Scrape failed.' }, { status: 500 });
    }
}

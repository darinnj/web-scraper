# Web Scraper
A web scraping application built with Next.js that extracts data from any website by using ?url=<target-url>. Currently, it extracts h2 headings so the code would need to be updated to extract other data.

## Features
- Scrapes fragrance notes and images from Fragrantica
- Built with Next.js API routes
- Uses Cheerio for HTML parsing

## Technologies Used
- Next.js
- Cheerio
- JavaScript (ES6+)

## Setup
1. Clone the repository:

```bash
git clone https://github.com/username/repository.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```


## Usage
Send a GET request to `/api/scrape?url=<target-url>` to scrape data from the specified URL.

## License
MIT
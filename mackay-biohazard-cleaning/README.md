# Mackay Biohazard Cleaning

Static Next.js website for a high-trust specialist cleaning business serving Mackay and surrounding regions.

## Stack

- Next.js App Router
- Tailwind CSS
- Static export (`output: 'export'`)
- Vercel deployment target

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Environment variables

Create a `.env.local` file using `.env.example`.

- `NEXT_PUBLIC_PHONE`
- `NEXT_PUBLIC_FORM_ENDPOINT`
- `NEXT_PUBLIC_SITE_URL`

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add the environment variables from `.env.example` in the Vercel project settings.
4. Build command: `npm run build`
5. Output directory: `out`
6. Deploy.

## Notes

- `next-sitemap` is configured to generate `sitemap.xml` and `robots.txt` after build.
- `next/image` is used with `unoptimized: true` to support static export.
- Placeholder SVG hero images are included and can be replaced with final AI-generated imagery using the same file names.

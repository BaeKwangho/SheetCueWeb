# SheetCue Web Landing

This web app is based on the Finwise Vercel template:

- Template page: https://vercel.com/templates/next.js/finwise-saas-landing-page
- Source repo: https://github.com/nexi-launch/finwise-landing-page

The implementation keeps the template's Next.js, Tailwind, component, and
data-file structure, then replaces the product content with SheetCue's
pre-release landing page copy.

The `public/privacy` directory includes the current contents of
`BaeKwangho/SheetCue-Privacy`, so the homepage can serve policy and support
pages from this repository.

## Sections

- Hero
- Product proof strip
- Feature benefits
- Workflow
- Privacy and trust
- FAQ
- Release CTA
- Footer

Pricing, testimonials, account flows, analytics, and store download buttons are
not used because SheetCue is still in pre-release official-page mode.

## Commands

```sh
npm install
npm run dev
npm run build
npm run lint
```

Open http://localhost:3000 during local development.

## Current Notes

The current app uses Next.js and Tailwind from the Finwise boilerplate. `npm
audit` may report a remaining moderate PostCSS advisory through Next's nested
dependency; review again before public deployment.

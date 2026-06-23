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

## Release Notes Authoring

Release notes live in `src/data/releaseNotes.ts`. Write them for ordinary
SheetCue users, not for developers or store reviewers.

- Use the real SheetCue app git history as source material, especially release
  tags and commit ranges in `/Users/baekwangho/sheet-cue` such as
  `v1.0.5..v1.0.6`.
- Include only changes a user can understand or experience: practice flow,
  playback behavior, preset recovery, import, reminders, layout, help text,
  purchases, ads, privacy, and stability.
- Do not expose internal implementation details such as CI, signing, build
  numbers, review notes, telemetry tools, design-token migrations, test
  scaffolding, or branch names.
- Prefer plain user language over commit wording. For example, write
  "existing preset images reappear after updating" instead of "refresh crop
  image URIs by revision".
- Store listings can be used as a quick cross-check, but the website release
  notes may be more detailed when the extra detail comes from public-safe git
  history.
- Keep each version short enough to scan in an in-app tab: one practical summary,
  a few main changes, a few fixes or clarifications, and one note only when it
  helps the user decide what to check after updating.

## Current Notes

The current app uses Next.js and Tailwind from the Finwise boilerplate. `npm
audit` may report a remaining moderate PostCSS advisory through Next's nested
dependency; review again before public deployment.

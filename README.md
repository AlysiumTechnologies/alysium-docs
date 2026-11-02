# Alysium Docs

Alysium's public consumer help library, built with native Mintlify navigation, search and article rendering.

## Local preview and checks

Use Node 24 with the current Mintlify preview. Run these commands from this repository:

```sh
npx mint@4.2.1184 dev --no-open
npx mint@4.2.1184 validate
npx mint@4.2.1184 broken-links --check-anchors --check-redirects
npx mint@4.2.1184 a11y
```

The unauthenticated dev preview may request `mint login` for hosted search. An optional static export can support offline review when available for the account; it is not part of the required Starter publishing workflow. Export HTML uses local placeholder canonical URLs and does not certify live indexing settings.

## Content and publishing

Import the accepted shared Alysium consumer guides. Keep the source wording synchronized with the content supplied to Brandy; avoid a separately rewritten website library. Read AGENTS.md before editing.

Prepare changes on a branch, run the checks, review the exact diff and merge through the owner's authorized release process. Mintlify Git sync publishes changes merged to the connected `main` branch. Confirm the actual deployment is live and verify public article HTML, canonical URLs, robots, sitemap and custom-domain HTTPS after publication. A pull request alone is not a release.

The site uses Starter-compatible Git/local-CLI operations. The ongoing workflow does not require the Pro trial's assistant, automations, Admin API or hosted previews.

## Brandy

`brandy.js` loads the owner-configured floating widget once per document on the selected production docs hosts. It skips local QA hosts. Do not execute production chats, uploads or widget smokes as a verification step; use an authorized nonproduction integration for behavioral QA.

## Recovery

If a docs release fails, prepare and review a revert of that exact docs commit, publish it through the same authorized Git workflow and verify the previous serving revision. Daily automatic maintenance and Brandy knowledge synchronization are separate controlled workflows.

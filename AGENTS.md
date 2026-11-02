# Alysium Docs

This repository serves Alysium's public consumer help on Mintlify. Readers may have no experience creating AI agents. Use the standard Mintlify renderer, navigation and search.

Before changing Mintlify content or configuration, run `mint instructions` for the relevant topic and read the existing pages and `docs.json`. Use the current Mintlify writing/configuration guidance. The observed CLI is `mint@4.2.1184`; its current preview needs Node 24 even though the package advertises older Node support.

## Content contract

- Import accepted guides from Alysium's shared consumer library. The same approved facts supply Brandy. Do not maintain a separately rewritten website copy.
- Write for user tasks: explain where a control is, what the choices mean, the next action, the result and useful recovery.
- Omit obvious prerequisites such as signing in to export a conversation. Preserve meaningful access and availability conditions.
- Current spaces contain only their owner. Backend role definitions do not establish working invitation or member-management flows.
- Keep exact UI labels. Do not invent personalized app URLs or assume Brandy can see the screen, current page or signed-in person.
- Keep code citations, research, manifests, private links and review records outside published articles.
- Preserve stable page paths and section links. Use root-relative extensionless companion links. Mintlify smart punctuation affects generated fragment IDs; validate anchors after conversion.

## Implementation and verification

- Prefer supported `docs.json` settings and native components. Keep branding bright and readable in both appearances. No separate docs frontend or extra Brandy launcher is needed.
- Keep the root `brandy.js` loader idempotent. It mounts the owner-configured agent once per document on the selected production docs hosts and skips local QA hosts. Do not run production conversations, uploads or widget smokes as a test.
- Run `mint validate`, `mint broken-links --check-anchors --check-redirects`, and `mint a11y` before proposing publication. Check the rendered desktop/phone experience and keyboard navigation.
- A static export proves local rendering and offline search. It does not prove production canonical host, sitemap, robots, SSL or deployment revision; inspect those after actual publication.
- Continue using a normal Git branch/review/merge and Mintlify Git sync. Do not introduce a dependency on a paid assistant, Admin API, hosted preview or autopilot.
- Publish, merge, change domains or activate maintenance only within the owner's current authorization. Daily content maintenance is a separate controlled workflow.

`.mintignore` excludes this file and `.mintlify/` from the reader-facing site. This repository may itself be public, so never add secrets or private operational evidence here.

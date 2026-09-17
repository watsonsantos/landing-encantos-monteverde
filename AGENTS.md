# Project Instructions

## Project discovery

Before making substantial changes, inspect the repository and determine:

- framework and installed versions;
- package manager;
- folder structure;
- existing architecture;
- styling approach;
- component library;
- state-management approach;
- validation libraries;
- data-access patterns;
- test setup;
- available scripts.

Use the actual repository as the source of truth.

Do not assume a package, version, database or architectural pattern exists
without verifying it.


## Existing project first

Follow established patterns in this repository.

Before creating something new, search for an existing:

- component;
- hook;
- utility;
- schema;
- service;
- repository;
- API helper;
- design token;
- type;
- validation pattern.

Prefer extending existing patterns over creating parallel implementations.


## Package manager

Use the package manager already configured by the repository.

Respect the existing lockfile.

Do not generate another lockfile.

Do not change dependency versions unless the task requires it.


## Next.js

When this is a Next.js project:

- follow the routing model already used by the project;
- respect Server and Client Component boundaries;
- prefer Server Components when client-side interactivity is not required;
- add `"use client"` only when necessary;
- avoid unnecessary client-side JavaScript;
- keep sensitive operations server-side;
- use the project's existing data-fetching patterns;
- use existing caching/revalidation conventions.

Do not migrate between App Router and Pages Router unless explicitly requested.


## React

Keep components focused and reasonably small.

Prefer composition over excessive prop configuration.

Avoid:
- unnecessary `useEffect`;
- duplicated state;
- unnecessary global state;
- premature memoization;
- deeply coupled components.

Keep state as close as practical to where it is used.

Use installed React composition/best-practice skills when the task materially
benefits from them.


## TypeScript

Maintain strong typing.

Avoid `any` unless there is a real technical reason.

Prefer:
- existing domain types;
- inferred types when clear;
- explicit public interfaces where useful;
- type-safe APIs.

Do not duplicate types unnecessarily.

Do not silence legitimate TypeScript errors just to make the build pass.


## UI and design system

Preserve the visual language already established by the project.

Before creating or redesigning UI, inspect nearby pages and components.

Reuse:
- components;
- spacing scale;
- colors;
- typography;
- border radius;
- shadows;
- icons;
- layout conventions;
- interaction patterns.

If the project uses shadcn/ui or another component library, prefer its
existing primitives when appropriate.

Do not replace the existing design system unless explicitly requested.

Avoid hardcoded design values when equivalent tokens already exist.


## Tailwind CSS

When Tailwind is used:

- follow the project's existing Tailwind conventions;
- reuse theme variables and design tokens;
- avoid arbitrary values when a project token already solves the need;
- keep responsive behavior intentional;
- avoid enormous unreadable class strings when extracting a reusable
  component or helper improves clarity.

Do not introduce another styling system without a strong reason.


## Responsive UI

New or modified UI must work across relevant screen sizes.

Consider at minimum:
- mobile;
- tablet when relevant;
- desktop.

Avoid fixing desktop at the expense of mobile.

Prevent unintended:
- horizontal overflow;
- clipped content;
- overlapping elements;
- inaccessible controls.


## Accessibility

Use semantic HTML where appropriate.

Ensure relevant:
- labels;
- keyboard navigation;
- focus states;
- alt text;
- contrast;
- button/link semantics;
- form error communication.

Do not remove accessibility behavior from existing components.


## Forms and validation

Use the form and validation stack already present in the project.

Reuse existing schemas where possible.

Client-side validation improves UX but does not replace server-side validation.

Validate untrusted data at the server boundary.


## API routes and server actions

Follow existing project patterns.

Validate input.

Perform authentication and authorization server-side.

Never trust:
- user IDs;
- roles;
- prices;
- permissions;
- object ownership;
- payment state;

solely because they were sent by the client.

Keep secrets and privileged operations server-side.


## Authentication and authorization

Reuse the project's authentication system.

Do not implement a second authentication mechanism unless explicitly required.

Authentication answers:
"Who is this user?"

Authorization answers:
"Is this user allowed to perform this operation?"

Check both when necessary.


## Database

Follow the data-access pattern already established by the project.

If Prisma is present:

- reuse the existing Prisma client setup;
- respect schema relations;
- consider existing data before schema changes;
- avoid unnecessary queries;
- avoid obvious N+1 query patterns;
- select only required fields when useful.

Do not change the schema casually.

When schema changes are necessary, consider migration and backwards
compatibility implications.


## State management

Use the state-management approach already used by the project.

Do not introduce Zustand, Redux or another global-state library when React
state, URL state or server state already solves the problem adequately.

Differentiate between:
- local UI state;
- server state;
- URL state;
- persistent client state.


## Data fetching

Use the project's existing data-fetching conventions.

Avoid duplicate requests.

Avoid unnecessary client fetching when the same data can be obtained
efficiently server-side.

When TanStack Query or another server-state library is already used, follow
the project's established query-key and invalidation conventions.


## Error handling

Do not silently swallow errors.

Handle errors at the appropriate layer.

User-facing failures should provide useful feedback without exposing internal
implementation details or secrets.

Preserve logging/observability patterns already present in the project.


## Security-sensitive areas

Treat these as higher risk:

- authentication;
- authorization;
- payments;
- webhooks;
- uploads;
- sessions;
- cookies;
- user-controlled HTML;
- database mutations;
- sensitive personal data;
- external API credentials.

Use the installed security skills when working substantially in these areas.


## Performance

Do not optimize blindly.

For React/Next.js performance work, consider:

- unnecessary client components;
- request waterfalls;
- excessive JavaScript;
- unnecessary re-renders;
- large bundles;
- unoptimized images;
- duplicate data requests.

Use performance-oriented React skills when relevant.


## Testing

Follow the test framework already configured in the repository.

Testing effort should match the risk of the change.

For:
- bug fixes → consider a regression test;
- business logic → test important behavior;
- auth/payments → validate critical flows;
- visual-only changes → avoid unnecessary unit tests.

Do not rewrite the project's testing setup without a reason.


## Validation before completion

Use the scripts already available in `package.json`.

Prefer targeted validation first.

Depending on the scope, consider:

- relevant tests;
- type checking;
- linting;
- build;
- browser/runtime verification.

Do not run expensive checks unnecessarily for a tiny isolated change.


## Scope

Make focused changes.

Do not:
- refactor unrelated areas;
- rename unrelated files;
- reformat the entire repository;
- change unrelated styles;
- upgrade dependencies opportunistically.

If a broader change is genuinely required, explain why.


## Project-specific information

When important project-specific knowledge is discovered and is stable enough
to matter for future work, prefer adding a concise instruction to this file
rather than repeatedly rediscovering it.

Keep this file focused and useful.

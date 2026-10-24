# Personal Engineering Portfolio Website Plan
## 1. Project Vision

The website should feel like a combination of:

- A blueprint especially "contraption diagram" from create:aeronautics mod
- A mechanical engineering diagram
- A workshop notebook

> **Important principle:** The design can be unusual, but the information must remain easy to understand.
---

## 2. Goals

### Main goals

- Introduce who you are and what you do immediately.
- Show your strongest projects instead of listing everything.
- Explain the thinking and research behind each project.
- Make your skills and process easy to understand.
- Make contacting you simple.
- Create a memorable visual identity.
- Keep the site responsive, accessible, and fast.

### What the website should communicate

Visitors should understand:
1. Who you are.
2. What type of work you create.
3. What role you played in each project.
4. How you approach problems.
5. What you learned or achieved.
6. How to contact you.
---

## 3. Recommended Site Structure

```text
/
├── index.html                  Home / notebook entry point
├── projects/
│   ├── project-01.html        Project page 01
│   ├── project-02.html        Project page 02
│   └── project-03.html        Project page 03
├── components/
│   └── page-menu.html          Shared paper-list menu
├── css/
│   ├── site.css                Shared paper background
│   ├── page-menu.css            Shared paper-list menu
│   └── project-page.css         Project page layout
├── js/
│   └── includes.js             Loads shared components
└── assets/
    ├── reference/              Reference screenshots and visual studies
    ├── images/                 Portfolio project images
    └── icons/                  Small interface icons
```

The visible site can present these as:

```text
Main · Project 1 · Project 2 · Project 3 · Contact
```

The three project pages are the first required project detail pages. More can be added later without changing the shared layout.

### Important note about shared HTML

Your idea is correct in principle: shared footer and navigation markup should be defined once and reused everywhere. However, browser HTML does not support a native include such as:

```html
<include src="footer.html"></include>
```

For this static website, the recommended first implementation is:

1. Put reusable markup in `components/footer.html`, `components/header.html`, and `components/page-menu.html`.
2. Add a small `js/includes.js` file to load those files into elements such as `<div data-include="components/footer.html"></div>`.
3. Use the same placeholder on the homepage and all three project pages.

This keeps the pages consistent without copying footer code. It requires the website to be opened through a local web server because browser security can block `fetch()` when opening files directly with `file://`. A static-site generator can replace this approach later if the project grows.

### Notebook menu

The left side of every page should contain a compact paper-list menu inspired by the reference image:

- A cream, slightly irregular paper card.
- Small folded or tab-like edges.
- A numbered heading.
- Stacked entries separated by hand-drawn horizontal rules.
- Different muted colors for different sections.
- The current page visibly highlighted.
- A small pencil/scribble detail near the bottom.

The menu is always visible on desktop rather than opening as a large overlay. On narrow screens it can move above the page content. Adding a new destination should require adding one entry to the shared `components/page-menu.html` file.

The menu should be shared through `components/page-menu.html` so it appears identically on the homepage and all three project pages.

### Recommended first version

The first release should contain:

1. Home
2. About
3. Projects
4. At least one complete project detail page
5. Contact

The Research and Resume pages can initially be sections inside other pages. They can become independent pages once there is enough content.

This avoids launching with empty or unfinished sections.

---

## 4. Navigation

### Desktop navigation

```text
[JustCreate]        HOME   PROJECTS   ABOUT   RESEARCH   CONTACT
```

### Mobile navigation

Use:

- Your name or logo
- A compact menu button
- A simple vertical navigation menu
- A visible contact link

### Project navigation

Every project detail page should include:

```text
Previous project
Back to project archive
Next project
```

This allows visitors to browse projects without repeatedly returning to the homepage.

---

## 5. Visual Direction

### 5.1 Main visual concept

Each part of the website can feel like part of a machine:

| Website area | Visual metaphor |
|---|---|
| Homepage | Control panel / cockpit |
| About | Operator profile |
| Projects | Machine modules |
| Project detail | Technical schematic |
| Research | Laboratory notebook |
| Contact | Communication console |

### 5.2 Recommended color direction

#### Light blueprint — recommended

```text
Background:     Warm white or paper
Main text:      Black or deep navy
Technical lines: Muted blue or gray
Highlight:      Aviation yellow or orange
Warning:        Signal red
Success:        Muted green
```

This direction is recommended because it keeps long project descriptions and research notes easy to read.

#### Alternative: dark control panel

```text
Background:     Deep navy
Main text:      Off-white
Technical lines: Blue-gray
Highlight:      Amber
Warning:        Red
Success:        Green
```

### 5.3 Typography

Use two complementary type styles:

1. A readable font for paragraphs and project descriptions.
2. A technical monospace or condensed font for labels, metadata, coordinates, and navigation.

Example labels:

```text
PROJECT_03
SYSTEM STATUS: OPERATIONAL
FIELD NOTES
```

Decorative technical text should remain secondary. Important information must use normal, readable typography.

### 5.4 Graphic elements

Potential recurring elements:

- Coordinate labels
- Measurement lines
- Dashed construction lines
- Arrows
- Component labels
- Numbered project markers
- `SYSTEM STATUS` indicators
- Blueprint grids
- Technical stamps
- Small warning labels
- Handwritten-style annotations
- Simple explanatory diagrams

Do not use decoration purely for decoration. Every visual element should support navigation, atmosphere, or explanation.

### 5.5 Animation

Use only subtle motion:

- Small indicator lights
- Slow diagram-line movement
- Hover states on project cards
- Gentle transitions between pages
- Small mechanical or calibration effects

Avoid:

- Long loading animations
- Excessive movement
- Animations that interfere with reading
- Motion that cannot be disabled for users who prefer reduced motion

---

## 6. Page Plans and Content Drafts

## 6.1 Homepage

### Purpose

The homepage should immediately answer:

- Who are you?
- What do you do?
- What kind of work do you make?
- Where can visitors see your projects?
- How can visitors contact you?

### Content draft

```markdown
# [YOUR NAME]

## [YOUR SHORT PROFESSIONAL DESCRIPTION]

I am a [designer/developer/engineer/artist/student] who builds
[websites, digital products, physical systems, visual experiences, or other work].

I am interested in the space between [INTEREST 1], [INTEREST 2],
and [INTEREST 3].

[View selected projects](#selected-projects)
[About me](about.html)
[Get in touch](contact.html)

---

## SYSTEM STATUS

| System | Status |
|---|---|
| Current location | [CITY / COUNTRY] |
| Current focus | [WHAT YOU ARE LEARNING OR BUILDING] |
| Availability | [AVAILABLE / NOT AVAILABLE / OPEN TO OPPORTUNITIES] |
| Main tools | [TOOL 1], [TOOL 2], [TOOL 3] |

---

## SELECTED PROJECTS

### PROJECT 01 — [PROJECT NAME]

[One-sentence description of the project.]

**Role:** [YOUR ROLE]  
**Type:** [WEB / PRODUCT / RESEARCH / EXPERIMENT]  
**Status:** [COMPLETED / IN PROGRESS]

[Open project](projects/project-01.html)

---

### PROJECT 02 — [PROJECT NAME]

[One-sentence description of the project.]

**Role:** [YOUR ROLE]  
**Type:** [WEB / PRODUCT / RESEARCH / EXPERIMENT]  
**Status:** [COMPLETED / IN PROGRESS]

[Open project](projects/project-02.html)

---

### PROJECT 03 — [PROJECT NAME]

[One-sentence description of the project.]

**Role:** [YOUR ROLE]  
**Type:** [WEB / PRODUCT / RESEARCH / EXPERIMENT]  
**Status:** [COMPLETED / IN PROGRESS]

[Open project](projects/project-03.html)

---

## HOW I WORK

I usually move through a project in four stages:

1. Understand the problem
2. Research and collect evidence
3. Build and test a solution
4. Document what worked and what changed

[Read more about my process](about.html#process)

---

## CONTACT

Have a project, question, or interesting problem?

[Send me an email](mailto:[YOUR_EMAIL])
[Find me on GitHub](YOUR_GITHUB_URL)
[Find me on LinkedIn](YOUR_LINKEDIN_URL)

---

© [YEAR] [YOUR NAME]
```

### Homepage requirements

- Name and role at the top.
- Short introduction instead of a long biography.
- Three featured projects.
- One primary call-to-action: `View projects`.
- Visible contact link.
- Optional diagram or blueprint background.

### Avoid on the homepage

- Listing every project.
- Huge technology lists.
- Long paragraphs before the first project.
- Unfinished placeholder projects.
- Complex loading screens.

---

## 6.2 About Page

### Purpose

Show the person behind the work. The tone can be more personal than the homepage while remaining focused.

### Content draft

```markdown
# ABOUT THE OPERATOR

## Hello, I am [YOUR NAME].

I am a [YOUR ROLE] based in [LOCATION].

My work focuses on [MAIN AREA OF WORK]. I enjoy building things that are
[QUALITY 1], [QUALITY 2], and [QUALITY 3].

I became interested in this field because [SHORT PERSONAL STORY].

---

## WHAT I DO

I work across:

- [AREA OF SKILL 1]
- [AREA OF SKILL 2]
- [AREA OF SKILL 3]
- [AREA OF SKILL 4]

I am especially interested in:

- [INTEREST 1]
- [INTEREST 2]
- [INTEREST 3]

---

## TOOLS AND TECHNOLOGIES

### Primary tools

- [TOOL]
- [TOOL]
- [TOOL]

### Technologies

- [TECHNOLOGY]
- [TECHNOLOGY]
- [TECHNOLOGY]

### Other methods

- Research
- Prototyping
- Documentation
- Testing
- Visual communication

---

## MY PROCESS

### 01 — OBSERVE

I begin by understanding the context, the people involved, and the actual
problem rather than immediately choosing a solution.

### 02 — INVESTIGATE

I collect references, compare possible approaches, and identify constraints.

### 03 — CONSTRUCT

I create a first version that is simple enough to test and improve.

### 04 — CALIBRATE

I use feedback, testing, and observation to adjust the result.

### 05 — DOCUMENT

I record the decisions, failures, and lessons so the work can be understood later.

---

## CURRENTLY

I am currently:

- Learning [CURRENT SUBJECT]
- Building [CURRENT PROJECT]
- Exploring [CURRENT INTEREST]
- Looking for [TYPE OF OPPORTUNITY, IF RELEVANT]

---

## RESUME

[Download my resume](YOUR_RESUME_URL)

---

## PERSONAL NOTE

Outside of my main work, I enjoy [HOBBY OR INTEREST].

I believe good work should be [VALUE 1], [VALUE 2], and [VALUE 3].
```

---

## 6.3 Projects Archive

### Purpose

Present a complete catalog of your best work.

### Content draft

```markdown
# PROJECT ARCHIVE

A selection of projects, experiments, and investigations.

Each project is documented as a system:

- The problem
- The constraints
- The process
- The result
- What I learned

---

## FEATURED SYSTEMS

### 01 — [PROJECT NAME]

[Short project description.]

**Category:** [CATEGORY]  
**Year:** [YEAR]  
**Role:** [YOUR ROLE]  
**Tools:** [TOOLS]

[Read the full project](project-01.html)

---

### 02 — [PROJECT NAME]

[Short project description.]

**Category:** [CATEGORY]  
**Year:** [YEAR]  
**Role:** [YOUR ROLE]  
**Tools:** [TOOLS]

[Read the full project](project-02.html)

---

### 03 — [PROJECT NAME]

[Short project description.]

**Category:** [CATEGORY]  
**Year:** [YEAR]  
**Role:** [YOUR ROLE]  
**Tools:** [TOOLS]

[Read the full project](project-03.html)

---

## EXPERIMENTS

### [EXPERIMENT NAME]

[Short description of a small experiment or unfinished idea.]

**Status:** [ONGOING / ARCHIVED / ABANDONED]

[View experiment notes](research.html#experiment-name)
```

### Project card content

Every project card should show:

```text
Project name
One-sentence summary
Project type
Year
Your role
Main tools
Status
Link to details
```

Cards should provide enough information to encourage visitors to open the full project page, but should not contain the entire case study.

---

## 6.4 Project Detail Page

### Purpose

This is the most important page type in the portfolio. It should explain:

- The problem.
- Why the problem mattered.
- Your personal contribution.
- Your process.
- The result.
- What you learned.

### Content template

```markdown
# [PROJECT NAME]

## [SHORT PROJECT DESCRIPTION]

[One or two sentences explaining what the project is and why it exists.]

---

## PROJECT DATA

| Field | Information |
|---|---|
| Year | [YEAR] |
| Duration | [DURATION] |
| Role | [YOUR ROLE] |
| Type | [PROJECT TYPE] |
| Status | [COMPLETED / IN PROGRESS] |
| Tools | [TOOL 1], [TOOL 2], [TOOL 3] |
| Team | [SOLO / TEAM / CLIENT] |

[View live project](LIVE_URL)  
[View source code](GITHUB_URL)  
[Download related files](DOWNLOAD_URL)

---

## THE BRIEF

[Explain the starting point of the project.]

The original question was:

> [THE MAIN QUESTION OR PROBLEM]

The project needed to:

- [REQUIREMENT 1]
- [REQUIREMENT 2]
- [REQUIREMENT 3]

The main constraint was:

- [CONSTRAINT]

---

## MY ROLE

I was responsible for:

- [RESPONSIBILITY 1]
- [RESPONSIBILITY 2]
- [RESPONSIBILITY 3]

If this was a team project, explain clearly which parts were yours.

---

## RESEARCH

Before building the final result, I investigated:

- [RESEARCH QUESTION 1]
- [RESEARCH QUESTION 2]
- [RESEARCH QUESTION 3]

### Research method

[Explain how you researched the problem.]

This included:

- [INTERVIEW / OBSERVATION / COMPETITOR RESEARCH]
- [TECHNICAL EXPERIMENTS]
- [REFERENCE COLLECTION]
- [USER TESTING]

### Important findings

1. [FINDING 1]
2. [FINDING 2]
3. [FINDING 3]

These findings changed the project by [EXPLAINING THE IMPACT].

---

## CONCEPT

The central idea was:

> [ONE-SENTENCE CONCEPT]

I chose this direction because [REASON].

![Concept sketch or diagram](images/project-concept.jpg)

---

## CONSTRUCTION

### First version

[Describe the first prototype or initial implementation.]

### What changed

The first version had a problem:

[DESCRIBE THE PROBLEM]

I changed it by:

[DESCRIBE THE CHANGE]

### Technical approach

[Explain the important implementation decisions.]

For example:

- [DECISION 1]
- [DECISION 2]
- [DECISION 3]

---

## VISUAL DOCUMENTATION

![Description of the main project image](images/project-main.jpg)

*Caption explaining what the image shows.*

![Description of the process image](images/project-process.jpg)

*Caption explaining what changed between versions.*

---

## FINAL RESULT

[Describe the final result and how it solves the original problem.]

The final version:

- [RESULT 1]
- [RESULT 2]
- [RESULT 3]

[View the final result](LIVE_URL)

---

## OUTCOME

Where possible, include evidence:

- [MEASURABLE RESULT]
- [USER FEEDBACK]
- [PERFORMANCE RESULT]
- [COMPLETION RESULT]
- [LESSON FROM TESTING]

If the result was not measured numerically, explain what improved and how you know.

---

## WHAT I LEARNED

This project taught me:

1. [LESSON 1]
2. [LESSON 2]
3. [LESSON 3]

If I continued the project, I would:

- [NEXT IMPROVEMENT 1]
- [NEXT IMPROVEMENT 2]

---

## PROJECT FILES

[Live version](LIVE_URL)  
[Source code](GITHUB_URL)  
[Additional research](research.html#project-name)

---

## NEXT PROJECT

[View the next project](project-02.html)
```

---

## 6.5 Research Archive

### Purpose

Document experiments, sketches, questions, references, failures, and observations.

This section is optional for the first release. It becomes valuable when there is enough material to make it feel like a real archive.

### Content draft

```markdown
# RESEARCH ARCHIVE

Notes from experiments, investigations, and unfinished systems.

This archive contains the material behind the finished projects:
questions, references, tests, failures, and observations.

---

## RECENT NOTES

### [RESEARCH NOTE TITLE]

[Short description.]

**Date:** [DATE]  
**Related project:** [PROJECT NAME]

[Read note](research-note-01.html)

---

### [RESEARCH NOTE TITLE]

[Short description.]

**Date:** [DATE]  
**Related project:** [PROJECT NAME]

[Read note](research-note-02.html)

---

## CATEGORIES

- Design research
- Technical experiments
- Visual studies
- Prototypes
- Materials and tools
- Unfinished ideas

---

## NOTE TEMPLATE

### Question

[What were you trying to understand?]

### Method

[What did you do?]

### Observation

[What happened?]

### Interpretation

[What does it mean?]

### Next step

[What will you try next?]
```

---

## 6.6 Contact Page

### Purpose

Make it as easy as possible for someone to contact you.

### Content draft

```markdown
# COMMUNICATION CONSOLE

If you would like to discuss a project, collaboration, opportunity, or idea,
send me a message.

---

## CONTACT

**Email:** [YOUR_EMAIL]

[Send me an email](mailto:[YOUR_EMAIL])

---

## ELSEWHERE

- [GitHub](YOUR_GITHUB_URL)
- [LinkedIn](YOUR_LINKEDIN_URL)
- [Other profile](YOUR_PROFILE_URL)

---

## CURRENT AVAILABILITY

[Write whether you are available for freelance work, internships, employment,
collaborations, or conversations.]

---

## MESSAGE GUIDE

You can contact me about:

- A project
- A collaboration
- An opportunity
- A technical question
- A research discussion

Please include a short description of what you are working on and how I can help.

---

## LOCATION

[OPTIONAL CITY / COUNTRY]

[Optional timezone or preferred contact hours]
```

Start with a visible email address. A custom contact form can be added later if necessary.

---

## 7. Project Categories

Possible categories:

```text
WEB SYSTEMS
Interactive websites and web applications.

VISUAL EXPERIMENTS
Illustrations, animations, diagrams, and visual studies.

TECHNICAL BUILDS
Software, hardware, tools, or engineering projects.

RESEARCH
Investigations, experiments, and documentation.

PERSONAL PROJECTS
Work created to explore an idea or learn a technology.
```

Do not force every project into a category. Categories should help visitors understand the portfolio, not restrict what you can create.

---

## 8. Content Requirements

Before implementation, collect:

```text
Your name:
Your preferred job title or role:
Your location:
Your email:
Your GitHub:
Your LinkedIn or other profile:
Your current availability:
Three projects to feature:
Preferred color direction:
Light blueprint or dark control panel:
Do you want a resume page:
Do you want a research archive:
```

For each project, collect:

- Project title
- One-sentence summary
- Project year
- Your role
- Team or solo status
- Tools and technologies
- Original problem
- Constraints
- Research questions
- Research findings
- Process images
- Final images
- Outcome or result
- Lessons learned
- Live link
- Source code link

---

## 9. Accessibility and Performance Requirements

### Accessibility

- Use semantic HTML.
- Provide meaningful alternative text for images.
- Keep color contrast readable.
- Support keyboard navigation.
- Use visible focus states.
- Label interactive controls.
- Avoid communicating important information through color alone.
- Respect `prefers-reduced-motion`.
- Keep decorative graphics separate from essential content.

### Performance

- Optimize and resize images.
- Use modern image formats where appropriate.
- Lazy-load images that are not immediately visible.
- Avoid unnecessary JavaScript.
- Keep animations lightweight.
- Test on a slower mobile connection.
- Keep the first page useful even if decorative assets fail to load.

### SEO basics

- Give every page a descriptive title.
- Add a useful meta description.
- Use one clear page heading.
- Use descriptive link text.
- Add Open Graph metadata later.
- Consider structured data when the site content is stable.

---

## 10. Development Roadmap

### Phase 1 — Content preparation

- [ ] Choose your public name.
- [ ] Write your one-sentence professional description.
- [ ] Select three projects.
- [ ] Collect project images.
- [ ] Collect live-work and source-code links.
- [ ] Decide what information can be public.
- [ ] Prepare a resume if needed.

### Phase 2 — Content structure

- [ ] Write homepage content.
- [ ] Write About content.
- [ ] Create the Projects archive.
- [ ] Complete one project case study.
- [ ] Add contact information.

The first complete project page should define the structure for the remaining project pages.

### Phase 3 — Visual design

- [ ] Choose the color palette.
- [ ] Choose typography.
- [ ] Define spacing.
- [ ] Design buttons.
- [ ] Design project cards.
- [ ] Design metadata labels.
- [ ] Design diagram lines and status indicators.
- [ ] Define image treatment.

### Phase 4 — First implementation

- [ ] Build the responsive page layout.
- [ ] Build the notebook-style homepage.
- [ ] Build the reusable left-side page menu.
- [ ] Build project cards.
- [ ] Build the project detail template.
- [ ] Build the About page.
- [ ] Build the Contact page.
- [ ] Add basic navigation.
- [ ] Add shared header and footer partials.
- [ ] Add the shared-partial loader.

### Phase 5 — Quality improvements

- [ ] Test mobile layouts.
- [ ] Test keyboard navigation.
- [ ] Check color contrast.
- [ ] Add image alternative text.
- [ ] Check loading speed.
- [ ] Check all links.
- [ ] Test browser compatibility.
- [ ] Test reduced-motion behavior.
- [ ] Add page titles and metadata.

### Phase 6 — Expansion

- [ ] Add the Research archive.
- [ ] Add a Resume page or PDF.
- [ ] Add dark mode.
- [ ] Add subtle interactive diagrams.
- [ ] Add project filtering.
- [ ] Add analytics if needed.
- [ ] Add a writing or blog section.

---

## 11. Shared Layout Implementation

### Planned reusable files

| File | Responsibility |
|---|---|
| `components/header.html` | Shared page header and branding |
| `components/page-menu.html` | Left-side paper menu and page links |
| `components/footer.html` | Shared contact and copyright footer |
| `js/includes.js` | Loads and inserts shared components |
| `css/site.css` | Shared paper texture, pixel styling, and responsive rules |
| `css/page-menu.css` | Shared paper-list menu |
| `css/project-page.css` | Project page content layout |

### Page markup pattern

Each page should include placeholders rather than duplicate shared markup:

```html
<link rel="stylesheet" href="css/site.css">
<link rel="stylesheet" href="css/page-menu.css">

<main>
  <div data-include="components/page-menu.html"></div>
  <!-- Page-specific content -->
</main>

<div data-include="components/footer.html"></div>
<script src="js/includes.js"></script>
```

`components/page-menu.html` is the only file containing the paper-list menu markup. The page itself only contains the `data-include` placeholder. To add the menu to another root-level page, copy the placeholder and the stylesheet/script references. Pages inside a subdirectory should use paths such as `../components/page-menu.html`, `../css/site.css`, `../css/page-menu.css`, and `../js/includes.js`.

The shared loader automatically marks the link matching the current filename with `aria-current="page"` and the visual `active` state.

### Local development requirement

Because the loader uses `fetch()`, pages should be previewed through a local server, for example:

```text
http://localhost:8000/index.html
```

Opening the files directly with `file://` may prevent the browser from loading the partial files. This is a browser security restriction, not a problem with the page structure.

---

## 12. Recommended First Release

```text
Visual style: Light blueprint / technical notebook
Structure: Homepage + About + Projects + Project detail + Contact
Projects: Three featured projects
Tone: Technical, curious, personal, and clear
Animation: Subtle diagram movement only
First priority: Strong project documentation
```

The most valuable part of the website will be the quality of the project pages. A simple visual system with strong case studies is better than a highly animated website with little information.

---

## 13. Research Summary

Current portfolio conventions generally emphasize:

1. **Immediate clarity** — Visitors should understand who you are and what you do quickly.
2. **Three to five strong projects** — Quality is more useful than a long list.
3. **Case-study storytelling** — Explain the problem, role, process, result, and lessons.
4. **Visible credibility** — Include live links, source code, resume, testimonials, or contributions when relevant.
5. **Easy contact** — Make email and professional profiles easy to find.
6. **Responsive accessibility** — The site should work well on mobile, with keyboard navigation and readable contrast.
7. **Distinctive personality** — Visual style, writing tone, and small personal details should make the site feel like yours.

Useful references:

- [Figma — Portfolio website examples and tips](https://www.figma.com/resource-library/portfolio-website-examples/)
- [UXfolio — Personal portfolio structure and examples](https://blog.uxfol.io/how-to-create-a-personal-portfolio/)
- [Site Builder Report — Personal website examples](https://www.sitebuilderreport.com/inspiration/personal-websites)
- [Framer — Personal website examples](https://www.framer.com/blog/personal-website-examples/)
- [Developer portfolio best practices](https://designtocodes.com/blog/developer-portfolio-website-that-gets-you-hired/)

---

## 14. Final Decisions Needed Before Coding

The following choices should be confirmed before implementation:

1. What name should appear on the website?
2. What is your preferred role or title?
3. Which three projects should be featured?
4. Should the visual style use a light blueprint or dark control panel?
5. Should the site include a photo, illustration, or neither?
6. Do you want a separate Resume page?
7. Do you have enough material for a Research archive at launch?
8. What contact links should be public?

Once these decisions are complete, implementation can begin with the homepage, shared layout, and one complete project page.

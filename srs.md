# Software Requirements Specification (SRS)

## AL Djisr Private School Website — Vitrine

### Technology Stack: Next.js

**Document Version:** 1.0
**Product Type:** Marketing / vitrine website
**School:** AL Djisr Private School
**Location:** Bab Ezzouar, Algiers, Algeria
**Scope:** Public website only — **no ERP, no student portal, no payment system**

---

## 1. Introduction

### 1.1 Purpose

This document defines the complete software requirements for a vitrine website for **AL Djisr Private School**. The website is intended to present the school professionally, build trust with parents, improve visibility on search engines, and generate qualified inquiries through contact and pre-registration forms.

The document is written for:

* Developers
* UI/UX designers
* SEO specialists
* Content writers
* Project managers
* AI coding assistants such as Copilot

### 1.2 Product Vision

The website must function as a **digital front desk** and **lead-generation tool**. It should help parents quickly understand:

* Who the school is
* What programs it offers
* Why it is trustworthy
* How to contact the school
* How to request enrollment information

The site must feel:

* Professional
* Warm
* Trustworthy
* Modern
* Local and relevant to families in Bab Ezzouar and greater Algiers

### 1.3 Scope

This project includes only a **public-facing vitrine website**.

Included:

* Homepage
* About page
* Programs page
* Admissions / pre-registration page
* Facilities / gallery page
* Contact page
* FAQ page
* Blog / news section if enabled
* SEO foundations
* Analytics and conversion tracking
* Responsive design
* CMS-ready content structure or structured content files

Excluded:

* ERP
* Student portal
* Parent portal
* Payment processing
* Attendance system
* Grade management
* Internal administration dashboard beyond basic content management
* E-learning platform
* Live chat staff console, unless embedded third-party widget is later approved

### 1.4 Business Goals

The website must support the following business goals:

1. Increase school visibility online.
2. Rank on relevant local search queries.
3. Convert website visitors into inquiries.
4. Reduce reliance on only social media or word-of-mouth.
5. Present the school as a serious, premium, well-organized institution.
6. Support future expansion into ERP or portal systems later.

### 1.5 Success Criteria

The website is successful if it:

* Loads quickly on mobile and desktop
* Appears in Google search results for school-related local queries
* Generates contact form submissions and WhatsApp/call interactions
* Has a clean, professional design with strong visual trust signals
* Is easy for the school to update or extend later
* Works well for parents who browse first on mobile

---

## 2. Stakeholders

### 2.1 Primary Stakeholders

* **School management**: owns the brand and approves content
* **Admissions team**: handles inquiries and pre-registration leads
* **Parents and guardians**: primary users
* **Development team**: builds the site
* **SEO / marketing team**: optimizes content and conversion
* **Content editor/admin**: updates school news, programs, and gallery items

### 2.2 Secondary Stakeholders

* Teachers and staff
* Prospective students indirectly
* External agencies managing branding or advertising
* Search engines and social media platforms
* Hosting provider and domain registrar

---

## 3. Assumptions and Constraints

### 3.1 Assumptions

* The primary audience is French-speaking, with Arabic support possible later.
* Most traffic will come from mobile devices.
* Parents are likely to compare schools quickly and make decisions based on trust, clarity, and convenience.
* The school can provide logos, photos, contact details, and basic institutional information.
* The project will use **Next.js** as the frontend framework.

### 3.2 Constraints

* The site must not include ERP features.
* The website must be performant and SEO-friendly.
* The school may not have a large amount of existing content, so the system must support incremental content addition.
* All content must be editable without requiring code changes when possible.
* The design must remain consistent with the school identity.

---

## 4. Product Overview

### 4.1 Product Type

A responsive, SEO-optimized, conversion-focused institutional website.

### 4.2 High-Level Value Proposition

The website should communicate:

* Quality education
* Safety and discipline
* Academic seriousness
* Modern facilities
* Strong communication with parents
* Clear admissions process

### 4.3 Primary User Journey

A parent visits the website, understands the school offer, checks programs and facilities, then submits a form, calls, or sends a WhatsApp message.

### 4.4 Design Principles

* Trust first
* Clarity first
* Mobile first
* Conversion driven
* Visually premium but not overloaded
* Simple navigation
* Fast loading
* Easy to maintain

---

## 5. User Personas

### 5.1 Persona A: Concerned Parent

**Profile:** Parent looking for a school that is safe, respectable, and academically strong.

**Needs:**

* School credibility
* Programs and levels
* Location
* Contact details
* Photos of facilities
* Reassurance that the child will be in a serious environment

**Behavior:**

* Searches Google
* Skims the homepage
* Checks programs and photos
* Looks for contact options
* May fill out a form if convinced

### 5.2 Persona B: Busy Parent

**Profile:** Parent who has little time and wants fast answers.

**Needs:**

* Quick school overview
* Phone number
* WhatsApp button
* Location
* Admission timing
* Simple form

**Behavior:**

* Uses mobile only
* Does not read long paragraphs
* Wants immediate access to contact

### 5.3 Persona C: Comparing Parent

**Profile:** Parent comparing several private schools.

**Needs:**

* Strong visual identity
* Clear differentiators
* Testimonials or proof points
* Programs and age groups
* Admissions steps

**Behavior:**

* Opens multiple tabs
* Compares details quickly
* Chooses the school with the most trust and clarity

---

## 6. Functional Requirements

---

### 6.1 Global Site Requirements

#### FR-001 Responsive Layout

The website must adapt to:

* Mobile
* Tablet
* Desktop
* Wide desktop

#### FR-002 Consistent Navigation

A persistent navigation menu must be available on all pages with access to:

* Home
* About
* Programs
* Admissions
* Gallery
* FAQ
* Contact

On mobile, navigation must collapse into a hamburger menu or drawer.

#### FR-003 Persistent Call-to-Action

At least one strong CTA must be visible on all key pages. Examples:

* “Apply Now”
* “Request Information”
* “Contact Admissions”
* “Book a Visit”

#### FR-004 Contact Accessibility

The following contact actions must be easily available:

* Phone click-to-call
* WhatsApp click
* Contact form
* Google Maps link / embed
* Email link

#### FR-005 Multilingual Foundation

The site should be built with language architecture that allows future expansion.
Recommended initial language:

* French as primary
  Optional future languages:
* Arabic
* English

If multilingual support is implemented, the architecture must support locale-based routing.

#### FR-006 Search Engine Friendly Structure

The site must include:

* Semantic HTML
* Clean URLs
* Metadata per page
* Open Graph data
* Sitemap
* Robots.txt
* Structured data where relevant

---

### 6.2 Homepage Requirements

#### FR-101 Homepage Purpose

The homepage must immediately explain:

* What AL Djisr is
* Where it is located
* What levels or programs it offers
* Why parents should trust it
* What the next action should be

#### FR-102 Hero Section

The hero section must include:

* School name
* Short value proposition
* Supporting subtitle
* Strong CTA button
* Secondary CTA button
* Background image or visual with school identity

Example messaging direction:

* Education excellence in Bab Ezzouar
* A trusted environment for your child’s future
* Request information today

#### FR-103 Trust Signals

The homepage must include trust-enhancing elements such as:

* Number of years in operation, if available
* Experienced teachers
* Safe environment
* Modern classrooms
* Structured programs
* Parent communication
* Photos of the real school

#### FR-104 Highlights Section

The homepage must summarize the school’s strengths using cards or icons:

* Quality education
* Structured curriculum
* Safe environment
* Student support
* Modern facilities
* Parent communication

#### FR-105 Programs Preview

The homepage must preview available programs or levels with links to the Programs page.

#### FR-106 Facilities Preview

The homepage must preview the gallery or facilities section with a call to view more.

#### FR-107 Admissions Preview

The homepage must include a simplified admissions section:

* Who can apply
* Basic steps
* Call to action

#### FR-108 Testimonials or Social Proof

If available, the homepage should display testimonials from:

* Parents
* Students
* Staff endorsements
  If no testimonials are available yet, the section should be prepared for future insertion.

#### FR-109 Contact Summary

The homepage must end with a strong contact strip containing:

* Phone
* WhatsApp
* Address
* CTA

---

### 6.3 About Page Requirements

#### FR-201 About Page Purpose

The About page must explain the school identity, mission, educational philosophy, and values.

#### FR-202 Required Content Blocks

The About page must include:

* School history
* Mission
* Vision
* Core values
* Educational approach
* Community role
* Leadership message if available

#### FR-203 Tone

The copy should be reassuring, credible, and human. It should avoid generic corporate phrasing.

#### FR-204 Optional Sections

* Director’s message
* Staff philosophy
* Accreditation or recognition
* School ethos

---

### 6.4 Programs Page Requirements

#### FR-301 Programs Overview

The Programs page must describe the school’s educational offerings in a structured way.

#### FR-302 Level-Based Structure

Each level or track must have its own section. Example structure:

* Preschool / kindergarten
* Primary
* Middle school
* Secondary
* Language enrichment
* Extra academic support

Only actual offered levels should be displayed.

#### FR-303 Program Details

Each program card must include:

* Program name
* Age group or level
* Overview
* Learning objectives
* Teaching features
* CTA to inquire or register

#### FR-304 Content Readability

The page must be easy to scan and should avoid long dense paragraphs.

#### FR-305 Program Differentiators

The page must include elements that explain what makes the school different:

* Small class size
* Personalized support
* Strong discipline
* Bilingual or language support if offered
* Exam preparation if applicable

---

### 6.5 Admissions / Pre-Registration Requirements

#### FR-401 Admissions Page Purpose

This page must convert interested parents into leads.

#### FR-402 Required Information

The admissions page must clearly explain:

* Who can apply
* Required documents
* Age or level criteria
* Process steps
* Contact channel for next step

#### FR-403 Pre-Registration Form

The site must include a form that captures lead information.

Minimum fields:

* Parent full name
* Phone number
* Email address optional
* Child full name
* Child age or birth date
* Desired level
* Preferred contact method
* Message / notes
* Consent checkbox for data processing

Optional fields:

* City
* Current school
* Academic year
* Availability for visit

#### FR-404 Form Validation

The form must validate:

* Required fields
* Email format if provided
* Phone format
* Consent checkbox
* Spam protection

#### FR-405 Submission Handling

On successful submission:

* Show success message
* Confirm that the school will contact them
* Log the lead in a database or send it to an email inbox
* Optionally send a confirmation email to the user

#### FR-406 Failure Handling

If submission fails:

* Show clear error message
* Preserve user input
* Allow retry

#### FR-407 Lead Management

The school should be able to receive leads through:

* Email notification
* Database storage
* Admin view later if needed

---

### 6.6 Gallery / Facilities Page Requirements

#### FR-501 Gallery Purpose

The gallery must build trust by showing real images of the school environment.

#### FR-502 Required Categories

The gallery should include categories such as:

* Classrooms
* Corridors
* Play areas
* Labs
* Library
* Reception
* Exterior / entrance
* Events
* Student activities

Only actual available images should be shown.

#### FR-503 Image Requirements

Images must:

* Be optimized for web
* Have descriptive alt text
* Support lazy loading
* Open in a lightbox or modal when clicked

#### FR-504 Visual Consistency

The gallery must follow a consistent layout and avoid clutter.

---

### 6.7 FAQ Page Requirements

#### FR-601 FAQ Purpose

The FAQ page must reduce friction and answer common parent questions.

#### FR-602 Suggested FAQ Topics

* What ages does the school accept?
* How do I register my child?
* What documents are required?
* What are the school hours?
* Does the school provide transport?
* Does the school offer meals?
* What languages are used?
* Can parents visit the school?
* How can I contact admissions?
* What is the tuition fee?

Only questions approved by the school should be published.

#### FR-603 SEO Benefit

FAQ content should be structured for search engine relevance and clarity.

---

### 6.8 Contact Page Requirements

#### FR-701 Contact Page Purpose

The contact page must make reaching the school very easy.

#### FR-702 Required Elements

* Phone number
* WhatsApp link
* Email
* Address
* Embedded map
* Working hours
* Contact form

#### FR-703 Map Integration

The page should include a map, preferably Google Maps embed or a privacy-friendly alternative.

#### FR-704 Multiple Contact Paths

Users must be able to:

* Call
* Message on WhatsApp
* Send email
* Submit form
* Navigate to the school location

---

### 6.9 News / Blog Section Requirements

This section is optional but strongly recommended for SEO.

#### FR-801 Blog Purpose

The blog helps the school rank for more search queries and demonstrates activity and authority.

#### FR-802 Content Types

Possible post types:

* School announcements
* Enrollment updates
* Event recaps
* Educational tips for parents
* Back-to-school articles
* Academic advice

#### FR-803 Publish Workflow

Posts should be:

* Drafted
* Reviewed
* Published
* Editable later

---

## 7. SEO Requirements

SEO is a core product requirement, not an afterthought.

### 7.1 SEO Strategy Objective

The website must help the school appear in local search results for queries related to private schools in Bab Ezzouar and Algiers.

### 7.2 Target SEO Intent

The site should target parents searching for:

* private school in Bab Ezzouar
* private school in Algiers
* school enrollment Bab Ezzouar
* best private school Algiers
* educational institution Bab Ezzouar

### 7.3 On-Page SEO Requirements

Each page must have:

* Unique title tag
* Unique meta description
* One H1 only
* Structured H2/H3 hierarchy
* Keyword-relevant content
* Internal links
* Descriptive image alt text
* Canonical URL

### 7.4 Technical SEO Requirements

The site must include:

* XML sitemap
* robots.txt
* canonical tags
* Open Graph metadata
* Twitter card metadata
* Structured data / schema where appropriate
* Fast page load times
* Mobile-friendly layout
* Clean URLs
* Redirect handling if URLs change

### 7.5 Local SEO Requirements

The site must support local visibility:

* School name consistency
* Address consistency
* Phone consistency
* Google Business Profile compatibility
* Map presence
* Bab Ezzouar and Algiers location signals in content

### 7.6 Schema Markup

The implementation should include relevant schema types:

* EducationalOrganization
* LocalBusiness if appropriate
* FAQPage for FAQ content
* BreadcrumbList
* Article for blog posts

### 7.7 Keyword Strategy

The content team should create pages around:

* school name variations
* local school intent
* admissions intent
* trust and quality intent
* facilities and program intent

### 7.8 Content Quality Requirements

SEO content must be:

* Human-readable
* Original
* Non-stuffed
* Locally relevant
* Useful to parents
* Consistent in terminology

---

## 8. Content Requirements

### 8.1 Brand Voice

The copy should sound:

* Professional
* Warm
* Reassuring
* Confident
* Educational
* Slightly premium
* Parent-focused

### 8.2 Tone Rules

The site should:

* Use short, clear sentences
* Avoid jargon
* Avoid exaggerated claims unless proven
* Avoid robotic or generic school phrases
* Focus on trust, future, and clarity

### 8.3 Required Content Inputs

The school must provide:

* Official logo
* Brand colors if any
* Address
* Phone numbers
* WhatsApp number
* Email
* School description
* Program details
* Team or leadership info
* Real photos
* Admissions documents list
* FAQ answers
* Testimonials if available

### 8.4 Placeholder Handling

If content is unavailable at development time, the system must support placeholder text without breaking layout.

---

## 9. UX / UI Requirements

### 9.1 Design Objectives

The interface must:

* Build trust
* Reduce cognitive load
* Be easy to scan
* Work well on mobile
* Feel premium and orderly

### 9.2 Visual Style

Recommended style direction:

* Clean
* Bright
* Structured
* Elegant
* School-appropriate
* No heavy clutter
* No distracting motion

### 9.3 Color Direction

Colors should align with a school identity and support trust. Common direction:

* Primary: navy / royal blue / deep teal
* Secondary: white / light gray
* Accent: gold / green / warm neutral

Final palette must be approved by the school.

### 9.4 Typography

Typography must be:

* Highly readable
* Responsive
* Suitable for Arabic/French future expansion
* Visually professional

### 9.5 Layout Requirements

The layout must:

* Use strong spacing
* Separate sections clearly
* Highlight CTAs
* Keep navigation obvious
* Make important details visible above the fold

### 9.6 Mobile UX

The mobile experience is critical and must include:

* Sticky CTA or quick action bar
* Clickable phone and WhatsApp
* Large touch targets
* Fast scroll performance
* No cramped text blocks

---

## 10. Accessibility Requirements

### 10.1 Accessibility Goal

The site should be usable by as many people as possible, including users with visual or motor limitations.

### 10.2 Requirements

* Semantic HTML
* Proper heading structure
* Sufficient contrast
* Keyboard navigation
* Focus states
* Descriptive alt text
* Form labels connected to inputs
* Error messages that are clear and announced

### 10.3 Minimum Target

The implementation should aim for WCAG-aligned best practices, especially for readability and navigation.

---

## 11. Performance Requirements

### 11.1 Speed Objectives

The site must load quickly, especially on mobile data connections.

### 11.2 Performance Rules

* Use optimized images
* Use lazy loading where appropriate
* Minimize client-side JavaScript
* Use caching where possible
* Split code efficiently
* Avoid unnecessary libraries

### 11.3 Core Web Vitals

The implementation should prioritize:

* Fast LCP
* Low CLS
* Good INP
* Stable layout

---

## 12. Security Requirements

### 12.1 Form Security

All forms must be protected against:

* Spam
* Bot submissions
* Basic abuse

### 12.2 Transport Security

The site must use HTTPS.

### 12.3 Input Validation

All user input must be:

* Sanitized
* Validated on client and server
* Protected from injection risks

### 12.4 Privacy

The site must not expose private data in frontend code or public endpoints.

---

## 13. Data Requirements

### 13.1 Data Entities

#### School

* Name
* Address
* Phone
* Email
* Location
* Description
* Social media links
* Working hours

#### Program

* Name
* Description
* Target level
* Age group
* Availability
* CTA link

#### Lead / Inquiry

* Parent name
* Phone
* Email
* Child name
* Child age
* Desired level
* Message
* Timestamp
* Source page
* Consent status

#### Gallery Item

* Image
* Caption
* Category
* Alt text

#### FAQ Item

* Question
* Answer
* Category
* Publish status

#### Blog Post

* Title
* Slug
* Content
* Meta title
* Meta description
* Featured image
* Publish date
* Status

### 13.2 Data Storage

A suitable storage method must be chosen based on final architecture:

* CMS
* Database
* Static content files
* Hybrid setup

---

## 14. Technical Architecture Requirements

### 14.1 Recommended Stack

* **Framework:** Next.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS or equivalent
* **UI Components:** Shadcn/ui or custom system
* **Forms:** React Hook Form + Zod
* **SEO:** Next.js metadata API
* **Images:** Next Image
* **Hosting:** Vercel or equivalent
* **Analytics:** Google Analytics / Plausible / equivalent
* **Error monitoring:** Sentry or equivalent

### 14.2 Next.js Architecture Requirements

The implementation should use:

* App Router
* Server Components where useful
* Static generation where possible
* Server actions or API routes for form submissions
* Modular component structure
* Reusable layout components

### 14.3 Suggested Folder Structure

A clean architecture should include:

* `app/`
* `components/`
* `sections/`
* `lib/`
* `content/`
* `public/`
* `types/`
* `config/`

### 14.4 Content Management Strategy

Choose one of the following:

* Static content files for simplicity
* CMS integration for non-technical updates
* Hybrid approach

For a school vitrine, a structured CMS or content files are strongly recommended.

---

## 15. Page-by-Page Detailed Requirements

### 15.1 Header

Must include:

* Logo
* Navigation
* CTA button
* Mobile menu
* Sticky behavior on scroll if approved

### 15.2 Footer

Must include:

* School name
* Address
* Phone
* WhatsApp
* Email
* Links to main pages
* Social media links
* Legal links if needed

### 15.3 Home Page Sections

Suggested order:

1. Hero
2. Trust badges
3. About preview
4. Programs preview
5. Why choose us
6. Facilities preview
7. Testimonials
8. Admissions CTA
9. Contact strip

### 15.4 About Page Sections

Suggested order:

1. Hero
2. School story
3. Mission / vision
4. Values
5. Teaching philosophy
6. Leadership or staff note
7. CTA

### 15.5 Programs Page Sections

Suggested order:

1. Hero
2. Program cards
3. Educational approach
4. Extra support
5. CTA

### 15.6 Admissions Page Sections

Suggested order:

1. Hero
2. Admission steps
3. Required documents
4. Form
5. FAQ shortcut
6. CTA

### 15.7 Gallery Page Sections

Suggested order:

1. Hero
2. Categories
3. Gallery grid
4. CTA to visit/contact

### 15.8 FAQ Page Sections

Suggested order:

1. Hero
2. FAQ accordion
3. CTA

### 15.9 Contact Page Sections

Suggested order:

1. Hero
2. Contact details
3. Map
4. Form
5. Working hours
6. CTA

---

## 16. Form Requirements in Detail

### 16.1 General Form Behavior

All forms must:

* Have labels
* Show inline validation errors
* Prevent double submission
* Display loading state
* Preserve entered data on error
* Confirm success clearly

### 16.2 Contact Form

Fields:

* Full name
* Phone
* Email optional
* Subject
* Message

### 16.3 Pre-Registration Form

Fields:

* Parent name
* Child name
* Child birth date or age
* Requested level
* Phone
* Email optional
* Notes
* Consent checkbox

### 16.4 Form Routing

On submit, data can be routed to:

* School email inbox
* CRM or lead sheet
* Database
* Admin dashboard later

### 16.5 Anti-Spam

Recommended protections:

* Honeypot field
* Rate limiting
* CAPTCHA only if needed
* Server-side validation

---

## 17. Analytics and Tracking Requirements

### 17.1 Tracking Objective

The site must be measurable so the school knows what works.

### 17.2 Events to Track

* Page views
* CTA clicks
* Call button clicks
* WhatsApp clicks
* Form submissions
* Scroll depth
* Menu interactions
* Gallery interactions

### 17.3 Conversion Sources

Track source if possible:

* Organic search
* Direct
* Social media
* Paid ads
* Referral

### 17.4 Reporting

At minimum, the school should be able to review:

* Number of leads
* Most visited pages
* Best converting pages
* Top traffic sources

---

## 18. Content Governance Requirements

### 18.1 Editorial Control

All content must have a clear ownership process:

* Draft
* Review
* Approve
* Publish

### 18.2 Update Policy

Pages like programs, admissions, and contact info must be easy to update quickly.

### 18.3 Image Policy

Only real images from the school should be used whenever possible. Stock images should be avoided or minimized.

---

## 19. Legal and Compliance Requirements

### 19.1 Privacy Notice

The site should include a privacy notice if collecting lead data.

### 19.2 Consent

Forms should include consent for contact and data processing.

### 19.3 Accuracy

Published information must match official school details.

### 19.4 Contact Information

All contact details must be verified before launch.

---

## 20. Out of Scope

The following are explicitly excluded from this release:

* ERP
* Student authentication
* Parent dashboards
* Gradebooks
* Attendance tracking
* Online class platform
* Payments
* Transport management
* Internal staff tools
* Complex booking system
* Automated admissions decision engine

---

## 21. Risks and Mitigations

### 21.1 Risk: Missing Content

**Problem:** The school may not provide all text and images on time.
**Mitigation:** Use placeholders and a structured content checklist.

### 21.2 Risk: Weak SEO Execution

**Problem:** Beautiful websites often fail in search if SEO is ignored.
**Mitigation:** Build SEO requirements into development from day one.

### 21.3 Risk: Slow Mobile Performance

**Problem:** Heavy images or poor implementation may slow the site.
**Mitigation:** Optimize assets, use Next Image, and keep scripts minimal.

### 21.4 Risk: Low Lead Conversion

**Problem:** Visitors may browse but not contact.
**Mitigation:** Use clear CTA placement, WhatsApp, call buttons, and concise messaging.

### 21.5 Risk: Content Stagnation

**Problem:** Site becomes outdated after launch.
**Mitigation:** Prepare CMS/content workflow for ongoing updates.

---

## 22. Acceptance Criteria

The project is accepted when:

* All planned pages are implemented
* Responsive layout works across key devices
* Forms submit correctly
* SEO metadata is present
* Sitemap and robots.txt exist
* Contact methods work
* Images are optimized
* The website reflects the school brand professionally
* Core user journeys are smooth and clear
* Performance is acceptable on mobile
* The site is ready for production deployment

---

## 23. Deliverables

The implementation should deliver:

* Fully working Next.js website
* Source code repository
* Deployment-ready build
* SEO metadata configuration
* Form handling logic
* Reusable UI components
* Content structure documentation
* Basic admin/content update guide
* Launch checklist

---

## 24. Recommended Implementation Notes for Copilot

To make development cleaner, the assistant should implement the project with:

* Component-based design
* Reusable section components
* Separate content configuration
* SEO metadata per route
* Type-safe form schemas
* Reusable CTA components
* Shared layout and navigation
* Modular page structure
* Performance-first asset handling
* Clear naming conventions

---

## 25. Final Product Definition

The final product is a **professional, SEO-ready, conversion-focused vitrine website** for **AL Djisr Private School in Bab Ezzouar**, built with **Next.js**, designed to attract parents, communicate trust, and generate inquiries efficiently.

It should feel like a serious educational brand from the first second.



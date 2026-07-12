# Issue #3 Task 01: Contact Form Integration

- Parent issue: `https://github.com/auapwllc-dev/allusedautopartswearhouse/issues/3`
- Source context reviewed: `contact.html`, `about.html`, `inventory.html`, `_layouts/default.html`, `_config.yml`
- Related issue for this planning work: `https://github.com/auapwllc-dev/allusedautopartswearhouse/issues/4`

## Reviewed Project Context

The imported site is already scaffolded and deployable, but its lead-capture path is not implemented yet.  
In `contact.html`, the quote request form still points to a placeholder endpoint:

- `action="https://formspree.io/f/your-form-id"`

This blocks real customer inquiries from being submitted successfully.

## First Actionable Implementation Task

Implement production-ready contact form submissions by replacing the placeholder endpoint and adding user-visible success and failure handling.

### Scope

- Replace the placeholder Formspree action URL with a real configurable endpoint.
- Add a clear post-submit success state so users know their request was received.
- Add failure handling guidance for failed submissions.
- Keep existing required fields and page layout intact.

### Acceptance Criteria

- `contact.html` no longer contains `your-form-id`.
- Form submissions are routed to a real endpoint configurable for production.
- Users see a success confirmation after a valid submission.
- Users see an actionable error state if submission fails.
- Existing contact details (`site.phone`, `site.email`, `site.address`, `site.hours`) continue rendering unchanged.
- `bundle exec jekyll build` succeeds after the change.

## Follow-up Tasks (Post Task 01)

- Add spam prevention (`honeypot` or equivalent bot mitigation supported by the chosen form backend).
- Add analytics event tracking for quote submissions.
- Add basic automated page checks for key contact form markup.

## Independent Tracking

Track this implementation as a dedicated issue linked back to parent issue `#3`.

- Suggested issue title: `Implement contact form submission flow (parent #3)`
- Suggested issue body opening line: `Parent: #3`


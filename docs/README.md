# Docsify Website Setup and Maintenance Guide

This README provides detailed instructions for uploading and maintaining your Docsify website, tailored for your music projects under the pseudonyms "Angershade" and "The Corruptive," with the publishing company "Yegge." The domains are `yegge.com`, `angershade.com`, and `thecorruptive.com`. This guide assumes you are using Docsify for a static site with the specified folder hierarchy and features.

## Prerequisites

- **Basic Knowledge**: Familiarity with HTML, CSS, JavaScript, Markdown, and basic command-line operations.
- **Tools**:
  - A code editor (e.g., VS Code).
  - Git for version control (optional but recommended).
  - A Cloudflare account for hosting media files.
  - A web server or hosting service (e.g., GitHub Pages, Netlify, or a custom server).
- **Domains**: Ensure `yegge.com`, `angershade.com`, and `thecorruptive.com` are registered and configured to point to your hosting service.
- **Docsify**: Docsify is a JavaScript-based documentation site generator that renders Markdown files dynamically.

## Folder Structure

Your website should follow this structure:

```
WEBSITE
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   └── images/
├── music/
│   ├── catalog/
│   │   ├── album1/
│   │   │   └── index.md
│   │   └── album2/
│   │       └── index.md
├── about/
│   ├── index.md
├── contact/
│   ├── index.md
│   ├── subscribe.md
│   ├── inquiry.md
├── blog/
│   ├── posts/
│   │   ├── post1.md
│   │   └── post2.md
├── terms/
│   ├── index.md
├── index.md
└── index.html
```

- **assets/**: Contains CSS, JavaScript, and images.
- **music/catalog/**: Houses album and track data, rendered dynamically.
- **about/**, **contact/**, **blog/**, **terms/**: Markdown files for static pages.
- **index.html**: The main Docsify entry point.
- **index.md**: The homepage content in Markdown.

## Setting Up Docsify

1. **Install Docsify**:
   - Create an `index.html` file in the root directory with the following content:

<xaiArtifact artifact_id="4e201b28-0946-4b10-8c85-b552b7524043" artifact_version_id="ac323536-e896-409c-b30f-e915e5db3f8a" title="index.html" contentType="text/html">
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yegge</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify/themes/dark.css">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Inter:wght@700&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script src="https://cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
  <script src="/assets/js/scripts.js"></script>
</body>
</html>
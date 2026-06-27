# Lynx Telematics Knowledge Base

Internal training wiki for the Lynx Telematics fleet management platform.

## How to Deploy (GitHub Pages)

### First-time setup (5 minutes)

1. Go to https://github.com and create a free account if you don't have one
2. Click the **+** icon (top right) → **New repository**
3. Name it: `lynx-kb` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**
6. On the next screen click **uploading an existing file**
7. Drag and drop ALL files from this folder (keeping the folder structure)
8. Click **Commit changes**
9. Go to **Settings** → **Pages** (left sidebar)
10. Under "Source" select **Deploy from a branch** → **main** → **/ (root)**
11. Click **Save**
12. Your site will be live at: `https://YOUR-USERNAME.github.io/lynx-kb/`

### Adding new articles

1. Build the new article HTML file (same structure as articles/module1-icons.html)
2. Add it to the `articles/` folder in your GitHub repo
3. Update the sidebar nav links in `index.html` and all article pages
4. Commit — site updates automatically within 1-2 minutes

## File Structure

```
/
├── index.html              ← Home page
├── css/
│   └── style.css           ← All styles
├── js/
│   └── main.js             ← Search + sidebar
└── articles/
    └── module1-icons.html  ← Module 1
```

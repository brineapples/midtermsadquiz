# Systems Analysis & SDLC Quiz

A 100-question multiple-choice quiz (A/B/C/D). Pure HTML, CSS and JavaScript, with no build step and no backend.

## Files
- `index.html` - page structure
- `style.css` - styling (light and dark mode)
- `questions.js` - all 100 questions (edit this to change them)
- `app.js` - quiz logic

## Run locally
Open `index.html` in a browser.

## Deploy on GitHub Pages
1. Create a new GitHub repository and upload all files to the repository root (`index.html` must be at the top level).
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose `main` and `/ (root)`, then **Save**.
4. After a minute, your quiz is live at `https://<your-username>.github.io/<repo-name>/`.

## Adding or editing questions
Each question in `questions.js` is one row: `[question, correct answer, wrong 1, wrong 2, wrong 3]`.
The correct answer goes first; the app places it at a balanced A/B/C/D position or shuffles it.

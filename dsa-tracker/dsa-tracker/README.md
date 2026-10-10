# DSA Tracker

A dark-themed tracker for Striver's A2Z DSA Sheet — 452 problems across 22 topics — built with React + Vite. Per-topic and overall progress, a title filter, and checkboxes that persist in `localStorage`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Project layout

```
src/
  App.jsx                  # state: search query, open sections, active topic
  hooks/useProgress.js     # solved-problem ids + localStorage persistence
  components/
    TopBar.jsx             # brand, search, expand/collapse, overall progress
    Sidebar.jsx            # topic navigation with counts
    Category.jsx           # one collapsible topic + its progress bar
    Problem.jsx            # one problem row (checkbox, number, link)
    Footer.jsx
  data/
    index.js               # ordered list of categories
    categories/NN-*.js     # one file per topic, holds its problems
  styles/global.css
```

### Adding or editing problems

Open the topic's file in `src/data/categories/` and add `{ id, title, link }`. Use the next unused `id` — ids are what saved progress is keyed on, so don't renumber existing ones. To add a new topic, create a file there and list it in `src/data/index.js`.

## Credits

Problem links come from [Spynoodles](https://github.com/Spynoodles)'s [Striver-Take-U-Forward-GFG-Links](https://github.com/Spynoodles/Striver-Take-U-Forward-GFG-Links). The original scrape is kept in `Scrapped_Links.csv`.

## Roadmap

- Persistent storage on a real backend
- Username/password login
- PHP + Laravel stack for the above

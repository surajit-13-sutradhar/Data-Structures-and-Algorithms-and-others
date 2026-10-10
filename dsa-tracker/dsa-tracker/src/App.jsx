import { useMemo, useState } from 'react';
import { categories, TOTAL } from './data';
import useProgress from './hooks/useProgress.js';
import TopBar from './components/TopBar.jsx';
import Sidebar from './components/Sidebar.jsx';
import Category from './components/Category.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { done, toggle } = useProgress();
  const [query, setQuery] = useState('');
  const [openSet, setOpenSet] = useState(() => new Set());
  const [activeIndex, setActiveIndex] = useState(null);

  const q = query.trim().toLowerCase();

  // Per-category problems matching the search; categories with no match are hidden while searching.
  const visible = useMemo(
    () =>
      categories
        .map((category, index) => ({
          category,
          index,
          problems: q
            ? category.problems.filter((p) => p.title.toLowerCase().includes(q))
            : category.problems,
        }))
        .filter((entry) => !q || entry.problems.length > 0),
    [q]
  );

  const solved = useMemo(
    () => categories.reduce((n, c) => n + c.problems.filter((p) => done.has(p.id)).length, 0),
    [done]
  );

  const toggleOpen = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const expandAll = () => setOpenSet(new Set(categories.map((_, i) => i)));
  const collapseAll = () => setOpenSet(new Set());

  const jumpTo = (i) => {
    setActiveIndex(i);
    setOpenSet((prev) => new Set(prev).add(i));
  };

  return (
    <>
      <TopBar
        total={TOTAL}
        solved={solved}
        query={query}
        onQuery={setQuery}
        onExpandAll={expandAll}
        onCollapseAll={collapseAll}
      />

      <div className="layout">
        <Sidebar categories={categories} done={done} activeIndex={activeIndex} onJump={jumpTo} />

        <main className="main">
          {visible.map(({ category, index, problems }) => (
            <Category
              key={category.name}
              index={index}
              category={category}
              problems={problems}
              done={done}
              open={q ? true : openSet.has(index)}
              onToggleOpen={toggleOpen}
              onToggleProblem={toggle}
            />
          ))}
          {q && visible.length === 0 && <div className="empty-msg">No problems match your filter.</div>}
        </main>
      </div>

      <Footer />
    </>
  );
}

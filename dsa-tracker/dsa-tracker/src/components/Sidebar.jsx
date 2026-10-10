/** Sticky topic navigation with per-topic counts. */
export default function Sidebar({ categories, done, activeIndex, onJump }) {
  return (
    <nav className="sidebar">
      {categories.map((c, i) => {
        const solved = c.problems.filter((p) => done.has(p.id)).length;
        return (
          <a
            key={c.name}
            href={`#cat-${i}`}
            className={`side-item${activeIndex === i ? ' active' : ''}`}
            onClick={() => onJump(i)}
          >
            <span className="side-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="side-name">{c.name}</span>
            <span className="side-count">{solved}/{c.problems.length}</span>
          </a>
        );
      })}
    </nav>
  );
}

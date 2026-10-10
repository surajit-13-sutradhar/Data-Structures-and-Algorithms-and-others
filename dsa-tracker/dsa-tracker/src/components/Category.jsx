import Problem from './Problem.jsx';

/** A collapsible topic section with its own progress bar. */
export default function Category({ index, category, problems, done, open, onToggleOpen, onToggleProblem }) {
  const total = category.problems.length;
  const solved = category.problems.filter((p) => done.has(p.id)).length;
  const pct = total ? (solved / total) * 100 : 0;

  return (
    <section className={`cat${open ? ' open' : ''}`} id={`cat-${index}`}>
      <button
        className="cat-head"
        onClick={() => onToggleOpen(index)}
        aria-expanded={open}
        aria-controls={`body-${index}`}
      >
        <span className="cat-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="cat-name">{category.name}</span>
        <span className="cat-progress">
          <span className="cat-count">{solved}/{total}</span>
          <span className="chev">&rsaquo;</span>
        </span>
      </button>
      <div className="cat-bar-track">
        <div className="cat-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <ul className="rows" id={`body-${index}`} hidden={!open}>
        {problems.map((p) => (
          <Problem key={p.id} problem={p} done={done.has(p.id)} onToggle={onToggleProblem} />
        ))}
      </ul>
    </section>
  );
}

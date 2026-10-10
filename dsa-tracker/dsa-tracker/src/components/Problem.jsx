import { memo } from 'react';

/** One problem row: checkbox, running number, and link. */
function Problem({ problem, done, onToggle }) {
  const { id, title, link } = problem;
  return (
    <li className={`row${done ? ' done' : ''}`}>
      <label className="chk">
        <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
        <span className="box" aria-hidden="true" />
      </label>
      <span className="idx">{String(id + 1).padStart(3, '0')}</span>
      <a className="ptitle" href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </li>
  );
}

export default memo(Problem);

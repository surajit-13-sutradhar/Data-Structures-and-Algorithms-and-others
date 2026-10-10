/** Brand, search, expand/collapse controls, and overall progress. */
export default function TopBar({ total, solved, query, onQuery, onExpandAll, onCollapseAll }) {
  const pct = total ? Math.round((solved / total) * 100) : 0;
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="brand">
          DSA Tracker<span>{total} problems</span>
        </div>
        <div className="search-wrap">
          <input
            id="search"
            type="text"
            placeholder="Filter problems…"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
          />
        </div>
        <div className="actions">
          <button onClick={onExpandAll}>Expand all</button>
          <button onClick={onCollapseAll}>Collapse all</button>
        </div>
        <div className="stats">
          <b>{solved}</b>/{total} solved &middot; <span className="pct">{pct}%</span>
        </div>
      </div>
      <div className="progress-outer">
        <div className="progress-inner" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

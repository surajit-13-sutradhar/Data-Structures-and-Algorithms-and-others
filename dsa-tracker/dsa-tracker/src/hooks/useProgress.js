import { useCallback, useEffect, useState } from 'react';

// Same key as the original single-file tracker, so existing progress carries over.
const STORAGE_KEY = 'dsa-tracker-progress-v1';

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

/** Set of solved problem ids, persisted to localStorage. */
export default function useProgress() {
  const [done, setDone] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...done]));
    } catch {
      /* storage unavailable - ignore */
    }
  }, [done]);

  const toggle = useCallback((id) => {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  return { done, toggle };
}

import { useEffect, useState } from 'react';

// Returns today's weekday name ("Monday") after mount, and null during prerender/hydration,
// so server HTML and the first client render always match.
export function useToday() {
  const [today, setToday] = useState(null);
  useEffect(() => {
    setToday(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
  }, []);
  return today;
}

export const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split('T')[0];
};

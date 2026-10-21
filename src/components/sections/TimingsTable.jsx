import { timings } from '../../data/timings';
import { useToday } from '../../lib/useToday';

function Slot({ value }) {
  return value ? <span>{value}</span> : <span className="text-muted/70">Closed</span>;
}

export default function TimingsTable() {
  const today = useToday();
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-[15px]">
        <caption className="sr-only">Weekly clinic timings</caption>
        <thead className="border-b border-line bg-surface">
          <tr>
            <th scope="col" className="px-4 py-4 font-semibold text-ink sm:px-6">Day</th>
            <th scope="col" className="px-4 py-4 font-semibold text-ink sm:px-6">Morning</th>
            <th scope="col" className="px-4 py-4 font-semibold text-ink sm:px-6">Evening</th>
          </tr>
        </thead>
        <tbody>
          {timings.map((t) => {
            const isToday = t.day === today;
            return (
              <tr
                key={t.day}
                aria-current={isToday ? 'date' : undefined}
                className={`border-b border-line transition-colors duration-300 last:border-0 hover:bg-paper ${isToday ? 'bg-primary-soft' : ''}`}
              >
                <th scope="row" className="px-4 py-4 font-medium text-ink sm:px-6">
                  <span className="flex flex-wrap items-center gap-2">
                    {t.day}
                    {isToday && <span className="rounded bg-accent px-1.5 py-0.5 text-xs font-semibold text-white">Today</span>}
                  </span>
                </th>
                <td className="px-4 py-4 sm:px-6"><Slot value={t.morning} /></td>
                <td className="px-4 py-4 sm:px-6"><Slot value={t.evening} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

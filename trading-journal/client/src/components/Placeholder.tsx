import { ReactNode } from 'react';

interface PlaceholderProps {
  title: string;
  phase: string;
  children?: ReactNode;
}

/**
 * Marks an area whose real content lands in a later phase. Keeps the layout
 * honest — you can see where a feature will live without pretending it works yet.
 */
export default function Placeholder({ title, phase, children }: PlaceholderProps) {
  return (
    <div className="rounded-xl border border-dashed border-edge bg-panel/50 p-6">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-white">{title}</span>
        <span className="rounded-full border border-edge px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
          {phase}
        </span>
      </div>
      {children && <div className="mt-3 text-sm text-muted">{children}</div>}
    </div>
  );
}

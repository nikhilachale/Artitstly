import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

export function Badge({ className = '', ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors ${className}`}
      {...props}
    />
  );
}
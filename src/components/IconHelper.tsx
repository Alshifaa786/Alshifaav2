import React from 'react';
import * as Icons from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = 'w-6 h-6', size }) => {
  // Map custom name overrides if needed
  let iconKey = name;
  if (name === 'Cross') iconKey = 'Plus';

  const LucideIcon = (Icons as Record<string, React.FC<{ className?: string; size?: number }>>)[iconKey] || Icons.Heart;

  return <LucideIcon className={className} size={size} />;
};

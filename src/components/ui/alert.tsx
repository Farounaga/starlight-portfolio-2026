import * as React from 'react';
import { cn } from './utils';

export const Alert = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div role='alert' className={cn('relative w-full rounded-lg border p-4', className)} {...props} />
);
export const AlertTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5 className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props} />
);
export const AlertDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('text-sm text-muted-foreground', className)} {...props} />
);

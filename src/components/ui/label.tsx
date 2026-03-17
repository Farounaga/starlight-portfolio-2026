import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cn } from './utils';

export const Label = React.forwardRef<any, any>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn('text-sm font-medium leading-none', className)} {...props} />
));
Label.displayName = 'Label';

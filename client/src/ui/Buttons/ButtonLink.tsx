import { FC, ReactNode } from 'react';

import cn from 'classnames';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

import { classNames } from './classNames';

type Props = {
  text: string;
  href: string;
  variant?: 'default' | 'secondary' | 'outline';
  disabled?: boolean;
  icon?: ReactNode;
};

export const ButtonLink: FC<Props> = ({
  text,
  href,
  variant = 'default',
  disabled = false,
  icon,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant }),
        'w-full flex text-neutral-100 !rounded-lg gap-2',
        {
          [classNames.secondary]: variant === 'secondary',
          [classNames.disabledSecondary]: variant === 'secondary' && disabled,

          [classNames.outline]: variant === 'outline',
          [classNames.disabledDefault]: variant === 'outline' && disabled,

          [classNames.default]: variant === 'default',
          [classNames.disabledDefault]: disabled,
        },
      )}
    >
      {icon}
      {text}
    </Link>
  );
};

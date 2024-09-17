import { FC } from 'react';

import cn from 'classnames';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

import { classNames } from './classNames';

type Props = {
  text: string;
  href: string;
  variant?: 'default' | 'secondary' | 'outline';
  disabled?: boolean;
};

export const PrimaryButtonLink: FC<Props> = ({
  text,
  href,
  variant = 'default',
  disabled = false,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant }),
        'w-full block text-black !rounded-lg',
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
      {text}
    </Link>
  );
};

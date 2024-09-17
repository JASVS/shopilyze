'use client';

import { FC } from 'react';

import cn from 'classnames';

import { Button, buttonVariants } from '@/components/ui/button';

import { classNames } from './classNames';

type Props = {
  text: string;
  variant?: 'default' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const PrimaryButton: FC<Props> = ({
  text,
  variant = 'default',
  type = 'button',
  disabled = false,
  onClick,
}) => (
  <Button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      buttonVariants({ variant }),
      'w-full block text-black !rounded-lg',
      {
        [classNames.default]: variant === 'default',
        [classNames.secondary]: variant === 'secondary',
        [classNames.outline]: variant === 'outline',
      },
    )}
  >
    {text}
  </Button>
);

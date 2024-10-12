'use client';

import { FC, ReactNode } from 'react';

import cn from 'classnames';

import { Button as UIButton, buttonVariants } from '@/components/ui/button';

import { classNames } from './classNames';

type Props = {
  text: string;
  variant?: 'default' | 'secondary' | 'outline';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: ReactNode;
};

export const Button: FC<Props> = ({
  text,
  variant = 'default',
  type = 'button',
  disabled = false,
  onClick,
  icon,
}) => (
  <UIButton
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={cn(
      buttonVariants({ variant }),
      'w-full flex text-neutral-100 !rounded-lg gap-2',
      {
        [classNames.default]: variant === 'default',
        [classNames.secondary]: variant === 'secondary',
        [classNames.outline]: variant === 'outline',
      },
    )}
  >
    {icon}
    {text}
  </UIButton>
);

import { FC, ReactNode } from 'react';

import { DialogTitle } from '@radix-ui/react-dialog';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

type Props = {
  button: ReactNode;
  content: ReactNode;
  header?: string;
};

export const Modal: FC<Props> = ({ button, content, header }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>

      <DialogContent className="max-w-[600px]">
        {header && (
          <DialogHeader>
            <DialogTitle className="font-Poppins text-black sm:text-3xl font-semibold">
              {header}
            </DialogTitle>
          </DialogHeader>
        )}

        {content}
      </DialogContent>
    </Dialog>
  );
};

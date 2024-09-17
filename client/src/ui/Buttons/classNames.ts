export const classNames = {
  default: `
    font-Montserrat
    font-semibold
    !text-black
    bg-contrast-100
    hover:bg-contrast-90
    active:bg-contrast-30

    disabled:text-neutral-100
    disabled:bg-neutral-90
  `,
  disabledDefault: `
    !text-neutral-40
    !bg-neutral-20
    pointer-events-none
  `,

  secondary: `
    font-Montserrat
    font-semibold
    text-black
    !bg-[transparent]
    border-contrast-100
    border-2
    hover:bg-contrast-40
    active:bg-contrast-80

    disabled:border-neutral-30
    disabled:text-neutral-30
    disabled:opacity-100
  `,
  disabledSecondary: `
    text-neutral-40
    border-neutral-20
    pointer-events-none
  `,

  outline: `
    font-Montserrat
    font-semibold
    text-black
    bg-contrast-50
    hover:bg-contrast-60
    active:bg-contrast-70

    disabled:text-neutral-40
    disabled:bg-neutral-20
    disabled:opacity-100
  `,
};

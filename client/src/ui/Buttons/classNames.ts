export const classNames = {
  default: `
    font-Montserrat
    font-semibold
    !text-black
    bg-primary-100
    hover:bg-primary-90
    active:bg-primary-30

    disabled:text-disabled-100
    disabled:bg-disabled-90
  `,
  disabledDefault: `
    !text-disabled-100
    !bg-disabled-90
  `,

  secondary: `
    font-Montserrat
    font-semibold
    text-black
    bg-[transparent]
    border-primary-100
    border-2
    hover:bg-primary-40
    active:bg-primary-80

    disabled:border-disabled-90
    disabled:text-disabled-100
    disabled:opacity-100
  `,
  disabledSecondary: `
    border-disabled-90
    text-disabled-90
  `,

  outline: `
    font-Montserrat
    font-semibold
    text-black
    bg-primary-50
    hover:bg-primary-60
    active:bg-primary-70

    disabled:text-disabled-100
    disabled:bg-disabled-90
    disabled:opacity-100
  `,
};

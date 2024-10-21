import { FC } from 'react';
import {
  Create,
  TabbedForm, // TextInput,
  // required,
} from 'react-admin';

export const CategoryCreate: FC = () => {
  return (
    <Create>
      <TabbedForm>
        <TabbedForm.Tab label="RU"></TabbedForm.Tab>

        <TabbedForm.Tab label="UK"></TabbedForm.Tab>
      </TabbedForm>
    </Create>
  );
};

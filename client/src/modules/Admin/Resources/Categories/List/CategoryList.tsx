import { FC } from 'react';
import {
  CreateButton,
  Datagrid,
  EditButton,
  FilterButton,
  List,
  SearchInput,
  TextField,
  TextInput,
  TopToolbar,
} from 'react-admin';

export const CategoryList: FC = () => {
  return (
    <List
      title="Categories"
      filters={[
        <SearchInput source="q" key={1} />,
        <TextInput label="Title" source="title" key={2} />,
      ]}
      actions={
        <TopToolbar>
          <FilterButton />
          <CreateButton />
        </TopToolbar>
      }
    >
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />

        <EditButton />
      </Datagrid>
    </List>
  );
};

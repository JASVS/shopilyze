import { FC } from 'react';
import {
  CreateButton,
  Datagrid,
  EditButton,
  FilterButton,
  ImageField,
  List,
  SearchInput,
  ShowButton,
  TextField,
  TextInput,
  TopToolbar,
} from 'react-admin';

export const ProductList: FC = () => {
  return (
    <List
      title="Products"
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
        <TextField source="title" />
        <ImageField source="titlePictureUrl" />
        <TextField source="category.name" />
        <TextField source="price" />

        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

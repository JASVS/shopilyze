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
        <TextField source="productCode" label="Код товара" />
        <TextField source="title.ru" label="Название" />
        <ImageField source="pictureUrl" />
        <TextField source="category.name" label="Категория" />
        <TextField source="price" label="Цена" />

        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};

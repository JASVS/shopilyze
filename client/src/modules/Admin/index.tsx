'use client';

import { Admin, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
} from '@/modules/Admin/Resources/Categories';
import {
  ProductCreate,
  ProductEdit,
  ProductList,
} from '@/modules/Admin/Resources/Product';

import i18nProvider from './Providers/i18n';

const dataProvider = jsonServerProvider(process.env.NEXT_PUBLIC_CLIENT_HOST);

const AdminApp = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource
      name="product"
      hasCreate
      hasEdit
      hasShow
      create={<ProductCreate />}
      edit={<ProductEdit />}
      list={<ProductList />}
      // show={() => <div>Show</div>}
    />

    <Resource
      name="category"
      hasCreate
      hasEdit
      hasShow
      create={<CategoryCreate />}
      edit={<CategoryEdit />}
      list={<CategoryList />}
      // show={() => <div>Show</div>}
    />
  </Admin>
);

export default AdminApp;

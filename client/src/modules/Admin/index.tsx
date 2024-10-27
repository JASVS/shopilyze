'use client';

import { useEffect, useState } from 'react';
import { Admin, DataProvider, Resource } from 'react-admin';

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
import { buildDataProvider } from '@/modules/Admin/utils/BuildDataProvider';

import i18nProvider from './Providers/i18n';

const AdminApp = () => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);

  useEffect(() => {
    buildDataProvider().then((provider) => setDataProvider(provider));
  }, []);

  if (!dataProvider) {
    return <div>Loading...</div>;
  }

  return (
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
};

export default AdminApp;

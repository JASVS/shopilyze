'use client';

import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import i18nProvider from './Providers/i18n';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const AdminApp = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="name"
    />
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      recordRepresentation="title"
    />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default AdminApp;

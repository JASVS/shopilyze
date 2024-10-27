/* eslint-disable indent */
import { combineDataProviders } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';

import { productApi } from '../Resources/Product/api/ProductApi';

export const buildDataProvider = async () => {
  const restDataProvider = jsonServerProvider(
    process.env.NEXT_PUBLIC_CLIENT_HOST,
  );

  const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
      case 'product':
      case 'product/new': {
        return productApi;
      }

      default: {
        return restDataProvider;
      }
    }
  });

  return dataProvider;
};

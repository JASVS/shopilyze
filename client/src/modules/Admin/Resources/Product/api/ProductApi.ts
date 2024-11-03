import {
  CreateParams,
  DataProvider, // UpdateParams,
  fetchUtils,
} from 'react-admin';

import simpleRestDataProvider from 'ra-data-simple-rest';

const endpoint = process.env.NEXT_PUBLIC_CLIENT_HOST as string;
const baseDataProvider = simpleRestDataProvider(endpoint);

type PostParams = {
  ruTitle: string;
  ukrTitle: string;
  ruDescription: string;
  ukrDescription: string;
  category: string;
  productCode: string;
  price: number;
  seoURL: string;
  picture: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createPostFormData = (params: CreateParams<PostParams>) => {
  const productToCreate = {
    picture: params.data.picture!.rawFile,
    rutitle: params.data.ruTitle,
    ukrTitle: params.data.ukrTitle,
    ruDescription: params.data.ruDescription,
    ukrDescription: params.data.ukrDescription,
    category: params.data.category,
    price: params.data.price,
    seoURL: params.data.seoURL,
    productCode: params.data.productCode,
  };

  const formData = new FormData();

  Object.entries(productToCreate).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  return formData;
};

export const productApi: DataProvider = {
  ...baseDataProvider,
  getList: async (resource) => {
    const { json, headers } = await fetchUtils.fetchJson(
      `${endpoint}/${resource}`,
    );

    return {
      data: json,
      total: parseInt(headers.get('x-total-count') || '', 10),
    };
  },

  create: (resource, params) => {
    if (resource === 'product/new') {
      const formData = createPostFormData(params);

      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: 'POST',
          body: formData,
        })
        .then(({ json }) => ({ data: json }));
    }

    return baseDataProvider.create(resource, params);
  },
};

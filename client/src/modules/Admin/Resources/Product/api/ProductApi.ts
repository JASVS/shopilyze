import {
  CreateParams,
  DataProvider, // UpdateParams,
  fetchUtils,
} from 'react-admin';

import simpleRestDataProvider from 'ra-data-simple-rest';

const endpoint = process.env.NEXT_PUBLIC_CLIENT_HOST as string;
const baseDataProvider = simpleRestDataProvider(endpoint);

type PostParams = {
  RuTitle: string;
  UkrTitle: string;
  RuDescription: string;
  UkrDescription: string;
  category: string;
  productCode: string;
  price: number;
  seoUrl: string;
  pictures: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};

const createPostFormData = (params: CreateParams<PostParams>) => {
  const productToCreate = {
    Picture: params.data.pictures!.rawFile,
    Rutitle: params.data.RuTitle,
    UkrTitle: params.data.UkrTitle,
    RuDescription: params.data.RuDescription,
    UkrDescription: params.data.UkrDescription,
    Category: params.data.category,
    Price: params.data.price,
    SeoUrl: params.data.seoUrl,
  };

  const formData = new FormData();

  Object.entries(productToCreate).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  console.log(formData);

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

  // update: (resource, params) => {
  //   if (resource === 'product') {
  //     const formData = createPostFormData(params);
  //     formData.append('id', params.id);
  //     return fetchUtils
  //       .fetchJson(`${endpoint}/${resource}`, {
  //         method: 'PUT',
  //         body: formData,
  //       })
  //       .then(({ json }) => ({ data: json }));
  //   }

  //   return baseDataProvider.update(resource, params);
  // },
};

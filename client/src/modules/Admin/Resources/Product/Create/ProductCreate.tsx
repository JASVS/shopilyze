import { FC } from 'react';
import {
  AutocompleteInput,
  Create,
  ImageField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TabbedForm,
  TextInput,
  required,
  useCreate,
} from 'react-admin';

import { RichTextInput } from 'ra-input-rich-text';

export const ProductCreate: FC = () => {
  const [create] = useCreate();

  return (
    <Create
      mutationOptions={{
        mutationFn: async ({ data }) => create('product/new', { data }),
      }}
    >
      <TabbedForm>
        <TabbedForm.Tab label="RU">
          <TextInput
            label="Название"
            source="RuTitle"
            validate={[required()]}
          />
          <RichTextInput
            label="Описание"
            source="RuDescription"
            fullWidth
            validate={[required()]}
          />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="UK">
          <TextInput label="Назва" source="UkrTitle" validate={[required()]} />
          <RichTextInput
            label="Опис"
            source="UkrDescription"
            fullWidth
            validate={[required()]}
          />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Общая информация">
          <ReferenceInput source="category" reference="category">
            <AutocompleteInput
              label="Категория"
              validate={[required()]}
              optionValue="name"
            />
          </ReferenceInput>

          {/* <ReferenceInput source="brand" reference="category">
            <AutocompleteInput label="Бренд" validate={[required()]} />
          </ReferenceInput> */}

          <TextInput
            label="Код товара"
            source="productCode"
            validate={[required()]}
          />

          <NumberInput label="Цена" source="price" validate={[required()]} />

          <TextInput label="SEO URL" source="seoURL" validate={[required()]} />
        </TabbedForm.Tab>

        <TabbedForm.Tab label="Изображения">
          <ImageInput
            source="pictures"
            label="Главное"
            accept={{ 'image/*': ['.jpg'] }}
            maxSize={300000}
            validate={[required()]}
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </TabbedForm.Tab>
      </TabbedForm>
    </Create>
  );
};

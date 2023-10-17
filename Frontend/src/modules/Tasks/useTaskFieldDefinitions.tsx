import { useMemo } from 'react';

export type CommonFieldName = 'subject' | 'description' | 'notes';
export type BusinessFieldName =
  | 'importance'
  | 'state'
  | 'author'
  | 'modifiedBy';

type FieldDefinition = {
  name: CommonFieldName | BusinessFieldName;
  labelKey: string;
  type: 'select' | 'input' | 'textarea';
  options?: string[];
  initialValue: string;
  order: number;
};

//Used in Form and Table
export const useTaskFieldDefinitions = () => {
  const commonFieldsDefinition: FieldDefinition[] = useMemo(
    () => [
      {
        name: 'subject',
        labelKey: 'Items.Subject',
        type: 'input',
        initialValue: '',
        order: 1,
      },
      {
        name: 'description',
        labelKey: 'Items.Description',
        type: 'textarea',
        initialValue: '',
        order: 2,
      },
      {
        name: 'notes',
        labelKey: 'Items.Notes',
        type: 'input',
        initialValue: '',
        order: 3,
      },
    ],
    []
  );

  const businessFieldsDefinition = useMemo(
    () => [
      {
        name: 'importance',
        labelKey: 'Items.Importance',
        type: 'select',
        options: ['Option1', 'Option2'],
        initialValue: '',
        order: 1,
      },
      {
        name: 'state',
        labelKey: 'Items.State',
        type: 'select',
        options: ['Option1', 'Option2'],
        initialValue: '',
        order: 2,
      },
      {
        name: 'author',
        labelKey: 'Items.Author',
        type: 'input',
        initialValue: '',
        order: 3,
      },
      {
        name: 'modifiedBy',
        labelKey: 'Items.ModifiedBy',
        type: 'input',
        initialValue: '',
        order: 4,
      },
    ],
    []
  );
  const personalFieldsDefinition = useMemo(() => [], []);

  commonFieldsDefinition.sort((a, b) => a.order - b.order);
  businessFieldsDefinition.sort((a, b) => a.order - b.order);

  return {
    commonFieldsDefinition,
    businessFieldsDefinition,
    personalFieldsDefinition,
  };
};

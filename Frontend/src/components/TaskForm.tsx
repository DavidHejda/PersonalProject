import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  FormLabel,
  Input,
  Textarea,
  Select,
  useTheme,
} from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';

import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import { useTranslation } from 'react-i18next';
import SectionBox from './SectionBox';

export const TaskForm = () => {
  const [date, setDate] = useState(new Date());

  const theme = useTheme();
  const formLabelMargin = { mt: 2, mb: 0 };
  const { t, i18n } = useTranslation('Tasks');

  //Custom validate function - created in order that error messages are translated when the language change
  const validate = (values: any) => {
    const errors: any = {};

    if (!values.subject) {
      errors.subject = t('Errors:Required');
    } else if (values.subject.length < 5) {
      errors.subject = t('Errors:MinLength', {
        charCount: 5,
        name: t('Items.Subject'),
      });
    }

    if (values.description && values.description.length > 200) {
      errors.description = t('Errors:MaxLength', {
        charCount: 200,
        name: t('Items.Description'),
      });
    }

    if (!values.deadline) {
      errors.deadline = t('Errors:Required');
    }

    if (!values.importance) {
      errors.importance = t('Errors:Required');
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      subject: '',
      description: '',
      deadline: new Date(),
      importance: '',
      assignee: '',
      state: '',
      notes: '',
    },
    validate,
    onSubmit: async (values) => {
      // Handle GraphQL mutation here using Apollo Client
    },
  });

  //Is used for changing error messages when language is change
  useEffect(() => {
    const handleLanguageChange = () => {
      formik.validateForm();
    };

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      // Cleanup listener when the component unmounts
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [formik, i18n]);

  return (
    <Box as="form" onSubmit={formik.handleSubmit} width="400px" mx="auto">
      <FormLabel sx={formLabelMargin}>{t('Items.Subject')}</FormLabel>
      <Input
        name="subject"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
        isInvalid={!!(formik.touched.subject && formik.errors.subject)}
      />
      {formik.touched.subject && formik.errors.subject && (
        <Box color={theme.colors.red[500]} textAlign="left">
          {formik.errors.subject}
        </Box>
      )}

      <FormLabel sx={formLabelMargin}>{t('Items.Description')}</FormLabel>
      <Textarea
        name="description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
        isInvalid={!!(formik.touched.description && formik.errors.description)}
      />

      {/* Very difficult and confusing for just styling one datePicker. But chakra-ui does not have date-picker so it had to go this way */}
      <FormLabel sx={formLabelMargin}>{t('Items.Deadline')}</FormLabel>
      <SingleDatepicker
        name="date-input"
        date={date}
        onDateChange={setDate}
        configs={{ dateFormat: 'dd.MM.yyyy' }}
      />

      <FormLabel sx={formLabelMargin}>{t('Items.Importance')}</FormLabel>
      <Select
        name="importance"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.importance}
        isInvalid={!!(formik.touched.importance && formik.errors.importance)}
      >
        <option value="">{t('SelectImportance')}</option>
        {/* ... other options ... */}
      </Select>
      {formik.touched.importance && formik.errors.importance && (
        <Box color={theme.colors.red[500]} textAlign="left">
          {formik.errors.importance}
        </Box>
      )}

      <FormLabel sx={formLabelMargin}>{t('Items.Assignee')}</FormLabel>
      <Select
        name="assignee"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.assignee}
        // isInvalid={!!(formik.touched.importance && formik.errors.importance)}
      >
        <option value="">{t('SelectAssignee')}</option>
      </Select>

      <FormLabel sx={formLabelMargin}>{t('Items.State')}</FormLabel>
      <Select
        name="state"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.state}
        isInvalid={!!(formik.touched.state && formik.errors.state)}
      >
        <option value="">{t('SelectState')}</option>
      </Select>

      <FormLabel sx={formLabelMargin}>{t('Items.Notes')}</FormLabel>
      <Input
        name="notes"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.subject}
      />

      <Button type="submit" mt="4">
        {t('General:Submit')}
      </Button>
    </Box>
  );
};

import React from 'react';

//importamos nuestros componentes de formik
import { Formik, Field, ErrorMessage, withFormik } from 'formik';

//importamos connect desde react-redux
import { connect } from 'react-redux';

import { FormStream, RowForm, Error, Btn } from './styleComponents';

const StreamForm = ({ onSubmit, type = '', stream = {}, ...props }) => {
  console.log(onSubmit);
  return (
    <Formik
      //aca armamos un objeto con los name de nuestros valores y podemos inicializarlos
      initialValues={
        {
          title: stream.title ? stream.title : '',
          description: stream.description ? stream.description : '',
        }

        // Object.entries(initialValues).length === 0
        //   ? { title: '', description: '' }
        //   : initialValues
      }
      //dentro de onSubmit podemos recibir la data, el setSubmitting, resetForm
      //el setSubmitting basicamente es un valor booleano, donde se vuelve false

      validate={values => {
        let errors = {};
        if (!values.title) errors.title = 'Debes ingresar un Titulo';

        if (!values.description)
          errors.description = 'Debes ingresar una descripción';

        return errors;
      }}
      //el onSubmit por default recibe los values(un objeto con la data) y
      // puede recibir mas funciones como setSubmitting(cambia a true o false cuando se hace el Submit)
      //
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        if (type === 'edit') onSubmit(stream.id, values);
        else onSubmit(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ values, isSubmitting, handleSubmit }) => (
        <FormStream onSubmit={handleSubmit}>
          <RowForm>
            <label htmlFor='title'>Titulo del Stream:</label>
            <Field
              name='title'
              type='input'
              value={values.title}
              placeholder='Escribe un titulo...'
            />
            <ErrorMessage name='title' component={Error} />
          </RowForm>
          <RowForm>
            <label htmlFor='description'>Descripción del Stream:</label>
            <Field
              name='description'
              type='input'
              value={values.description}
              placeholder='Escribe una descripción...'
            />
            <ErrorMessage name='description' component={Error} />
          </RowForm>

          <Btn type='submit' disabled={isSubmitting}>
            {Object.entries(stream).length === 0
              ? 'Crear Stream'
              : 'Actualizar Stream'}
          </Btn>
        </FormStream>
      )}
    </Formik>
  );
};

const mapState = state => {
  return { userId: state.auth.userid };
};

export default connect(mapState)(StreamForm);

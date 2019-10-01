import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactForm.css";

function ContactForm() {
  return (
    <Formik
      initialValues={{ email: "", name: "" }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Champ obligatoire";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Adresse e-mail invalide";
        }
        if (!values.name) {
          errors.name = "Champ obligatoire";
        }
        if (!values.message) {
          errors.message = "Champ obligatoire";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="contact-form-container">
          <h1 className="contact-form-title">
            Contactez <span>Nous</span>
          </h1>
          
          <div className="field-container">
            <Field className="field" name="name" placeholder="Nom et Prenom"/>
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="name" component="div" />

          <div className="field-container">
            <Field className="field" name="email"  placeholder="Email"/>
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="email" component="div" />
          
          <div className="field-container">
            <Field component="textarea" rows="6" className="field" name="message"  placeholder="Votre message"/>
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="message" component="div" />
          
          <div>
            <button className="contact-form-btn" type="submit" disabled={isSubmitting}>
              ENVOYER
            </button>
          </div>

        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
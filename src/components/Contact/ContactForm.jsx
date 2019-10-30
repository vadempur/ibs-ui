import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactForm.css";
import { BASE_URL } from "../../helpers/constants";

function ContactForm() {

  async function handleSubmit(values, { setSubmitting }) {
    try {
      const formData = new FormData();
      Object.keys(values).forEach( key=>{
        formData.append(key,values[key]);
      });
      // console.log(formData)
      const res = await fetch(BASE_URL+"/contact.php",{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          "Content-Type": 'application/json',
        },
        body: formData
      });
      console.log(res);
      setSubmitting(false);     
    } catch (error) {
      setSubmitting(false);      
    }

  }

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
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="contact-form-container">
          <h1 className="contact-form-title">
            Contactez <span>Nous</span>
          </h1>
          
          <div className="field-container">
            <Field className="field" name="name" placeholder="Nom et Prenom" type="text"/>
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="name" component="div" />

          <div className="field-container">
            <Field className="field" name="email"  placeholder="Email" type="email" />
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="email" component="div" />
          
          <div className="field-container">
            <Field component="textarea" rows="6" className="field" name="message"  placeholder="Votre message" type="text"/>
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="message" component="div" />
          
          <div>
            {isSubmitting && <p>...</p>}
            <button className="contact-form-btn" type="submit" disabled={isSubmitting}  >
              ENVOYER
            </button>
          </div>

        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactForm.css";
import ReCAPTCHA from "react-google-recaptcha";
import { BASE_URL, RECAPTCHA_SITE_KEY } from "../../helpers/constants";

function ContactForm() {
  async function handleSubmit(values, { setSubmitting }) {
    try {
      const formData = new FormData();
      Object.keys(values).forEach(key => {
        formData.append(key + "", values[key] + "");
      });
      // console.log(formData)
      await fetch(BASE_URL + "/contact.php", {
        method: "POST",
        headers: {
          // Accept: 'application/json',
          // "Content-Type": 'application/json',
        },
        body: formData
      });
      // const data = await res.json();
      alert("Email envoyé avec succes, Merci pour votre prise de contact");
      setSubmitting(false);
    } catch (error) {
      alert("Oups... une erreur est survenue");
      setSubmitting(false);
    }
  }

  function recaptchaChange(e){

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
            <Field className="field" name="name" placeholder="Nom et Prenom" type="text" />
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="name" component="div" />

          <div className="field-container">
            <Field className="field" name="email" placeholder="Email" type="email" />
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="email" component="div" />

          <div className="field-container">
            <Field
              component="textarea"
              rows="6"
              className="field"
              name="message"
              placeholder="Votre message"
              type="text"
            />
            <span className="animated-line" />
          </div>
          <ErrorMessage className="error-msg" name="message" component="div" />
          <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={recaptchaChange} />
          <div>
            <button className="contact-form-btn" type="submit" disabled={isSubmitting}>
              <div> {isSubmitting && <span>loading</span>} ENVOYER</div>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;

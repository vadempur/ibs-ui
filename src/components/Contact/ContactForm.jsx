import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./ContactForm.css";
import ReCAPTCHA from "react-google-recaptcha";
import { BASE_URL, RECAPTCHA_SITE_KEY } from "../../helpers/constants";
import loader from "../../assets/loader.svg";
import { toast } from "react-toastify";

function ContactForm() {
  async function handleSubmit(values, { setSubmitting }) {
    try {
      const formData = new FormData();
      Object.keys(values).forEach(key => {
        formData.append(key + "", values[key] + "");
      });

      await fetch(BASE_URL + "/contact.php", {
        method: "POST",
        headers: {
          // Accept: 'application/json',
          // "Content-Type": 'application/json',
        },
        body: formData
      });

      setSubmitting(false);
      toast("Email envoyé avec succes, Merci pour votre prise de contact", {
        type: "success",
        hideProgressBar: true
      });
    } catch (error) {
      setSubmitting(false);
      toast("Oups... une erreur est survenue", {
        type: "error",
        hideProgressBar: true
      });
    }
  }

  return (
    <Formik
      initialValues={{ email: "", name: "", message: "", recaptcha: "" }}
      validationSchema={yup.object().shape({
        name: yup.string().required("Veillez entrer votre nom et prenom"),
        email: yup
          .string()
          .email("Adresse e-mail invalide")
          .required("Veillez entrer votre email"),
        message: yup.string().required("Veuillez écrire un message"),
        recaptcha: yup.string().required("Veuillez valider que vous etes pas un robot")
      })}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="contact-form-container">
          
          <h1 className="contact-form-title">
            Contactez <span>Nous</span>
          </h1>

          <div className="field-container">
            <Field className="field" name="name" placeholder="Nom et Prenom" type="text" spellcheck="false" />
            <div className="border" />
            <ErrorMessage className="error-msg" name="name" component="div" />
          </div>

          <div className="field-container">
            <Field className="field" name="email" placeholder="Email" type="email" spellcheck="false" />
            <div className="border" />
            <ErrorMessage className="error-msg" name="email" component="div" />
          </div>

          <div className="field-container">
            <Field
              component="textarea"
              rows="6"
              className="field"
              name="message"
              placeholder="Votre message"
              type="text"
              spellcheck="false"
            />
            <div className="border" />
            <ErrorMessage className="error-msg" name="message" component="div" />
          </div>

          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={e => {
              setFieldValue("recaptcha", e);
            }}
            theme="light"
          />

          <div>
            <button className="contact-form-btn" type="submit" disabled={isSubmitting}>
              <div>
                {" "}
                {isSubmitting && <img width="50px" src={loader} alt="loader" style={{ marginInlineStart: -20 }} />}
                ENVOYER
              </div>
            </button>
          </div>
          
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;

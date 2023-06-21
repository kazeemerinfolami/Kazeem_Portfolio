import React from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import myImage from "../../assets/images/IMG_4278.jpeg";

import {
  ContactPageStyles,
  StyledErrorMessage,
  SubmitButton,
} from "./ContactStyles";
import Baselayout from "../../components/Baselayout";

function ContactPage() {
  const initialValues = {
    Name: "",
    EmailAddress: "",
    message: "",
    InvitaionCode: "",
  };
  const validationSchema = Yup.object({
    Name: Yup.string().required("Name  is required"),
    EmailAddress: Yup.string()
      .required("Email Address  is required")
      .email("Enter a valid email"),
    message: Yup.string().required("Message  is required"),
  });

  return (
    <Baselayout showNoMedia="no">
      <ContactPageStyles>
        <main>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, values }) => (
              <section>
                <h1>
                  Welcome to Kazeem's contact page. Your information is safe.
                  Get in touch with Kazeem today
                </h1>
                <aside>
                  <p>
                    <img src={myImage} alt="myImage" />
                  </p>
                  <div>
                    <label htmlFor="Name">Business Name*</label>
                    <Field type="text" name="Name" id="Name" />
                    <StyledErrorMessage name="Name" component="div" />
                  </div>
                  <div>
                    <label htmlFor="EmailAddress">
                      Business Email Address*
                    </label>
                    <Field type="text" name="EmailAddress" id="EmailAddress" />
                    <StyledErrorMessage name="EmailAddress" component="div" />
                  </div>
                  <div>
                    <label htmlFor="message">Message*</label>
                    <Field
                      style={{
                        width: "100%",
                        padding: "10px",
                        border: "3px solid #c6c6c6",
                        outlineColor: "rgba(0, 0, 0, 0.2)",
                      }}
                      as="textarea"
                      id="message"
                      name="message"
                      rows={4}
                    />
                    <StyledErrorMessage name="message" component="div" />
                  </div>
                  <SubmitButton
                    type="submit"
                    disabled={
                      !values.Name ||
                      !values.EmailAddress ||
                      !values.message ||
                      isSubmitting
                    }
                    onClick={() => console.log("yes")}
                  >
                    Send to Kazeem
                  </SubmitButton>
                </aside>
              </section>
            )}
          </Formik>
        </main>
      </ContactPageStyles>
    </Baselayout>
  );
}

export default ContactPage;

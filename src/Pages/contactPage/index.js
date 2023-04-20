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
    businessName: "",
    businessPhone: "",
    businessEmailAddress: "",
    InvitaionCode: "",
  };
  const validationSchema = Yup.object({
    businessName: Yup.string().required("Business Name  is required"),
    businessPhone: Yup.string().required("Business Phone  is required"),
    businessEmailAddress: Yup.string().required(
      "Business Email Address  is required"
    ),
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
                    <label htmlFor="businessName">Business Name*</label>
                    <Field type="text" name="businessName" />
                    <StyledErrorMessage name="businessName" component="div" />
                  </div>
                  <div>
                    <label htmlFor="businessPhone">Business Phone*</label>
                    <Field type="phone" name="businessPhone" />
                    <StyledErrorMessage name="businessPhone" component="div" />
                  </div>
                  <div>
                    <label htmlFor="businessEmailAddress">
                      Business Email Address*
                    </label>
                    <Field type="text" name="businessEmailAddress" />
                    <StyledErrorMessage
                      name="businessEmailAddress"
                      component="div"
                    />
                  </div>
                  <SubmitButton
                    type="submit"
                    disabled={
                      !values.businessName ||
                      !values.businessPhone ||
                      !values.businessEmailAddress ||
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

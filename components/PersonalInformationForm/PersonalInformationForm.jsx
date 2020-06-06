import styles from './PersonalInformation.module.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  farmer: yup.string(),
  terms: yup.string().required(),
});

const PersonalInformation = ({ handleSubmit }) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{}}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik01">
                <Form.Label>Vorname</Form.Label>
                <Form.Control
                  type="text"
                  placholder="Vorname"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  Bitte Vornamen angeben
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="validationFormik02">
                <Form.Label>Nachname</Form.Label>
                <Form.Control
                  type="text"
                  placholder="Nachname"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  Bitte Nachnamen angeben
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="validationFormik03">
                <Form.Label>Adresse</Form.Label>
                <Form.Control
                  type="text"
                  placholder="Adresse"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  Bitte Adresse angeben
                    </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationFormik04">
                <Form.Label>Ortschaft</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ort"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid">
                  Bitte den Ort angeben
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>Budesland</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Bundesland"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state}
                />
                <Form.Control.Feedback type="invalid">
                  Bitte das Bundesland auswählen
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik06">
                <Form.Label>Postleitzahl</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="PLZ"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid">
                  Bitte das Bundesland angeben
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                id="validationFormik00"
                label="Verkäufer"
                name="farmer"
                onChange={handleChange}
                isInvalid={!!errors.type}
                value={values.farmer}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                required
                name="terms"
                label="Ich habe die Geschäftbedingungen gelesen und akzeptiere sie"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback="Bitte bestätigen Sie die Geschäftsbedingungen"
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">Bestätigen</Button>
          </Form>
        )}
    </Formik>
  );
}




export default PersonalInformation;

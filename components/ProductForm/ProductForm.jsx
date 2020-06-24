import styles from './ProductForm.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string(),
  amount: yup.number().moreThan(0, "Mindestens 1 Stück sollte verkauft werden können").required(),
  size: yup.number().moreThan(0).required(),
  unit: yup.string().required()
});

export const ProductForm = ({ handleSubmit }) => {
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
            <Form.Group controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text"
                placeholder="Bezeichnung des Artikels"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={!!errors.name} />
              <Form.Control.Feedback type="invalid">
                Bitte einen Namen eingeben
            </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik02">
              <Form.Label>Beschreibung</Form.Label>
              <Form.Control type="text"
                placeholder="Beschreibung"
                name="description"
                value={values.description}
                onChange={handleChange}
                isInvalid={!!errors.description} />
              <Form.Control.Feedback type="invalid">
                Bitte eine Beschreibung eingeben
                        </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationFormik03">
              <Form.Label>Anzahl</Form.Label>
              <Form.Control type="number"
                placeholder="Anzahl des Artikels"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                isInvalid={!!errors.amount} />
              <Form.Control.Feedback type="invalid">
                Bitte eine Anzahl eingeben
                        </Form.Control.Feedback>
            </Form.Group>
            <Form.Row>
              <Form.Group controlId="validationFormik04">
                <Form.Label>Größe</Form.Label>
                <Form.Control type="number"
                  name="size"
                  value={values.size}
                  onChange={handleChange}
                  isInvalid={!!errors.size} />
                <Form.Control.Feedback type="invalid">
                  Bitte eine Größe eingeben
                        </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationFormik05">
                <Form.Label>Einheit</Form.Label>
                <Form.Control type="text"
                  name="unit"
                  value={values.unit}
                  onChange={handleChange}
                  isInvalid={!!errors.unit} />
                <Form.Control.Feedback type="invalid">
                  Bitte eine Einheit angeben
                        </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Bestätigen</Button>
          </Form>
        )}
    </Formik>
  );
}


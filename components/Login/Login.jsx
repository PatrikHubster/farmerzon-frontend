import styles from './Login.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    userName: yup.string().required(),
    password: yup.string().required()
})

export const LoginForm = ({ handleSubmit }) => {
    return (
        <Formik validationSchema={schema}
            onSubmit={handleSubmit}
            initialValues={{}}>
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="validationFormik01">
                        <Form.Label>Benutzername</Form.Label>
                        <Form.Control type="text" 
                            placeholder="Benutzername" 
                            name="userName"
                            value={values.userName}
                            onChange={handleChange}
                            isValid={!!errors.userName} />
                        <Form.Control.Feedback type="invalid">
                            Bitte Benutzernamen angeben
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="validationFormik02">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                            placeholder="Passwort"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={!!errors.password} />
                        <Form.Control.Feedback type="invalid">
                            Bitte Passwort angeben
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}
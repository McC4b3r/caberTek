import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  message: Yup.string().required("Required")
})
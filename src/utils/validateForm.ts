import * as yup from "yup";

export const LoginValidate = yup.object().shape({
    username: yup.string().email().trim().required("El username es requerido"),
    password: yup.string().min(6).trim().required("El password es requerido"),
});

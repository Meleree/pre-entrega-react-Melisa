import { object, string, number } from "yup";

let userSchema = object({
  fullname: string().min(3, "EL NOMBRE DEBE TENER 3 LETRAS COMO MININO").required("EL CAMPO NOMBRE ES REQUERIDO") ,
  phone: number().min(10).max(14).required(),
  email: string().email().required(),
  dni: number().positive().required()
})

const validateForm = async(dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success", message: "VALIDACIONES CORRECTAS!" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm;
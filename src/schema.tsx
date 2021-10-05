import * as Yup from 'yup';

export default Yup.object().shape({
    Assunto: Yup.string().required(),
    Name: Yup.string().min(8).required(),
    Email: Yup.string().email().required(),
    Message: Yup.string().min(8).max(1000),

})

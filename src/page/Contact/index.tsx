import { Formik, Field, Form, ErrorMessage} from "formik";
import { Footer } from "../../Components/Footer";
import { Menu } from "../../Components/Menu";
import { useSmart } from "../../context/SmartContext";

import emailjs from 'emailjs-com';
import Styles from './style.module.scss';
import schema from '../../schema'


interface FormModule {
    Assunto: string,
    Name: string,
    Email: string,
    Message: string,
}

export function Contact(){

    const{navBackground, setColorSolid} = useSmart()

    setColorSolid()

    const sendEmail = (e:any) => {
        console.log(e)
        emailjs.send('service_j8x5iwk', 'template_iup1hkp', e, 'user_OEb8CM0S2Ev2NKChLp5Hz')
          .then((result) => {
              console.log('Acerto');
              console.log(result.text);
          }, (error) => {
              console.log('error');
              console.log(error.text);
          });
      };
    return (
    <>
        <Menu
            backgroundColor = { navBackground}
        />

        <main className={Styles.container}>
            <h1>Como podemos ajuda-lo ?</h1>
            <p>Você tem alguma duvida ou está interessado no nosso trabalho?</p>
            <p>Preencha o formulario abaixo que entraremos em contato.</p>
            <div className={Styles.containerForm}>
                <Formik<FormModule>
                    validationSchema={schema}

                    initialValues={{
                        Assunto: "",
                        Name: "",
                        Email: "",
                        Message: "",
                    }}
                    onSubmit={(values, action)=>{
                        setTimeout(()=>{
                            sendEmail(values)
                            action.setSubmitting(false)
                        }, 1000)
                        action.resetForm()
                    }} 
                >
                    {()=>(
                        <Form>
                            <div>
                                <Field as="select" name="Assunto" aria-label="Teste"  aria-required="true" area-invalid="false">
                                    <option value="" selected disabled hidden>Quero falar sobre...</option>
                                    <option value=""> </option>
                                    <option value="feedBack">FeedBack e susgestão</option>
                                    <option value="guidance">Necessito de orientação</option>
                                    <option value="Serviços"> Solicitação de serviços</option>
                                </Field>
                                <ErrorMessage name="Assunto">{msg => <span>{msg}</span>}</ErrorMessage>
                            </div>
                            
                            <div className={Styles.handleUser}>
                                <div>
                                    <Field type="text" name="Name" placeholder="Nome"/>
                                    <ErrorMessage name="Name">{msg => <span>{msg}</span>}</ErrorMessage>
                                </div>
                                <div>
                                    <Field type="email" name= "Email" placeholder="E-mail"/>
                                    <ErrorMessage name="Email">{msg => <span>{msg}</span>}</ErrorMessage>
                                </div>
                                <div>
                                    <Field as="textarea" name="Message" ></Field>
                                    <ErrorMessage name="Message">{msg => <span>{msg}</span>}</ErrorMessage>
                                </div>
                            </div>
                            <button type="submit">Enviar</button>
                        </Form>
                    )}
                
                </Formik>
            </div>
            <div className={Styles.containerSocial}>
                <h2>Redes Sociais</h2>
                <ul>
                    <li><a href="**"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="**"><i className="fab fa-facebook-square"></i></a></li>
                    <li><a href="**"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="**"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </main>

        <Footer/>
    </>
    )
}
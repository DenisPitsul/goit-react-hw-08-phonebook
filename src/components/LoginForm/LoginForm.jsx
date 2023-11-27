import classes from './LoginForm.module.css'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { logIn } from 'redux/auth/operations'

const LoginForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (values) => {
        dispatch(logIn({
            email: values.email,
            password: values.password
        }))
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={(values, actions) => {
                handleSubmit(values);
                actions.resetForm();
            }}
        >
            <Form className={classes.form}>
                <div className={classes.formFiled}>
                    <label className={classes.formLabel} htmlFor='email'>Email</label>
                    <Field 
                        className={classes.formInput} 
                        type="email" 
                        name='email' 
                        id='email' 
                        placeholder='email'/>
                </div>
                <div className={classes.formFiled}>
                    <label className={classes.formLabel} htmlFor='password'>Password</label>
                    <Field 
                        className={classes.formInput} 
                        type="password" 
                        name='password' 
                        id='password' 
                        placeholder='password'/>
                </div>
                <div className={classes.formBtnContainer}>
                    <button className={classes.formBtn} type='submit'>Register</button>
                </div>
           </Form>
        </Formik>
    )
}

export default LoginForm;
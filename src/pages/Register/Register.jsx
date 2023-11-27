import RegisterForm from 'components/RegisterForm/RegisterForm';
import classes from './Register.module.css'

const Register = () => {
  return (
    <div className={classes.registerContainer}>
      <h1 className={classes.registerTitle}>Register</h1>
      <RegisterForm />
    </div>
  )
}

export default Register;
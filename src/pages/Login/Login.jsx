import LoginForm from "components/LoginForm/LoginForm";
import classes from "./Login.module.css"

const Login = () => {
  return (
    <div className={classes.loginContainer}>
      <h1 className={classes.loginTitle}>Login</h1>
      <LoginForm />
    </div>
  )
}

export default Login;
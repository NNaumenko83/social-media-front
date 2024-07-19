import css from './Login.module.css'

const Login = () => {
    return (
        <div className={css.login}>
            <div className={css.loginWrapper}>
                <div className={css.loginLeft}>
                    <h3 className={css.loginLogo}>SOCIAL</h3>
                    <span className={css.loginDesc}>
                        Connect with friends and the world around you on Social.
                    </span>
                </div>
                <div className={css.loginRight}>
                    <div className={css.loginBox}>
                        <input placeholder="Email" className={css.loginInput} />
                        <input
                            placeholder="Password"
                            className={css.loginInput}
                        />
                        <button className={css.loginButton}>Log In</button>
                        <span className={css.loginForgot}>
                            Forgot Password?
                        </span>
                        <button className={css.loginRegisterButton}>
                            Create a new account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

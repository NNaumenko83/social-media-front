import css from './Register.module.css'

const Register = () => {
    return (
        <div className={css.register}>
            <div className={css.registerWrapper}>
                <div className={css.registerLeft}>
                    <h3 className={css.registerLogo}>SOCIAL</h3>
                    <span className={css.registerDesc}>
                        Connect with friends and the world around you on Social.
                    </span>
                </div>
                <div className={css.registerRight}>
                    <div className={css.registerBox}>
                        <input
                            placeholder="Username"
                            className={css.registerInput}
                        />
                        <input
                            placeholder="Email"
                            className={css.registerInput}
                        />
                        <input
                            placeholder="Password"
                            className={css.registerInput}
                        />
                        <input
                            placeholder="Password again"
                            className={css.registerInput}
                        />

                        <button className={css.registerButton}>Sign Up</button>
                        <button className={css.registerRegisterButton}>
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

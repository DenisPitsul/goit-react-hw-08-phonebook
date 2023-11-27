import classes from './Home.module.css'

const Home = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>
                Task manager welcome page{' '}
                <span role="img" aria-label="Greeting icon">
                    💁‍♀️
                </span>
            </h1>
        </div>
    )
}

export default Home;
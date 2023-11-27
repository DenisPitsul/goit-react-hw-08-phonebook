import { Audio } from "react-loader-spinner";
import classes from "./LoaderComp.module.css"

const LoaderComp = () => {
    
    return (
        <div className={classes.backdrop}>
            <div className={classes.loader}>
                <Audio
                    height = "80"
                    width = "80"
                    radius = "9"
                    color = 'green'
                    ariaLabel = 'three-dots-loading'     
                    wrapperStyle
                    wrapperClass
                />
            </div>
        </div>
    )
}

export default LoaderComp;
import {FC} from "react"
import ClipLoader from "react-spinners/ClipLoader";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";

const StyledClipLoader: FC<DarkModeProps> = ({isDarkMode}) => {


    return(
        <ClipLoader color = {isDarkMode ? "#FFFFFF" : "#000000"}/>
    )
}

export default StyledClipLoader;
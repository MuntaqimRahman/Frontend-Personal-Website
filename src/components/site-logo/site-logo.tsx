import {FC} from "react";

import SiteLogoLight from "../../assets/Site-Logo-Light.svg";
import SiteLogoDark from "../../assets/Site-Logo-Dark.png";

import { DarkModeProps } from "../styles/LightDarkThemes";

const SiteLogo: FC<DarkModeProps>  = ({isDarkMode}) => {
    return(
        <img width="100%" height="100%" src = {isDarkMode ? SiteLogoDark : SiteLogoLight}/>
    )
}

export default SiteLogo;
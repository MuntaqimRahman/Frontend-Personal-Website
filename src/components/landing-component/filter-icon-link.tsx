import GitIconLight from "../../assets/Git-Lightmode.svg";
import LinkedInIconLight from "../../assets/LinkedIn-Lightmode.svg";
import EmailIconLight from "../../assets/Email-Lightmode.svg";
import GitIconDark from "../../assets/Git-Darkmode.png";
import LinkedInIconDark from "../../assets/LinkedIn-Darkmode.png";
import EmailIconDark from "../../assets/Email-Darkmode.png";

const filterIconArrayByTheme = (isDarkMode: boolean | null) => {
  return [
    {
      icon: isDarkMode ? GitIconDark : GitIconLight,
      link: "https://github.com/MuntaqimRahman",
      width: "25px",
      height: "25px",
      alt: "git-icon"
    },
    {
      icon: isDarkMode ? LinkedInIconDark : LinkedInIconLight,
      link: "https://www.linkedin.com/in/muntaqim-rahman-470a1918b/",
      width: "30px",
      height: "30px",
      alt: "linkedin-icon"
    },
    {
      icon: isDarkMode ? EmailIconDark : EmailIconLight,
      link: "mailto:muntaqim.rahman@uwaterloo.ca",
      width: "48px",
      height: "25px",
      alt: "email-icon"
    },
  ];
};

export default filterIconArrayByTheme;

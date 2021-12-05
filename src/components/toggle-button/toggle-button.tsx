import {FC, useContext} from 'react';
import styled from 'styled-components';
import {DarkModeProps} from '../styles/LightDarkThemes';
import DarkModeContext from '../../contexts/darkmode';

interface ToggleButtonProps{
    onClickHandler: () => void
}


const ButtonContainer = styled.div<DarkModeProps>`
    background: ${({isDarkMode}) => isDarkMode ? "#1f1f1f": "#FFFFFF"};
    border: 2px solid ${({isDarkMode}) => isDarkMode ? "#000000": "#e6e6e6"};
    border-radius: 16px;
    cursor: pointer;
    transition: background linear 0.3s;
    transition: border linear 0.3s;


    @media (min-width: 0px) and (max-width: 910px){
        width: 30px;
        height: 10px;
    }
  
    @media (min-width: 910px) and (max-width: 1537px){   
        width: 50px;
        height: 20px;
    }
  
    @media (min-width: 1537px){
        width: 70px;
        height: 30px;
    }
`

const Button = styled.div<DarkModeProps>`
    background: #FFFFFF;
    border: 2px solid #e6e6e6;
    border-radius: 50%;
    transition: transform linear 0.3s;

    @media (min-width: 0px) and (max-width: 910px){
        width: 10px;
        height: 10px;
        transform: translate(${({isDarkMode}) => isDarkMode ? "20px": "-2px"}, -2px);
    }

    @media (min-width: 910px) and (max-width: 1537px){   
        width: 20px;
        height: 20px;
        transform: translate(${({isDarkMode}) => isDarkMode ? "30px": "-2px"}, -2px);
    }

    @media (min-width: 1537px){
        width: 30px;
        height: 30px;
        transform: translate(${({isDarkMode}) => isDarkMode ? "40px": "-2px"}, -2px);
    }
`



const ToggleButton: FC<ToggleButtonProps> =({onClickHandler}) => {

    const {isDarkMode} = useContext(DarkModeContext);

    return(
        <ButtonContainer isDarkMode={isDarkMode} onClick={onClickHandler}>
            <Button isDarkMode={isDarkMode}/>
        </ButtonContainer>
    );

}

export default ToggleButton;
import React,{FC,useEffect, useState} from 'react';
import useInterval from '../../hooks/useInterval';


interface AnimatedTypingCursorProps{
    fontSize ?: string,
    delay: number | null
}

const AnimatedTypingCursor: FC<AnimatedTypingCursorProps> = ({fontSize,delay}) => {

    const [isShowingCursor, setIsShowingCursor] = useState<boolean>(false);

    useEffect(() => {
        if(delay === null){
            setIsShowingCursor(true);
        }
    },[delay])

    useInterval(() => {
        setIsShowingCursor(!isShowingCursor);
    },delay)

    return(
        <span>
            {isShowingCursor && "|"}
        </span>
    );

}

export default AnimatedTypingCursor;
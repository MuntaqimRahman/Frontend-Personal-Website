//Existing useLocalStorage hooks exist which should be used so we don't reinvent the wheel
//Creating my own as a learning experience for this project

import React,{useEffect, useState} from 'react';

type IReturn <Type> = [
    Type | null,
    React.Dispatch<React.SetStateAction<Type | null>>
]


const useLocalStorage = <Type extends {}>(key: string, initialValue?: Type): IReturn<Type> => {
    const initialFunction = () => {
        try{
            if(!initialValue) return;
            const currentValue = localStorage.getItem(key);
            
            if(!currentValue){
                return initialValue;
            }

            return JSON.parse(currentValue);
        } catch(err){
            console.log(err);
            return initialValue;
        }
    }

    const [localStorageState,setLocalStorageState] = useState<Type | null>(initialFunction);

    useEffect(() => {
        
        if(localStorageState === undefined) return;

        try{
            localStorage.setItem(key,JSON.stringify(localStorageState));
        } catch (err){
            console.log(err)
            return;
        }
    },[localStorageState, key])

    return [localStorageState,setLocalStorageState];    
}

export default useLocalStorage;
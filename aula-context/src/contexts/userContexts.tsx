import { createContext, ReactNode, useState } from "react";



//tipagem
interface UserContextProps{
    nome: string;
    loginName: string;
    save : (user: string) => void;
}

interface Props {
  children: ReactNode;
}

//conexto
export const UserContext = createContext<UserContextProps | undefined >(undefined);


//provider -segurança

export function UserContextProvider({children} : Props){
    const [loginName, setLoginName] = useState<string>('');
    
    const contextValues: UserContextProps = { 
        nome: 'Felipao',
        loginName: loginName,
        save : saveLoginUserToCache,
    };

    function saveLoginUserToCache(user: string){
        console.log(user);
        if (user !== '')
        setLoginName(user);
    
    }


    return (
        <UserContext.Provider value={contextValues}>
            {children}
        </UserContext.Provider>
    )
};
import React, { createContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from "../apis/Firebase";
import {signOut} from "@firebase/auth"
import { getBottomNavigationUtilityClass } from '@mui/material';
export const AuthContext = createContext(null)

 
const ContextApi = ({children}) => {
    let [authUser, setAuthUser] = useState('')
  let [isLoading, isSetLoading] = useState(false)
  
    // let Logout = async () => {
    //     await signOut(auth)
    //     window.sessionStorage.removeItem("token")
    //     window.location.assign("/login")
       
    // };
    // useEffect(() => {
    //     return onAuthStateChanged(auth, userInfo => {
    //         if (userInfo.emailVerified === true && userInfo.isAnonymous === false) {
    //             isSetLoading(true);
    //             setAuthUser(userInfo)
    //             let token = userInfo.accessToken;
    //             window.sessionStorage.setItem("token",token)
    //         } else {
    //             setAuthUser(null)
    //             window.sessionStorage.removeItem("token")
    //         }
    //         isSetLoading(false)
    //     })
    // },[])
     let Logout = async () => {
    await signOut(auth);
    window.sessionStorage.removeItem("token");
    window.location.assign("/login");
  };
  useEffect(() => {
    return onAuthStateChanged(auth, userInfo => {
      console.log(userInfo);
      if (userInfo.emailVerified === true && userInfo.isAnonymous === false) {
        isSetLoading(true);
        setAuthUser(userInfo);
        let token = userInfo.accessToken;
        window.sessionStorage.setItem("token", token);
      } else {
        setAuthUser(null);
        window.sessionStorage.removeItem("token");
      }
      isSetLoading(false);
    });
  }, [])
  return (
    <AuthContext.Provider value={{ authUser, isLoading, Logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextApi

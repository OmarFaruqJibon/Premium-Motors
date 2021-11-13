import firebaseAuthentication from "../Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged , signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const regiserUser = (email,password, name, history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const newUser = {email, displayName: name};
            setUser(newUser);
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });

              saveUser(email, name, 'POST');

            setAuthError('');
            history.push('/');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    };
    // console.log(user);

    const userLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
    }


    const googleLogin = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user= result.user;
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
            saveUser(user.email, user.displayName, 'PUT');
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));
     }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
              if (user) {
                  setUser(user);
              } else {
                  setUser({});
              }
              setIsLoading(false);
            });
            return () => unsubscribe;
            
      }, []);


    //   make admin
      useEffect(() => {
        fetch(`https://stark-sierra-80617.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
      },[user.email]);


    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = {email, displayName};
        fetch('https://stark-sierra-80617.herokuapp.com/users',{
            method: method,
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        regiserUser,
        userLogin,
        logOut,
        authError,
        googleLogin,
        isLoading,
        admin
        // token
    }
};

export default useFirebase;
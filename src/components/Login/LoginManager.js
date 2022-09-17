import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile   } from "firebase/auth";


export const intializeGoogleframeWork = ()=>{
      initializeApp(firebaseConfig);

}

export const googleSignIn =()=>{
      const provider = new GoogleAuthProvider();
      const auth = getAuth()
      return signInWithPopup(auth,provider)
    .then(res =>{
      // const credential = GoogleAuthProvider.credentialFromResult(res);
      // const token = credential.accessToken;

      const {displayName,email,photoURL} = res.user
      const logeedUser = {
        isloggedIn : true,
        name : displayName,
        email: email,
        photo : photoURL,
      }
      return(logeedUser)
      

      // console.log(res.user)
    })
}

export const googleSignOut =()=>{
      const auth = getAuth();
      return signOut(auth).then(() => {
            // Sign-out successful.
            const loggedInUser ={
              isloggedIn :false,
              name :'',
              email : '',
              photo : ''
            }
            return loggedInUser
          }).catch((error) => {
            // An error happened.
          });
}
export const createUserWithEmailPassword = (name,email,password) =>{
      const auth = getAuth();
      return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const newUser = user;
    newUser.success = true;
    newUser.error ='';
    updateUser(name)
    return newUser;
//     console.log(user);
    // ...
  })
  .catch((error) => {
      const newUser ={}
      newUser.success = false;
      newUser.error = error.code;
      console.log(newUser.error);
      return newUser
     
    
  });
}

const updateUser =(name)=>{
      const auth = getAuth();
    updateProfile(auth.currentUser, {
    displayName: name,
  }).then(() => {
    console.log('update successfully')
  
  }).catch((error) => {
    console.log(error);
  });
}

export const signInWithEmailPassword=(email,password)=>{
      const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const newUser = user
    newUser.success = true;
    newUser.error = '';
    return newUser;
   
    // ...
  })
  .catch((error) => {
      const errorCode = error.code;
      const newUser ={}
      newUser.success = false;
      newUser.error = error.code;
      return newUser;
  });
}
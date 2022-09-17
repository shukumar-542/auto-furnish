import { useState } from 'react';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { createUserWithEmailPassword, googleSignIn, googleSignOut, intializeGoogleframeWork, signInWithEmailPassword } from './LoginManager';



function Login() {
      const navigate = useNavigate()
      const location = useLocation()
      let {from} = location.state || {from : {pathname : '/'}}
    
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useContext(userContext)
  const [loggedInUser, setLoggedInUser] = useState({
    isloggedIn : false,
    name : '',
    email : '',
    password : '',
    error:'',
    success:false,
  })
  intializeGoogleframeWork();


  const handleGoogelSignOut =()=>{
    googleSignOut()
    .then(res =>{
      setLoggedInUser(res)
      setUser(res)
    })
  }
  const handleInputField =(e)=>{
    let isFieldValid = true;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
      
      }
      if(e.target.name === 'password'){
        isFieldValid = e.target.value.length > 6
        // const isPasswordValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value)
        
        // console.log(e.target.name,isPasswordValid);

      }
      if(isFieldValid){
        const newLoggedInUser = {...loggedInUser}
        newLoggedInUser[e.target.name] = e.target.value
        setLoggedInUser(newLoggedInUser)
      }
  }
  const handleFormSubmit =(e) =>{
    if(newUser && loggedInUser.email && loggedInUser.password){
     createUserWithEmailPassword(loggedInUser.name,loggedInUser.email,loggedInUser.password)
     .then(res =>{
      console.log(res);
      setLoggedInUser(res)
      setUser(res)
      navigate(from)

      
     })
    

     
//      console.log(loggedInUser.success);
    }
  if( !newUser && loggedInUser.email && loggedInUser.password){
    signInWithEmailPassword( loggedInUser.email,loggedInUser.password)
    .then(res=>{
      setLoggedInUser(res)
      setUser(res);
      navigate(from)
    })
  }
    e.preventDefault();
  }

 

  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(res =>{
      setLoggedInUser(res);
      setUser(res)
      navigate(from)
    })
 }
  return (
      <div className="my-32 flex justify-center items-center flex-col space-y-2">
            <h1 className="text-2xl text-red-600 font-bold align-center">Authentication</h1>

            <div className="space-y-4">

                  {/* {
                        loggedInUser.isloggedIn && <div>
                        <p>{loggedInUser.name}</p>
                        <p>{loggedInUser.email}</p>
                        <img src={loggedInUser.photo} alt="" />
                        </div>
                        }  */}
 

                  <input type="checkbox" name="newUser" onChange={()=>setNewUser(!newUser)} id="" />
                  <label htmlFor="newUser">New User Sign Up</label>
                  <div className=" flex flex-col space-y-3 w-full">

                  <form onSubmit={handleFormSubmit}>
                  <div className="space-y-3">
                  {newUser && <input type="text" className="w-full py-2 bg-gray-100 px-1 rounded-md" placeholder="Your Name" name='name' onBlur={handleInputField} required />} 
                  <input className="w-full py-2 bg-gray-100 px-1 rounded-md" type="text" name='email' onBlur={handleInputField}  placeholder='Email' required/>
                  <input className="w-full py-2 bg-gray-100 px-1 placeholder-slate-400 rounded-md" type="password" name="password" onBlur={handleInputField} placeholder='Password'  required/>
                  <input className="bg-red-600 text-white px-2 py-1 rounded-md cursor-pointer w-1/3 align-middle " type="submit" value="submitt" />
                  </div>
                  </form>
                  
             {loggedInUser.isloggedIn ? <button onClick={handleGoogelSignOut}>Sign out</button> : <button onClick={handleGoogleSignIn} className="align-center py-1 rounded-md text-white px-3 bg-green-700">Sign in with google</button> }
             </div>

                  {loggedInUser.success && <p style={{color:'green'}}>user {newUser ? 'Create' : 'loggedIn'} successfully</p>}
                  <p style={{color:'red'}}>{loggedInUser.error}</p>

            </div>
      </div>
  );
}

export default Login;

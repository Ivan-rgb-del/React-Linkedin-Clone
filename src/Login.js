import { useState } from 'react';
import login from './features/userSlice';
import classes from './Login.module.css';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';
import logo from './images/Linkedin-Logo.png';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const dispatch = useDispatch();
  const auth = getAuth(app);

  const registerHandler = (event) => {
    event.preventDefault();

    if (!name) {
      return alert("Please enter a full name!");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const user = userAuth.user;
        console.log(user)

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic
        }).then(() => {
          console.log('Profile updated!');
        }).catch(err => console.log(err))

        .then(() => {
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoUrl: profilePic
          }))
        })
      }).catch(error => console.log(error));
  };

  const loginHandler = (event) => {
    event.preventDefault();

    if (!name) {
      return alert("Please enter a full name!");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userAuth => {
        const user = userAuth.user;
        console.log(user)

        .then(() => {
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoUrl: profilePic
          }))
        })
      }).catch(error => console.log(error));
  };

  return (
    <div className={classes.login}>
      <img src={logo} alt='logo' />

      <form onSubmit={loginHandler}>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Full name (required if registering)'
        />

        <input
          type='text'
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder='Profile pic URL (optional)'
        />

        <input
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
        />

        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
        />

        <button type='submit' onClick={loginHandler}>Sign In</button>
      </form>

      <p>
        Not a member?
        <span onClick={registerHandler}>Register Now</span>
      </p>
    </div>
  );
};

export default Login;
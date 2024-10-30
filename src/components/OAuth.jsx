import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import { GoogleIcon } from './Icons'

const OAuth = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onGoogleClick = (e) => {}

  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with</p>
      <button className='socialIconDiv' onClick={onGoogleClick}>
        <img className='socialIconImg' src={GoogleIcon} alt='google' />
      </button>
    </div>
  )
}

export default OAuth

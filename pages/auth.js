import FirebaseAuth from '../components/auth/FirebaseAuth';
import 'firebaseui/dist/firebaseui.css'

const Auth = () => {
  return (
    <div className="w-full h-[calc(100vh-296px)] flex items-center justify-center">
      <div className="bg-white p-12 rounded-md shadow-md">
        <h1>Sign up / Register</h1>
        <FirebaseAuth />
      </div>
    </div>
  )
}

export default Auth;

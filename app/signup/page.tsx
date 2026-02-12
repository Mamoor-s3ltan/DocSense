"use client"
import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { HandleSignUp } from '../actions/auth';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { HandleGoogleSignIn } from '../actions/auth';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: '#7c3aed',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#7c3aed',
    },
  },
}));

const page = () => {


 const router = useRouter();
 const [alert, setAlert] = useState<{ type: 'success' | 'error', message: string } | null>(null);
   

    async function handleGoogleSignIn() {
   
    setAlert(null);

    try {
      await HandleGoogleSignIn();
      // The redirect happens in the server action
    } catch (error) {
      setAlert({ type: 'error', message: 'Failed to sign in with Google' });
     
    }
  }
    const HandleSubmit = async (formData:FormData)=>{
        const result = await HandleSignUp(formData);
        if(result.success === true){
            setAlert({ type: 'success', message: "User signed up successfully!" });
            router.push("signin")
        } else {
            setAlert({ type: 'error', message: result.error || "Failed to sign up." });
        }
        }

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Grid Background */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(147 51 234 / 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(147 51 234 / 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Signup Card */}
      <Container maxWidth="sm" className="relative z-10 mt-10">
        <Box className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Join Docsense
              </span>
            </h1>
            <p className="text-gray-600 text-lg">
              Start chatting with your documents today
            </p>
          </div>
               {alert && (
            <Alert 
              icon={alert.type === 'success' ? <CheckIcon fontSize="inherit" /> : undefined} 
              severity={alert.type}
              className="mb-5"
              onClose={() => setAlert(null)}
            >
              {alert.message}
            </Alert>
          )}
          

          {/* Form */}
          <form action={HandleSubmit} className="flex flex-col gap-5">
            <StyledTextField 
              id="name" 
              label="Full Name"
              name='name' 
              variant="outlined" 
              fullWidth
              required
              className="bg-white/50 rounded-lg"
            />
            
            <StyledTextField 
              id="email" 
              label="Email Address" 
              variant="outlined" 
              type="email"
              name='email'
              fullWidth
              required
              className="bg-white/50 rounded-lg"
            />
            
            <StyledTextField 
              id="password" 
              label="Password" 
              variant="outlined" 
              type="password"
              name='password'
              fullWidth
              required
              className="bg-white/50 rounded-lg"
            />

            {/* Submit Button */}
            <Button 
              variant="contained" 
              fullWidth
              type='submit'
              className="mt-4 py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 normal-case rounded-xl"
              sx={{
                background: 'linear-gradient(135deg, #9333ea 0%, #4f46e5 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7e22ce 0%, #4338ca 100%)',
                }
              }}
            >
              Create Account
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-2">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm">or</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <Button 
              variant="outlined" 
              fullWidth
              onClick={handleGoogleSignIn}
              className="py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 normal-case rounded-xl font-medium"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>

            {/* Sign In Link */}
            <p className="text-center text-gray-600 mt-4">
              Already have an account?{' '}
              <Link href="/signin" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Sign In
              </Link>
            </p>
          </form>
        </Box>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            🔒 Secure & Encrypted
          </span>
          <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            ⚡ Free to Start
          </span>
          <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
            ✨ No Credit Card
          </span>
        </div>
      </Container>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default page
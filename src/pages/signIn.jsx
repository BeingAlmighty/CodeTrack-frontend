import React from 'react'
import { SignIn } from '@clerk/clerk-react'
const SignInPage = () => {
  return(
    <div style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <SignIn
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        redirectUrl="/"
        />
    </div>
  )
}

export default SignInPage

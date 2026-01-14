import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const SignUpPage = () => {
  return(
    <div style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <SignUp
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
      />
    </div>
  )
}

export default SignUpPage

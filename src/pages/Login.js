import { Link as RouterLink } from "react-router-dom"
// material
import { styled } from "@mui/material/styles"
import { Card, Stack, Link, Container, Typography } from "@mui/material"
// layouts
import AuthLayout from "../layouts/AuthLayout"
// components
import Page from "../components/page"
import { LoginForm } from "../sections/authentication/login"
import AuthSocial from "../sections/authentication/AuthSocial"

// firebase config
import { app } from "../config/firebase"
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut
} from "firebase/auth"

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        display: "flex"
    }
}))

const SectionStyle = styled(Card)(({ theme }) => ({
    width: "100%",
    maxWidth: 464,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: theme.spacing(2, 0, 2, 2)
}))

const ContentStyle = styled("div")(({ theme }) => ({
    maxWidth: 480,
    margin: "auto",
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(12, 0)
}))

// ----------------------------------------------------------------------

export default function Login() {
    const handleSignInGoogle = () => {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                const user = result.user
                console.log("token", token)
                console.log("user", user)
                // next step
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code
                const errorMessage = error.message
                // The email of the user's account used.
                const email = error.email
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error)
                console.log("errorCode", errorCode)
                console.log("errorMessage", errorMessage)
                console.log("email", email)
                console.log("credential", credential)
            })
    }

    const handleSignOut = () => {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            })
    }
    return (
        <RootStyle title="Login | Minimal-UI">
            <AuthLayout>
                Don’t have an account? &nbsp;
                <Link
                    underline="none"
                    variant="subtitle2"
                    component={RouterLink}
                    to="/register"
                >
                    Get started
                </Link>
            </AuthLayout>

            <SectionStyle sx={{ display: { xs: "none", md: "flex" } }}>
                <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                    Hi, Welcome Back
                </Typography>
                <img
                    src="/static/illustrations/illustration_login.png"
                    alt="login"
                />
            </SectionStyle>

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            Sign in to Minimal
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                            Enter your details below.
                        </Typography>
                    </Stack>
                    <AuthSocial googleClick={handleSignInGoogle} />

                    <LoginForm />

                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            mt: 3,
                            display: { sm: "none" }
                        }}
                    >
                        Don’t have an account?&nbsp;
                        <Link
                            variant="subtitle2"
                            component={RouterLink}
                            to="register"
                            underline="hover"
                        >
                            Get started
                        </Link>
                    </Typography>
                </ContentStyle>
            </Container>
        </RootStyle>
    )
}

import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './firebse'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => {

    const [state, dispatch] = useStateValue()

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((err)=>alert(err.message))
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <img 
                    src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512'
                    alt='Fb Logo'
                />
                <img 
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt='Facebook'
                />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login

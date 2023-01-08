import './index.css'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-container">
      <h1 className="heading">please Login</h1>
      <button className="login-button" type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}
export default Login

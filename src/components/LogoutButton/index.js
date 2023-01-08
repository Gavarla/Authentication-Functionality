import './index.css'

import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button className="logout-button" type="button" onClick={onClickLogout}>
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)

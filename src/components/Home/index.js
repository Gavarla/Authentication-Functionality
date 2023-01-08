import './index.css'
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="heading-container">
      <h1 className="heading">Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home

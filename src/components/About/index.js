import './index.css'
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="about-container">
      <h1 className="heading">About Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home

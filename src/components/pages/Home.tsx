import { Outlet } from 'react-router-dom'
import Topbar from '../molecules/Topbar'

const Home = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  )
}

export default Home

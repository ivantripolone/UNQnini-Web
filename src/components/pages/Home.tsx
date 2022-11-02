import { Outlet } from 'react-router-dom'
import ToastMessage from '../molecules/ToastMessage'
import Topbar from '../molecules/Topbar'

const Home = () => {
  return (
    <div>
      <Topbar />
      <ToastMessage />
      <Outlet />
    </div>
  )
}

export default Home

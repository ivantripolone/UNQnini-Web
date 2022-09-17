import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <div>
      <p>Home</p>
      <Outlet />
    </div>
  )
}

export default Home

// Write your JS code here

import Header from '../Header'
import LogoutButton from '../LogoutButton'
const HomeRoute = props => {
  return (
    <>
      <Header />
      <div>
        <h1>Home Route</h1>
        <LogoutButton />
      </div>
    </>
  )
}
export default HomeRoute

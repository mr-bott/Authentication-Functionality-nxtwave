// Write your JS code here
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}
export default Header

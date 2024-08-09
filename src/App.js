import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import HomeRoute from './components/Home'
import AboutRoute from './components/About'
import NotFound from './components/NotFound'
import Protected from './components/ProtectedRoute'
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Protected exact path="/" component={HomeRoute} />
      <Protected exact path="/about" component={AboutRoute} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

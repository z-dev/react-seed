import Home from './containers/home'
import Journeys from './containers/journeys'
import Login from './containers/login'
import Accounts from './containers/accounts'

export const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/login', component: Login, exact: false },
  { path: '/journeys', component: Journeys, exact: false },
  { path: '/accounts', component: Accounts, exact: false },
]

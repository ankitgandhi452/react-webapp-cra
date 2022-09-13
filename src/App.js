import React from 'react'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'

import {
  HOME_PAGE
} from './Constants/APP_ROUTES'

const HomePage = React.lazy(() => import('./Pages/Home/Home.Container'))

function App () {
  const location = useLocation()
  const navigate = useNavigate()
  const params = useParams()

  const routerProps = { location, navigate, params }
  return (
    <Routes>
      <Route path={HOME_PAGE} element={<HomePage {...routerProps} />} />
    </Routes>
  )
}

export default App

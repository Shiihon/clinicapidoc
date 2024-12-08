import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router'
import HomeLayout from './layouts/HomeLayout'
import Vision from './components/Vision'
import Endpoints from './components/Endpoints'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<HomeLayout />}>
      <Route index element={<Home />} />
    <Route path ='/vision' element={<Vision />} />
    <Route path ='/endpoints' element={<Endpoints />} />
    </Route>)
  )
  return <RouterProvider router={router} />
}

export default App
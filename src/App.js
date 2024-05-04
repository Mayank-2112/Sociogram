import LeftBar from './components/leftBar/LeftBar';
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightBar/Rightbar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
function App() {
  const currentUser = true;

  const Layout = ()=>{
    return (
      <div>
        <Navbar/>
        <div style={{display:'flex'}}>
          <LeftBar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    )
  }
  const ProtectedRoute = ({children})=>{
      if(!currentUser){
        return <Navigate to='/login'/>
      }

      return children
  }
  const router = createBrowserRouter([
    {
      path:'/',
      element: 
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile/>
        }
      ]
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path:'/register',
      element: <Register/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

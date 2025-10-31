import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Rootlayout from '../pages/Rootlayout.jsx'

export const Router = createBrowserRouter([

    {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "/", element: <App /> },
      // { path: "products/:id", element: <ProductDetail /> }
    ]
  },
    {
    path: '*',
    element: <div>404 Not Found</div>
  }

])

import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'

export const Router = createBrowserRouter([

    {
    path: "/",
    element: <App />,
  //   children: [
  //     { path: "/", element: <Products /> },
  //     { path: "products/:id", element: <ProductDetail /> }
  //   ]
  },
    {
    path: '*',
    element: <div>404 Not Found</div>
  }

])

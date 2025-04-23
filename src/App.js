import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utilities/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Login from './components/Login';

const appRoute = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: '/watch',
      element: <WatchPage />
    },
    {
      path: '/login',
      element: <Login />
    }]
}])

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <RouterProvider router={appRoute}>
          <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;

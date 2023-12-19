import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import history from './router/History';
import { ToastContainer } from 'react-toastify';
import { Provider } from "react-redux";
import { store } from "./redux/reducer";
import Player from "./components/Player";



function App() {


  return <Player />
  // return (
  //   <Provider store={store}>
  //     <BrowserRouter
  //       history={history}
  //     >

  //       <ToastContainer
  //         position="top-right"
  //         autoClose={2500}
  //         hideProgressBar
  //         newestOnTop={true}
  //         closeOnClick
  //         rtl={false}
  //         pauseOnFocusLoss
  //         draggable
  //         pauseOnHover
  //       />
  //       <AppRouter />
  //     </BrowserRouter>
  //   </Provider>

  // );
}

export default App;

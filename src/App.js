import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import history from './router/History';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter
      history={history}
    >

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AppRouter />
    </BrowserRouter>

  );
}

export default App;

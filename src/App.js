import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import history from './router/History';

function App() {
  return (
    <BrowserRouter 
      history={history}
    >
      <AppRouter />
    </BrowserRouter>
  
  );
}

export default App;

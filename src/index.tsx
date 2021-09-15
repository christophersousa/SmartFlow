import ReactDOM from 'react-dom';
import {App} from './App';
import { SmartContextProvider } from './context/SmartContext';
import "./styles/global.scss";
ReactDOM.render(
    <SmartContextProvider>
      <App />
    </SmartContextProvider>
  ,document.getElementById('root')
);

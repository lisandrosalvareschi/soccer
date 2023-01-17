import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routeConfiguration from './routeConfiguration';
import { app } from './firebase-config';
import {getConfig} from './common/i18n/services/config'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import configureStore from './redux/store';

i18next.init(getConfig());
const store = configureStore({}, app);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <I18nextProvider i18n={i18next}>
          <Router>
            <Routes>
              {routeConfiguration().map(i => <Route key={i.name} element={<>{i.component({ children: i.children })}</>} path={i.path}/>)}
            </Routes>
          </Router>
        </I18nextProvider>
      </Provider>
    </React.StrictMode>
  );
}

export default App;

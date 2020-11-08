import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/foundation/index.scss'
import './assets/styles/components/banner.scss';
import './assets/styles/components/navigation.scss';
import './assets/styles/components/hero.scss';
import './assets/styles/components/solution-journey.scss';
import './assets/styles/components/covid.scss';
import './assets/styles/components/request-demo.scss';
import './assets/styles/components/trending.scss';
import './assets/styles/components/footer.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

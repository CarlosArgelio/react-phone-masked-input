import ReactDOM from 'react-dom/client'
import App from './App.tsx'

document.body.innerHTML = '<div id="input"></div>';
ReactDOM.createRoot(document.getElementById('input')!).render( <App /> )

import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from '../app/App'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)

if (module.hot !== undefined) {
  module.hot.accept()
}

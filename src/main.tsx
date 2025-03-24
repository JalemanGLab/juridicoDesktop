import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import RouterApp from './routes/RouterApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<RouterApp />
			</HashRouter>
		</Provider>
	</React.StrictMode>,
)

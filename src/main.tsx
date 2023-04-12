import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/reset.css'
import ConfigProvider from 'antd/es/config-provider'

import './App.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      // token: {
      //   colorPrimary: "#FFFFFF"
      // }
    }}>
      <App/>
    </ConfigProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/index.tsx'
import '@/assets/css/index.css'
import ProvidersTree from '@/providers/index'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProvidersTree>
            <App />
    </ProvidersTree>
  </React.StrictMode>
);

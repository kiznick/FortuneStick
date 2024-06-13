import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NextUIProvider, ScrollShadow } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NextUIProvider className="h-screen">
            <ScrollShadow>
                <App />
            </ScrollShadow>
        </NextUIProvider>
    </React.StrictMode>,
)

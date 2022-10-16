import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import 'services/i18n'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MoviesProvider } from 'context/MoviesContext'
import { ActorsProvider } from 'context/ActorsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <ActorsProvider>
        <MoviesProvider>
          <App />
        </MoviesProvider>
      </ActorsProvider>
    </Suspense>
  </React.StrictMode>,
)

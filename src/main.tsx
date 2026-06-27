import React from 'react'
// @ts-ignore: No declaration file for 'react-dom/client' in this environment
import ReactDOM from 'react-dom/client'
const App = () => React.createElement('div', null, 'Electroshop')

// Avoid using JSX syntax to prevent automatic import of 'react/jsx-runtime'
ReactDOM.createRoot(document.getElementById('root')!).render(
  React.createElement(App)
)
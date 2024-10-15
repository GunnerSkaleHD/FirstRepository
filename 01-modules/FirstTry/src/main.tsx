import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import React from "react";
import ReactDOM from 'react-dom';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react';


ReactDOM.render(
  <React.StrictMode>
    <PorscheDesignSystemProvider>
      <App />
    </PorscheDesignSystemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


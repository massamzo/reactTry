import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import React from "react"
import ReactDom from 'react-dom/client'

import Page from './App';

// 👇️ passed wrong ID to getElementById() method
createRoot(document.getElementById('div')).render(<Page />)
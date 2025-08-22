//1 create a root
//2 render some markup to the root
import { createRoot } from 'react-dom/client'; // brings in Reacts function for creating a root
import App from './App.jsx'
import { StrictMode } from 'react';

// create a root
createRoot(document.getElementById("root")).render(<App />); // finds the div inside index.html, creates a react root inside it, renders app component into the dom

<StrictMode>
    <App />
</StrictMode>
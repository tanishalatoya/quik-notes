import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('page-container');

const root = createRoot(container);

root.render(<App />);

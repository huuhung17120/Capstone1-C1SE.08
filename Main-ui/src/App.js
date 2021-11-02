

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/Cart';

function App() {
    return (
        <CartProvider >
            <div className="App">
                <Header />
                <Main />
                <ScrollToTop />
            </div>
        </CartProvider>
    );
}

export default App;

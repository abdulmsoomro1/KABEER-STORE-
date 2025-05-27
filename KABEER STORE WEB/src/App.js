import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/Header';
import Home from './pages/Home';
import { db, doc, setDoc, getDoc } from './firebase';
import './App.css';

export const CartContext = createContext();

export default function App() {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);
  const [userId] = useState('user123');
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const loadCart = async () => {
      const cartDoc = await getDoc(doc(db, 'carts', userId));
      if (cartDoc.exists()) {
        setCart(cartDoc.data().items || []);
      }
    };
    loadCart();
  }, [userId]);

  useEffect(() => {
    if (modalContent) {
      const timer = setTimeout(() => setModalContent(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [modalContent]);

  const addToCart = async (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    try {
      await setDoc(doc(db, 'carts', userId), { items: newCart });
      alert(t('cart_saved'));
    } catch (error) {
      alert(t('cart_error'));
    }
  };

  const removeFromCart = async (productId) => {
    const newCart = cart.filter(item => item.id !== productId);
    setCart(newCart);
    try {
      await setDoc(doc(db, 'carts', userId), { items: newCart });
      alert(t('cart_saved'));
    } catch (error) {
      alert(t('cart_error'));
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setModalContent }}>
      <div className="app">
        <Header />
        <Home />
        {modalContent && (
          <div className="modal">
            <p>{modalContent}</p>
          </div>
        )}
      </div>
    </CartContext.Provider>
  );
}
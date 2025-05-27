import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../App';

export default function Cart() {
  const { t } = useTranslation();
  const { cart, removeFromCart } = useContext(CartContext);
  const [removingId, setRemovingId] = useState(null);

  const handleRemove = (productId) => {
    setRemovingId(productId);
    removeFromCart(productId);
    setTimeout(() => setRemovingId(null), 300);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>{t('cart_title')}</h2>
      {cart.length === 0 ? (
        <p>{t('cart_empty')}</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} - {t('price', { price: item.price })}</span>
              <button
                className={removingId === item.id ? 'clicked' : ''}
                onClick={() => handleRemove(item.id)}
              >
                {t('remove')}
              </button>
            </div>
          ))}
          <p>{t('cart_total', { total })}</p>
        </>
      )}
    </div>
  );
}
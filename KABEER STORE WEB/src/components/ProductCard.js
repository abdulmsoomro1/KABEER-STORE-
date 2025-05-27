import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../App';

export default function ProductCard({ product }) {
  const { t } = useTranslation();
  const { addToCart, setModalContent } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setModalContent(t('added_to_cart', { name: product.name }));
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{t('price', { price: product.price })}</p>
      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? t('added_to_cart', { name: '' }) : t('add_to_cart')}
      </button>
    </div>
  );
}
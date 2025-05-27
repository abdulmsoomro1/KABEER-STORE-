import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import Map from '../components/Map';
import ContactButtons from '../components/ContactButtons';

export default function Home() {
  const { t } = useTranslation();
  const products = [
    { id: 1, name: "Fresh Milk", price: 10.5 },
    { id: 2, name: "Arabic Bread", price: 5.0 },
    { id: 3, name: "Basmati Rice (1kg)", price: 20.0 },
    { id: 4, name: "Olive Oil (500ml)", price: 35.0 },
    { id: 5, name: "Dates (1kg)", price: 25.0 }
  ];

  return (
    <main>
      <h2>{t('welcome')}</h2>
      <div className="products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Cart />
      <Map />
      <ContactButtons />
    </main>
  );
}
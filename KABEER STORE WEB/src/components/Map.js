import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import storeIcon from '../images/store-icon.png';

export default function Map() {
  const { t } = useTranslation();

  useEffect(() => {
    const map = L.map('map').setView([21.4966, 39.1831], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: storeIcon,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    const stores = [
      { lat: 21.4966, lng: 39.1831, name: 'Kabeer Store - Main Branch' },
      { lat: 21.5510, lng: 39.1830, name: 'Kabeer Store - Al Balad' },
      { lat: 21.5350, lng: 39.1650, name: 'Kabeer Store - Al Hamra' }
    ];

    stores.forEach(store => {
      L.marker([store.lat, store.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(store.name);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="map-container">
      <h2>{t('store_location')}</h2>
      <div id="map" style={{ height: '300px' }}></div>
    </div>
  );
}
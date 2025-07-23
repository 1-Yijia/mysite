import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GAListener() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag('config', 'G-EH8GM2093R', {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null; 
}

import { useState, useEffect } from 'react';
import crop from "./assets/crop.png"

const ImagenCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const style = {
    position: 'fixed',
    width: '288px',
    height: '288px',
    top: position.y - 144,
    left: position.x - 144,
    pointerEvents: 'none' // para evitar que la imagen afecte a los eventos del cursor
  };

  return <img src={crop} alt="Imagen" style={style} />;
};

export default ImagenCursor;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from './json/productos.json';

const ItemDetailContainer = () => {
  const { id: itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isNaN(itemId)) {
      setError(new Error('ID de producto no válido'));
      setLoading(false);
      return;
    }

    const foundProduct = productos.find(
      (producto) => producto.id === parseInt(itemId)
    );

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError(new Error('Producto no encontrado'));
    }

    setLoading(false);
  }, [itemId, productos]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img
          src={product.image}
          alt={product.title}
          style={imageStyle}
        />
      </div>
      <div style={detailsContainerStyle}>
        <div style={detailsHeaderStyle}>
          <h1 style={productNameStyle}>{product.title}</h1>      
        </div><br></br>
        <h1>${product.price}</h1>
        <div style={descriptionContainerStyle}>
          <h2>Descripción</h2>
          <p style={paragraphStyle}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '20px',
};

const imageContainerStyle = {
  flex: 1,
  marginRight: '20px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
};

const detailsContainerStyle = {
  flex: 2,
};

const detailsHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const descriptionContainerStyle = {
  marginTop: '20px',
};

const paragraphStyle = {
  fontSize: '20px',
  color: '#333',
  margin: '10px 0',
};

const productNameStyle = {
  fontSize: '45px',
  fontWeight: 'bold',
  color: '#333',
  margin: 0,
};

export default ItemDetailContainer;
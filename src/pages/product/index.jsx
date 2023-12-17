
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../global/product';
import { Star } from 'react-feather';
import CnNavbar from '../../components/CnNavbar';
import CnProductCard from '../../components/CnProductCard';

const Product = () => {
  const { type, id } = useParams();
  const product = products[type].find((p) => p.id === parseInt(id));

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage === product.images.length - 1 ? 0 : prevImage + 1));
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? product.images.length - 1 : prevImage - 1));
  };

  return (
    <CnNavbar>
      <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="md:w-1/3 relative mb-4 md:mb-0">
          <div
            className="absolute top-1/2 text-[2.5rem] border-4 bg-green-50 rounded-md transform -translate-y-1/2 left-0 cursor-pointer"
            onClick={prevImage}
          >
            &#10094;
          </div>
          <img
            src={product?.images[currentImage]}
            alt={`Product ${currentImage + 1}`}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
          <div
            className="absolute top-1/2 text-[2.5rem] border-4 bg-green-50 rounded-md transform -translate-y-1/2 right-0 cursor-pointer"
            onClick={nextImage}
          >
            &#10095;
          </div>
        </div>
        <div className="md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
        <p className="text-gray-700 mb-4">{product?.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-xl font-bold text-blue-600">${product?.price}</span>
          {product?.discountPercentage > 0 && (
            <span className="text-sm text-gray-500 ml-2 line-through">
              ${((product.price / (100 - product.discountPercentage)) * 100).toFixed(2)}
            </span>
          )}
        </div>
        <div className="flex  items-center mb-4">
          <span className="text-xl flex flex-row text-yellow-500">
            {Array.from({ length: Math.floor(product?.rating) }, (_, index) => (
              <Star key={index} />
            ))}
          </span>
          <span className="text-gray-700 ml-2">{product?.rating.toFixed(2)}</span>
        </div>
        <p className="mb-4">Stock: {product?.stock}</p>
        <p className="mb-4">Brand: {product?.brand}</p>
        </div>
      </div>
      <div className="mt-8 p-8">
        <div className="mt-8 font-bold text-[2rem]">{`Some more collection`}</div>
        <div className="flex flex-wrap justify-between">
          {products[type].map((product) => (
            <div key={product.description} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
              <CnProductCard product={product} type={type} />
            </div>
          ))}
        </div>
      </div>
    </CnNavbar>
  );
};

export default Product;

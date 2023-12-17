import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from '../CnModal'; // Import your modal component

const CnProduct = ({ product, type }) => {
  const { id, title, price, discountPercentage, thumbnail, description, images } = product;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md mx-4 my-4 bg-white rounded-xl overflow-hidden shadow-md h-68">
      <img className="w-full h-48 object-cover cursor-pointer" onClick={()=>{setIsModalOpen(!isModalOpen)}} src={thumbnail} alt={title} />
      <div className='w-full h-78'>
        <div className="px-6 py-4 bg-red-500 font-bold">
          <span className='text-lg text-white'>${discountPercentage}</span>
          <span className="text-sm text-gray-100 ml-2 line-through">${price.toFixed(2)}</span>
        </div>
        <div className="px-6 py-4 h-full">
          <div className="font-bold text-sm mb-2">{title}</div>
          <div className='mt-4'>
            <Link
              className='p-2 bg-blue-600 rounded-md text-center cursor-pointer text-white'
              to={`/product/${type}/${id}`}
              onClick={openModal}
            >
              More Details
            </Link>
          </div>
        </div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={{ title, description, price, discountPercentage, images }}
      />
    </div>
  );
};

export default CnProduct;

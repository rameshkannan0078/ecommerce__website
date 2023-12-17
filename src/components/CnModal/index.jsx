import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';
const CnModal = ({ isOpen, onClose, product }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setModalOpen(false);
    onClose(); 
  };

  if (!isModalOpen) {
    return null;
  }

  const { title, price, discountPercentage, images } = product;

  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden flex items-center justify-center z-50">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={closeModal}
            >
           <X/>
            </button>
          </div>
    {/* Modal body */}
<div className="p-4 md:p-5 space-y-4">
  <img src={images[0]} alt="" className="w-full h-78 rounded-lg shadow-md" />
  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    Price: ${price}
  </p>
  {discountPercentage > 0 && (
    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      Discounted Price: ${(price / ((100 - discountPercentage) / 100)).toFixed(2)}
    </p>
  )}
</div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={closeModal}
              type="button"
              className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CnModal;

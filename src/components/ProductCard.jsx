/* eslint-disable react/prop-types */

import { useState } from "react";

const ProductCard = ({ product }) => {
  const { title, price, description, category, image, rating } = product;
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="card bg-base-300 shadow-xl">
      <figure>
        <img className="h-72 rounded-2xl p-2 w-full" src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <span className="">Price: ${price}</span>
        <p className="">Category: {category}</p>
        <div className="card-actions justify-center">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            View Details
          </button>
        </div>

        {showModal && (
          <div  onClick={() => setShowModal(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="modal-box">
              <img
                className="h-72 rounded-2xl p-2 w-full"
                src={image}
                alt={title}
              />
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="py-4">{description}</p>
              <div className="md:flex md:justify-between">
                <p className="!grow-0">Price: ${price}</p>
                <p className="!grow-0">Category: {category}</p>
              </div>
              <div className="md:flex md:justify-between">
                <p className="!grow-0">rating: {rating?.rate}</p>
                <p className="!grow-0">count: {rating?.count}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

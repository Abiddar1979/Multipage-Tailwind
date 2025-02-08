import Image from 'next/image';
import React from 'react';

const RC = () => {
  const rcData = [
    { id: 1, name: "traxx Maxx", price: 150000, description: "Fast rc sporty", image: '/trexxas truck.jpeg' },
    { id: 2, name: "traxx slash", price: 80000, description: "Fast rc buggy", image: '/trexxas turbo.jpeg' },
    { id: 3, name: "traxx x-max", price: 50000, description: "Fast rc monster", image: '/traxxas max.jpeg' },
  ];
  console.log(rcData);
  return (
    <div className="rc grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {rcData.map((car) => (
        <div key={car.id} className="car-card bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-300">
          <img src={car.image} alt={car.name} className='w-full h-auto mb-4 rounded-t-lg' />
          <div className="p-4">
            <h3 className='text-lg mb-2'>{car.name}</h3>
            <p className='text-sm mb-4'>{car.description}</p>
            <div className="price text-lg font-bold mb-4">${car.price}</div>
            <button className='w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RC;

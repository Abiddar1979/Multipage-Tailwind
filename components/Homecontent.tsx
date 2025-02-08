import React from 'react';

const HomeContent = () => {
  return (
    <div>
      <section className='hero flex justify-center items-center bg-cover bg-center bg-no-repeat text-white text-center p-10 h-screen' style={{ backgroundImage: "url('/traxxas monster.jpg')" }}>
        <div>
          <h1 className="fade-in mb-10 text-1xl ">Welcome to RC Cars World</h1>
          <p className='mb-20 text-1xl'>Your one-stop shop for the world&apos;s best RC Cars</p>
          <button className='px-5 py-5 bg-blue-500 text-1xl text-white  rounded border-none hover:bg-blue-400 '>Shop Now</button>
        </div>
      </section>
    </div>
  );
}

export default HomeContent;

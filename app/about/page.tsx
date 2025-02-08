import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <section
        className="about flex justify-center items-center bg-cover bg-center bg-no-repeat w-full h-full text-white text-center"
        style={{ backgroundImage: "url('/traxxx slash.jpg')" }}
      >
        <div className="about-content p-5 md:p-10 rounded-lg max-w-full md:max-w-[600px] w-full">
          <h2 className="fade-in mb-10 md:mb-20 text-2xl md:text-4xl">About Us</h2>
          <p className="text-base md:text-xl">
            Traxxas RC cars are celebrated for their incredible speed, durability, and high-performance capabilities, making them a top choice for both beginners and seasoned racers. With models designed for various terrains, Traxxas vehicles ensure an exhilarating racing experience. Unleash the thrill of Traxxas and elevate your RC adventures today!
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;

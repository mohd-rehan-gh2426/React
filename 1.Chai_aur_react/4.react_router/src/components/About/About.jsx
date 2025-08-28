import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://i.pinimg.com/736x/7c/e1/05/7ce1052cf02514c00fa4369390938848.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Hercules bicycles are crafted by passionate innovators
            </h2>
            <p className="mt-6 text-gray-600">
              Riding a Hercules cycle brings together durability, comfort, and
              style. Each model is built with precision engineering to handle
              both city roads and rugged terrains with ease. From kids’ bikes to
              performance cycles, the brand has consistently delivered trust and
              innovation for decades.
            </p>
            <p className="mt-4 text-gray-600">
              Whether it’s a morning ride to stay fit or an adventurous journey
              across trails, Hercules offers the perfect companion. With
              lightweight frames, sturdy build quality, and stylish designs,
              these bicycles make every ride exciting, safe, and reliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

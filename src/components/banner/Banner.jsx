import React from 'react';

const Banner = () => {
    return (
    <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
       <div class="md:w-1/2">
        <p class="text-3xl drop-shadow-xl font-bold">Launching Beyond Boundaries</p>
        <p class="text-xl mb-10 drop-shadow-sm  leading-none">A Journey into the Cosmos through the Innovation and Engineering of SpaceX</p>
        <a href="/" class=" text-white bg-sky-600  py-3 px-6 font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
        </div>  
    </div>
    );
};

export default Banner;
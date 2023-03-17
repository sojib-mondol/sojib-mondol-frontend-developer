import React from 'react';

const CapsuleCard = ({rocket}) => {

    const {flickr_images, rocket_name, description} = rocket;
    

    return (
    <div class=" flex flex-col justify-center shadow-xl">
        <div class="relative  flex flex-wrap mx-auto justify-center">
            <div class="min-w-[340px]flex flex-col group mb-5">
                <div
                    class="h-48 md:h-56 lg:h-[24rem] w-full border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                    <img src={flickr_images}
                        class="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                        alt="" />

                    <div
                        class="absolute z-10  w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                    </div>

                </div>
                <a href="./single_post.html"
                    class=" block text-black text-center hover:text-primary transition-colors duration-150 text-lg md:text-xl mb-1">
                    {rocket_name}</a>


                <p class="mb-4 font-light px-5 text-sm md:text-sm  text-gray-400">{description.slice(0,150)+" . . ."} </p>

                <div class="flex justify-center gap-x-3">
                    <a href="/track_order.html"
                        class="px-5 py-2 border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white transition-all outline-none bg-white  font-bold">
                        View</a>
                </div>

            </div>
        </div>
    </div>
    );
};

export default CapsuleCard;
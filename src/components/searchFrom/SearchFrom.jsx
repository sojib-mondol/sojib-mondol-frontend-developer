import React from 'react';

// status, original_launch, and type

const SearchFrom = () => {
    return (
        <div className='mx-10 my-10'>
            <h2 className='text-center text-3xl md:text-4xl font-medium lg:text-5xl'>Search</h2>
            <form class="w-full max-w-sm mx-auto  mt-5 lg:mt-10">
                <div className='grid grid-cols-2 gap-5'>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="status">
                    Status
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" placeholder="Enter Status" />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="original_launch">
                    Original Launch
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="original_launch" type="text" placeholder="Enter Original Launch" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 font-bold mb-2" for="type">
                    Type
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="type" type="text" placeholder="Enter Type" />
                </div>
                <div class="flex items-center justify-center">
                    <button class="btn btn-outline   w-full  mt-2 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                    </button>
                </div>
                </div>
            </form>

        </div>
    );
};

export default SearchFrom;
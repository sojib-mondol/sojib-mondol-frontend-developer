import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section class="bg-black  bg-no-repeat bg-cover" style={{ backgroundImage: `url("https://thumbs.gfycat.com/FluidAdorableLarva-size_restricted.gif")`}}>
            <div class="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div class="flex flex-col items-center max-w-sm mx-auto text-center">
                    <p class="p-3 text-sm font-medium text-red-600 rounded-full bg-red-50 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    </p>
                    <h1 class="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page Not Found</h1>
                    <p class="mt-4 text-gray-500 dark:text-gray-800">The page you are looking for doesn't exist</p>

                    <div class="flex items-center  mt-6  ">
                        

                        <Link to='/'>
                            <button class=" px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg  hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                Take me home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CapsuleCard from './CapsuleCard';
import "pure-react-carousel/dist/react-carousel.es.css";
import ReactPaginate from 'react-paginate';
import Skeleton from '../skeleton/Skeleton';

const GridComponents = () => {

    const {data: rockets = [], isLoading} = useQuery({
        queryKey: ['rockets'],
        queryFn: async() =>{
            const res = await fetch('https://api.spacexdata.com/v3/rockets');
            const data = await res.json();
            return data;
        }
    });
    
    
    // ------------ for pagination 
   const [currentItems, setCurrentItems] = useState([]);
   const [pageCount, setPageCout] = useState(0);
   const [itemOffset, setItemOffset] = useState(0);
   const itemsPerPage = 3;

   
   useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(rockets.slice(itemOffset, endOffset));
    setPageCout(Math.ceil(rockets.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, rockets]);

   

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % rockets.length;
        setItemOffset(newOffset);
    };

    if(isLoading){
        return <Skeleton></Skeleton>;
    };

    return (
       <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 mx-5 gap-10 mb-10'>
                { 
                    currentItems && currentItems?.map((n, i) => <CapsuleCard 
                    rocket = {n} 
                    key = {i}
                    ></CapsuleCard>)

                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=" >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< "
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            />
       </div>

    
    );
}


export default GridComponents;
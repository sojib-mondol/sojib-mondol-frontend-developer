import React from 'react';
import Banner from '../../components/banner/Banner';
import GridComponents from '../../components/gridComponents/GridComponents';
import SearchFrom from '../../components/searchFrom/SearchFrom';

const Home = () => {
    return (
        <div> 
            <Banner></Banner>
            <SearchFrom></SearchFrom>
            <GridComponents></GridComponents>
        </div>
    );
};

export default Home;
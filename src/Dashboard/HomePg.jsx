
import React from 'react';
import Chart from './Chart';
import ProgressBar from './ProgressBar';
import ItemLists from './ItemLists';

function HomePg() {
    return (
        <div className="min-h-screen bg-blue-100 p-4">
           
            <div className="flex flex-wrap justify-center gap-6 py-4">
                <ItemLists type="user" />
                <ItemLists type="orders" />
                <ItemLists type="products" />
                <ItemLists type="balance" />
                <ItemLists type="revenue" />
            </div>

            
            <div className="flex flex-col xl:flex-row justify-between items-center gap-8 py-4">
                <ProgressBar />
                <Chart height={400} title="Revenue" />
            </div>
        </div>
    );
}

export default HomePg;

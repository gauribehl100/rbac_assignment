import React from 'react';
import Chart from './Chart';
import ProgressBar from './ProgressBar';
import ItemLists from './ItemLists';

function HomePg() {
    return (
        <div className="grid grid-cols-[17%_83%] md:grid-cols-1">
           

            <div className="relative">
             

                <div className="bg-blue-200 h-40 md:h-24 rounded-b-2xl" />
                <div className="grid grid-cols-4 gap-5 p-6 -mt-20 md:grid-cols-3 sm:grid-cols-2 sm:-mt-10">
                    <ItemLists type="user" />
                    <ItemLists type="orders" />
                    <ItemLists type="products" />
                    <ItemLists type="balance" />
                    <ItemLists type="revenue" />
                </div>

                <div className="flex justify-between gap-16 ">
                    <ProgressBar />
                    <Chart height={450} title="Revenue" />
                </div>

            </div>
        </div>
    );
}

export default HomePg;

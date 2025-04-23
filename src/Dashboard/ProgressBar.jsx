
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Tooltip } from '@mui/material';
import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

function ProgressBar() {
    const data01 = [
        { name: 'Users', value: 23 },
        { name: 'Hotels', value: 30 },
        { name: 'Rooms', value: 15 },
        { name: 'Blogs', value: 19 },
        { name: 'Balance', value: 20 },
    ];

    return (
        <div className="flex flex-col p-4 sm:p-6 shadow-lg rounded-lg bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
            <div className="flex items-center justify-between text-gray-500">
                <p className="text-base sm:text-lg font-medium">Total Revenue</p>
                <MoreVertOutlinedIcon />
            </div>

            <div className="mt-6 text-center">
                <div className="w-full max-w-[250px] h-[250px] mx-auto">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#536def"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-gray-500 mt-4">Total sales made today.</p>
                <p className="text-3xl font-semibold text-gray-900 flex items-center justify-center mt-4">
                    <AttachMoneyOutlinedIcon className="text-4xl" />
                    324
                </p>
            </div>

            <div className="mt-6 text-gray-500">
                <p>Previous transactions processing. Last payments may not be included.</p>
                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                    <div className="text-center">
                        <p className="text-sm">Last Week</p>
                        <p className="text-green-600 flex items-center justify-center text-lg font-medium mt-2">
                            <KeyboardArrowUpOutlinedIcon />
                            $11.9k
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm">Last Month</p>
                        <p className="text-red-600 flex items-center justify-center text-lg font-medium mt-2">
                            <KeyboardArrowUpOutlinedIcon />
                            $12.4k
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;

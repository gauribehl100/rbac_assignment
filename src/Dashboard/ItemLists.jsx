import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { blue } from '@mui/material/colors';
import React from 'react';
import { Link } from 'react-router-dom';

function ItemLists({ type }) {
    let data;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                count: 232,
                icon: (
                    <PermIdentityIcon
                        style={{
                            color: '#FF74B1',
                            backgroundColor: '#FFD6EC',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all users',
                linkto: '/users',
            };
            break;
        case 'orders':
            data = {
                title: 'ORDERS',
                isMoney: false,
                count: 34,
                icon: (
                    <LocalGroceryStoreOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#FFF38C',
                        }}
                        className="icon"
                    />
                ),
                link: 'View all orders',
                linkto: '/orders',
            };
            break;
        case 'products':
            data = {
                title: 'PRODUCTS',
                isMoney: true,
                count: 107,
                icon: (
                    <AttachMoneyOutlinedIcon
                        style={{
                            color: '#367E18',
                            backgroundColor: '#A7FFE4',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all products',
                linkto: '/products',
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                count: 444,
                isMoney: true,
                icon: (
                    <PaidOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor: '#B1B2FF',
                        }}
                        className="icon"
                    />
                ),
                link: 'See all details',
                linkto: '/',
            };
            break;
            case 'revenue':
            data = {
                title: 'REVENUE',
                count: 500000,
                isMoney: true,
                icon: (
                    <AttachMoneyOutlinedIcon
                        style={{
                            color: '#AC7088',
                            backgroundColor:'#90caf9',
                        }}
                        className="icon"
                    />
                ),
                link: 'See the Revenue Details',
                linkto: '/',
            };
            break;
        default:
            break;
    }

    return (
        <div className="flex flex-col justify-between p-4 rounded-lg bg-white shadow-md">
            <div className="flex justify-between items-center">
                <p className="text-gray-500">{data.title}</p>
                <span
                    className={`flex items-center ${
                        true ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                    <KeyboardArrowUpIcon />
                    20 %
                </span>
            </div>

            <div className="my-4 text-2xl font-roboto flex items-center">
                {data.isMoney && <AttachMoneyOutlinedIcon />}
                {data.count}
            </div>

            <div className="flex justify-between items-center">
                <Link
                    to={data.linkto}
                    className="text-gray-500 hover:text-black underline transition-colors duration-300"
                >
                    {data.link}
                </Link>
                <div className="p-2 rounded-md text-xl">{data.icon}</div>
            </div>
        </div>
    );
}

export default ItemLists;

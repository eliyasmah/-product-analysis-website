import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className=' md:grid grid-cols-2 justify-center gap-4 my-24 md:mx-24'>
            <div>
                <p className='text-xl text-blue-500 font-bold text-center'>MONTH WISE SELL</p>
                <LineChart width={450} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
            <div>
                <p className='text-xl text-blue-500 font-bold text-center'>INVESTMENT vs REVENUE</p>
                <BarChart width={450} height={350} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;
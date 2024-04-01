import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ReferralChart = () => {

    const earningsData = [
        { month: 'Jan', earnings: 2400 },
        { month: 'Feb', earnings: 1398 },
        { month: 'Mar', earnings: 9800 },
        { month: 'Apr', earnings: 3908 },
        { month: 'May', earnings: 4800 },
        { month: 'Jun', earnings: 3800 },
        { month: 'Jul', earnings: 4300 },
        { month: 'Aug', earnings: 5400 },
        { month: 'Sep', earnings: 7600 },
        { month: 'Oct', earnings: 6908 },
        { month: 'Nov', earnings: 9800 },
        { month: 'Dec', earnings: 12300 },
    ];

    return (
        <div>
            <BarChart
                width={600}
                height={300}
                data={earningsData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Bar dataKey="earnings" fill="black" />
            </BarChart>
        </div>
    );
};

export default ReferralChart;
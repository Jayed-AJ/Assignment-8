
import React from 'react';
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const BookedChart = ({bookedDocs}) => {
    console.log(bookedDocs);
    return (
        <div className= 'mt-7 lg:mt-28 '>
            {/*Bar Chart */}
            <h1 className="mt-5 text-3xl md:text-2xl text-center font-semibold">Consultation Fee Chart</h1>
            <div className='mt-7 mx-auto px-2 flex justify-center items-center w-full md:w-10/12 lg:w-3/5 xl:w-1/2'>
                <ResponsiveContainer width="100%" height={300}>
                 <BarChart data={bookedDocs}>
                    <XAxis
                        tick={{fontSize: 10}}
                        dataKey="name"
                        label={{ position: 'insideBottomRight', value: 'Doctor Name', offset: -20,  }}
                    />
                    <YAxis label={{ position: 'insideTopLeft', value: 'Consultation Fee', angle: -90, dy: 180, offset: -5 }} />
                    <Bar dataKey="consultationFee" fill="#55bad3">
                        <LabelList
                            dataKey="name"
                            position="inside"
                            fill="#fff"
                            fontSize={10}
                            angle={-90}
                        />
                    </Bar>
                    {/* <RechartsDevtools /> */}
                 </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BookedChart;
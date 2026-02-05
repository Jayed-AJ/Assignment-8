import React from 'react';
import succDoc from "../../../assets/success-doctor.png";
import succPati from "../../../assets/success-patients.png";
import succRev from "../../../assets/success-review.png";
import succStaff from "../../../assets/success-staffs.png"
import CountUp from 'react-countup';
const Service = () => {
    return (
        <div className='mt-8 md:mt-12 p-5'>
            <h1 className='text-3xl md:text-4xl font-bold text-center'>We Provide Best Medical Services</h1>
            <p className='text-center text-md mt-6'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5'>
                <div className="p-4 rounded-lg bg-white ">
                    <img src={succDoc} alt="image" className="w-10 mx-auto mb-3" />
                    <h1 className="text-4xl font-bold md:text-5xl text-center">
                        <CountUp start={0} end={200} delay={3} duration={20}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} /><span>+</span>
                                </div>
                            )}
                        </CountUp>
                    </h1>
                    <p className="text-lg font-semibold text-gray-400 text-center mt-2">Total Doctor</p>
                </div>
                <div className="p-4 rounded-lg bg-white ">
                    <img src={succPati} alt="image" className="w-10 mx-auto mb-3" />
                    <h1 className="text-4xl font-bold md:text-5xl text-center">
                        <CountUp start={0} end={1999} delay={3} duration={40}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} /><span>+</span>
                                </div>
                            )}
                        </CountUp>
                    </h1>
                    <p className="text-lg font-semibold text-gray-400 text-center mt-2">Total Patient</p>
                </div>
                <div className="p-4 rounded-lg bg-white ">
                    <img src={succRev} alt="image" className="w-10 mx-auto mb-3" />
                    <h1 className="text-4xl font-bold md:text-5xl text-center">
                        <CountUp start={0} end={1500} delay={3} duration={35}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} /><span>+</span>
                                </div>
                            )}
                        </CountUp>
                    </h1>
                    <p className="text-lg font-semibold text-gray-400 text-center mt-2">Total Reveiws</p>
                </div>
                <div className="p-4 rounded-lg bg-white ">
                    <img src={succStaff} alt="image" className="w-10 mx-auto mb-3" />
                    <h1 className="text-4xl font-bold md:text-5xl text-center">
                        <CountUp start={0} end={800} delay={3} duration={30}>
                            {({ countUpRef }) => (
                                <div>
                                <span ref={countUpRef} /><span>+</span>
                                </div>
                            )}
                        </CountUp>
                    </h1>
                    <p className="text-lg font-semibold text-gray-400 text-center mt-2">Total Staff</p>
                </div>
            </div>
        </div>
    );
};

export default Service;
import React from 'react';
import useData from '../../hooks/useData';
import HomeReviews from '../HomeReviews/HomeReviews';


const HomePage = () => {
    const [userData, setUserData] = useData();
    return (
        <div>
            <div className='md:flex mx-10 my-20 items-center'>
                <div className='w-[80%] mr-10 mb-5'>
                    <h1 className='text-4xl md:text-7xl font-sans mb-8'>Choose your laptop  <br />
                        <span className='text-blue-500 mt-4'>from 'laptop Bazar'</span></h1>
                    <p className='text-gray-500'>Build Your Own Laptop allows you to make zero compromises when ordering a new laptop! This is for the people who know what they want. Pick your laptop model, pick all of your components, and our professional technicians will assemble it right here in the USA!</p>
                    <button className='bg-gray-300 m-4  py-2 px-5 rounded text-blue-800'>Live Demo</button>
                </div>
                <div>
                    <img className='w-[90%] h-[500px]' src="https://img.freepik.com/free-psd/close-up-laprop-screen-mockup-isolated_253059-120.jpg?w=740" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-5xl text-center'>Customer Review</h1>
                <div className='md:grid grid-cols-3 gap-10 mx-20 mt-16'>
                    {
                        userData.slice(0, 3).map(data => <HomeReviews
                            key={data._id}
                            data={data}
                        ></HomeReviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;
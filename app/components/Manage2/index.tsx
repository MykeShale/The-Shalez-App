"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const names = [
    {
        heading: "Business",
        price: 1400,
        user: 'per user, per Year',
        button: "Choose This Plan",
        profiles: '3 Social Profiles',
        posts: '30 Scheduled Posts Per Profile',
        templates: "Ad Management",
        view: "Weekly Report",
        support: 'Monthly Online meetings',
        category: 'yearly'
    },
    {
        heading: "Startup",
        price: 800,
        user: 'per user, per Year',
        button: "Choose This Plan",
        profiles: '2 Social Profiles',
        posts: '20 Scheduled Posts Per Profile',
        templates: "Ad Management",
        view: "Monthly Report",
        support: 'Monthly Online meetings',
        category: 'yearly'
    },
    {
        heading: "Agency",
        price: 2200,
        user: 'per user, per Year',
        button: "Choose This Plan",
        profiles: 'Unlimited Social Profiles',
        posts: 'Unlimited Scheduled Posts Per Profile',
        templates: "Ad Management",
        view: "Weekly Report",
        support: 'Weekly Online meetings',
        category: 'yearly'
    },
    {
        heading: "Business",
        price: 130,
        user: 'per user, per Month',
        button: "Choose This Plan",
        profiles: '3 Social Profiles',
        posts: '30 Scheduled Posts Per Profile',
        templates: "Ad Management",
        view: "Weekly Report",
        support: 'Monthly Online meetings',
        category: 'monthly'
    },
    {
        heading: "Startup",
        price: 80,
        user: 'per user, per Month',
        button: "Choose This Plan",
        profiles: '2 Social Profiles',
        posts: '20 Scheduled Posts Per Profile',
        templates: "Ad Management",
        view: "Monthly Report",
        support: 'Monthly Online meetings',
        category: 'monthly'
    },
    {
        heading: "Agency",
        price: 200,
        user: 'per user, per Month',
        button: "Choose This Plan",
        profiles: 'Unlimited Social Profiles',
        posts: 'Unlimited Scheduled Posts Per Profile',
        templates: "Ad Management",
        view: "Weekly Report",
        support: 'Weekly Online meetings',
        category: 'monthly'
    },


]

const Manage = () => {

    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-auto max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl text-theme2 font-black'>Let's Help you Manage All Your  <br /> Social Media Profiles.</h3>


                <div className='md:flex md:justify-around mt-20'>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Increase Brand Visibility</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Generate Leads and Conversions</h4>
                    </div>
                    <div className='flex gap-5 justify-center md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'> Improve Brand Reputation</h4>
                    </div>
                </div>


                <div className='mt-6 relative'>
                    <div className='dance-text mb-5'><strong>Checkout our Plans</strong></div>
                    <Image src="/images/manage/toggle.svg" alt="toggle-image" width={24} height={24} className="toggleImage" />
                    <div className='flex justify-center'>
                        <h3 className='text-sm font-medium mr-5'>Billed Monthly</h3>
                        <Switch
                            checked={enabled}
                            onChange={toggleEnabled}
                            className={`${enabled ? 'bg-theme2' : 'bg-theme1'
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                            <span className="sr-only text-black">Enable notifications</span>
                            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                            />
                        </Switch>
                        <h3 className='text-sm font-medium ml-5'>Billed Yearly</h3>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage'>
                    {filteredData.map((items, i) => (
                        <div className='manageTabs text-center p-10' key={i}>
                            <h4 className='text-2xl font-bold mb-3'>{items.heading}</h4>
                            <h2 className='text-5xl sm:text-65xl font-extrabold mb-3'>${items.price}</h2>
                            <p className='text-sm font-medium text-darkgrey mb-6'>{items.user}</p>
                            <button className='text-sm font-bold text-theme2 bg-transparent hover:bg-theme1 hover:text-white border-2 rounded-full py-4 px-12 mb-6'>{items.button}</button>
                            <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
                            <h3 className='text-base font-medium text-darkgrey mb-3 mt-6'>{items.profiles}</h3>
                            <h3 className='text-base font-medium text-darkgrey mb-3'>{items.posts}</h3>
                            <h3 className='text-base font-medium text-darkgrey mb-3'>{items.templates}</h3>
                            <h3 className='text-base font-medium text-darkgrey mb-3'>{items.view}</h3>
                            <h3 className='text-base font-medium text-darkgrey mb-3'>{items.support}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Manage;

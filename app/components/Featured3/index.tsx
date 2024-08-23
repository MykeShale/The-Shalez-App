"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA

interface DataType {
    heading: string;
    heading1: string;
    imgSrc: string;
    link: string;
}

const postData: DataType[] = [
    {
        heading: 'Markie Properties',
        heading1: 'Real Eastate Website',
        imgSrc: '/images/featured/web2.png',
        link: 'https://markieproperties.com',
    },
    {
        heading: 'Jamo Audio Empire',
        imgSrc: '/images/featured/web3.png',
        heading1: 'E-commerce Website',
        link: 'https://jamoaudio.com',
    },

    {
        heading: 'The Shalez Mall',
        imgSrc: '/images/featured/web1.png',
        heading1: 'E-commerce Website',
        link: 'https://shop.theshalez.co.ke',
    },
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 2000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg- pt-40 py-20 marginFeature bg-featured">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center pt-48 pb-10 md:pt-96">
                        <h3 className="text-4xl sm:text-6xl font-bold text-theme2 my-2"></h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-theme2 text-opacity-50 lg:mr-48 my-2"></h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-theme2 text-opacity-25 lg:-mr-32 my-2"></h3>
                    </div>
                    <h3 className="text-center text-4xl sm:text-6xl font-bold text-theme2 pt-16 my-2">Website Samples</h3>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <Image src={items.imgSrc} alt="gaby" width={336} height={520} className="rounded-2xl hover:shadow-2xl hover:cursor-pointer shadow-md" />
                                    <div className="w-345 justify-center items-center">
                                        <h4 className='sm:text-3xl font-medium sm:pt-6 text-center sm:text-start mt-5 text-theme2 pl-5'>{items.heading}</h4>
                                        <h4 className='sm:text-2xl font-base sm:pt-4 text-center sm:text-start text-theme2 pl-5'>{items.heading1}</h4>
                                        <button className='text-sm md:text-md font-medium hover:shadow-xl bg-theme3 text-white py-4 px-2 md:py-2 md:px-6 rounded-full hover:bg-theme1 ml-10'>
                                            <Link href={items.link} passHref target="_blank" className="justify-center">View Live</Link>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}

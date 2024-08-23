"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Jamo Audio 2D Logo',
        imgSrc: '/images/featured/feat1.png',
    },
    {
        heading: 'Buzztech 2D Logo',
        imgSrc: '/images/featured/feat2.png',
    },
    {
        heading: 'Sisko Electronics Logo',
        imgSrc: '/images/featured/feat3.png',
    },
    {
        heading: 'Bella Fashions Logo.',
        imgSrc: '/images/featured/feat4.png',
    }
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
            autoplay: true,
            speed: 7000,
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
            <div className="bg-theme2 py-20 marginFeature bg-featured">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8  '>

                    <div className="text-center pt-48 pb-10 md:pt-96">
                        <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">Featured works.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">Featured works.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-32 my-2">Featured works.</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <Image src={items.imgSrc} alt="gaby" width={336} height={520} className="rounded-2xl" />
                                    <div className="w-345">
                                        <h4 className='sm:text-3xl font-medium sm:pt-6 text-center sm:text-start mt-10 text-white'>{items.heading}</h4>
                                    </div>
                                </div>

                            </div>

                        ))}
                    </Slider>
                </div>
                <div className="justify-center">
                    <div className="flex justify-center pb-20">
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-theme3 text-white py-2 px-4 md:py-4 md:px-14 rounded-full hover:bg-theme1'>
                            <Link href='/projects'>View Projects</Link>
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

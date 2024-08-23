"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    heading: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        heading: 'Stano Sales Agency',
        imgSrc: '/images/featured/feat5.png',
    },
    {
        heading: 'Instigators Group Logo',
        imgSrc: '/images/featured/feat6.png',
    },
    {
        heading: 'Bazenga Logistics Logo',
        imgSrc: '/images/featured/feat7.png',
    },
    {
        heading: 'Bella Fashions Logo.',
        imgSrc: '/images/featured/feat8.png',
    }
]

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "rgba(255, 255, 255, 0.3)", padding: "28px", borderRadius: "20px" }}
            onClick={onClick}
        />
    );
}


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            speed: 1000,
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
            <div className="bg- py-10 pb-20 marginFeature bg-featured">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center pt-48 pb-10 md:pt-96">
                        <h3 className="text-4xl sm:text-6xl font-bold text-theme2 my-2"></h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-theme2 text-opacity-50 lg:mr-48 my-2"></h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-theme2 text-opacity-25 lg:-mr-32 my-2"></h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>

                                <div className='bg-transparent m-3 pb-12 my-10 rounded-3xl'>
                                    <Image src={items.imgSrc} alt="gaby" width={336} height={520} className="rounded-2xl hover:shadow-2xl hover:cursor-pointer shadow-md" />
                                    <div className="w-345">
                                        <h4 className='sm:text-2xl font-medium sm:pt-6 text-center sm:text-justify mt-1 text-theme2 pl-3'>{items.heading}</h4>
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

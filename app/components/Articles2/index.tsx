"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "6 min",
        heading: 'Keyword Search Strategies!',
        heading2: 'SEO Essentials.',
        name: "Published on The Shalez",
        date: 'Feb 6, 2024',
        imgSrc: '/images/articles/article5.png',
    },
    {
        time: "4 min",
        heading: 'We Launch CashFin💡',
        heading2: 'Startup this Month',
        name: "Published on The Shalez",
        date: 'Feb 19, 2024',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "5 min",
        heading: 'Digital Marketing Pro?',
        heading2: 'This is for You!💎',
        name: "Published on The Shalez",
        date: 'March 9, 2024',
        imgSrc: '/images/articles/article3.png',
    },
    {
        time: "5 min",
        heading: 'Fintech App Launch',
        heading2: 'Delia is Here🔥',
        name: "Published on The Shalez",
        date: 'March 10, 2024',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on The Shalez",
        date: 'March 1, 2024',
        imgSrc: '/images/articles/article2.png',
    },
    {
        time: "5 min",
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
        name: "Published on Startupon",
        date: 'Dec 19, 2023',
        imgSrc: '/images/articles/article3.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
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
            <div className="bg-lightgrey py-2" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-theme2 text-lg font-normal tracking-widest"></h3>
                        <h3 className="text-4xl sm:text-6xl text-theme2 font-bold"></h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto rounded-xl" />

                                    <Link href="">
                                        <h3 className="absolute bg-theme3 text-white hover:bg-theme1 hover:shadow-xl py-2 px-4 rounded-full article-img">{items.time} read</h3>
                                    </Link>
                                    <h4 className='text-xl font-bold pt-2 text-black'>{items.heading}</h4>
                                    <h4 className='text-md font-medium pt-2 text-black'>{items.heading2}</h4>

                                    <div>
                                        <h3 className='text-base font-normal pt-5 pb-2 opacity-75'>{items.name}</h3>
                                        <h3 className='text-base font-normal pb- opacity-75'>{items.date}</h3>
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

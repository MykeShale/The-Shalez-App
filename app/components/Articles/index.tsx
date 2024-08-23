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
        heading: 'Design like a Pro!',
        heading2: 'Best Laptops to use.💻',
        name: "Published on The Shalez",
        date: 'Feb 6, 2024',
        imgSrc: '/images/articles/article.png',
    },
    {
        time: "4 min",
        heading: 'We Launch CashFin💡',
        heading2: 'Startup this Month!',
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
        heading: 'We Launch Delia',
        heading2: 'Webflow this Week!',
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
            slidesToShow: 3,
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
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-theme2 text-lg font-normal tracking-widest">ARTICLES</h3>
                        <h3 className="text-4xl sm:text-6xl text-theme2 font-bold">Our latest posts.</h3>
                    </div>


                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />

                                    <Link href='#'>
                                        <h3 className="absolute bg-theme3 text-white hover:bg-theme1 hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time} read</h3>
                                    </Link>

                                    <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                    <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                    <div>
                                        <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                        <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
                                    </div>

                                </div>

                            </div>

                        ))}
                    </Slider>
                </div>
                <div className="flex justify-center pb-20">
                    <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-theme3 text-white py-2 px-4 md:py-4 md:px-14 rounded-full hover:bg-theme1'>
                        <Link href='/blog'>View Blogs</Link>
                    </button>
                </div>
            </div>

        );
    }
}

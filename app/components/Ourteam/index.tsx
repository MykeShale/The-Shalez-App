import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-theme2 text-center">Our team belives you <span className="text-theme1">deserve</span> <br /> only the best...</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">delivering exceptional quality in every aspect of Graphic Design, Digital Marketing,<br /> Web Development and Hosting.</h3>
            <div className='grid grid-cols-1 my-16'>
                <Image src="/images/team/teamimg2.jpg" alt="office-image" height={684} width={1296} className="rounded-3xl" />
            </div>
        </div>
    )
}

export default index;

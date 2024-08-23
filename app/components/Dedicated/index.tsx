import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16 flex-auto'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/CEO1.jpg" alt="man-icon" width={316} height={430} className="mx-auto md:mx-0 rounded-3xl" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <h2 className="text-4xl lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-theme2 text-center lg:text-start">We're <span className="text-theme1">Dedicated</span> to solve people's Digital Solutions.</h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">Start now, because as soon as you stop thinking “I’m too young”, you will start thinking “I’m too old.”</p>
                        <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Myke Shale, CEO</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;


const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-theme2 bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">BELIEFS</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Honesty <span className="text-offwhite">and hard work are our beliefs.</span></h3>
                    <h5 className="text-white pt-2 mb-5 text-center sm:text-start">We uphold honesty and hard work as our guiding principles, ensuring excellence in all projects.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-theme3 er-blue hover:bg-theme1">Get Started</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">BUILD</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-theme1 leading-snug mb-5 text-center sm:text-start"><span className="text-theme2">Build</span> that great idea that you have.</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">Turn your great idea into reality with our expert design, marketing, and development services.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-theme3 border hover:bg-theme1">Learn more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;

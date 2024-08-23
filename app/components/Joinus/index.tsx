
const Join = () => {
    return (
        <div className="bg-joinus my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-theme2 text-lg font-normal tracking-widest">REACH US</h3>
                    <h2 className="text-4xl sm:text-6xl text-theme1 font-bold my-6 leading-10"> Take your business to <br /> the new level.</h2>
                    <p className="text-lightblack text-base font-normal">Reach us for all Business Enquiries and/or Partnerships</p>
                </div>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input type="name" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black" placeholder="Your name" autoComplete="off" />
                        </div>
                        <div>
                            <input type="email" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="Your email" autoComplete="off" />
                        </div>
                        <div className="sm:mr-3">
                            <button type="submit" className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-theme3 hover:bg-theme1">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Join;

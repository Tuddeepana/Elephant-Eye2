import FooterImage from '../assets/img/common/footerb.jpg';

const Footer = () => {
    return (
        <div>
            <section
                className="py-10 bg-blue-900 sm:pt-16 lg:pt-24"
                style={{ backgroundImage: `url(${FooterImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
                        <div>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="/" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> Home </a>
                                </li>
                                <li>
                                    <a href="/rooms" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> Rooms </a>
                                </li>
                                <li>
                                    <a href="/gallery" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> Gallery </a>
                                </li>
                                <li>
                                    <a href="/aboutus" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> About Us </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-white">Help</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="https://wa.me/94707676750" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> Customer
                                        Support </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> </a>
                                </li>
                                <li>
                                    <a
                                        href="https://bitl.to/3C1A"
                                        title=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"
                                    >
                                        Location
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-white">Social Media</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="https://web.facebook.com/people/Elephant-Eye-Yala/61563611715014/?mibextid=qi2Omg&rdid=akFNQNyLongnv1k0&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2FktS2hcziAKxEkKYT%2F%3Fmibextid%3Dqi2Omg%26_rdc%3D1%26_rdr"
                                       title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"
                                       target="_blank" rel="noopener noreferrer"> Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/elephanteyehotelyala/?igsh=MWRpc2o5ODA4dmppcQ%3D%3D"
                                       title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"
                                       target="_blank" rel="noopener noreferrer"> Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/@elephanteyehotel?_t=8q7nSdZ3phc&_r=1" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"
                                       target="_blank" rel="noopener noreferrer"> TikTok </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/@elephanteyehotel?si=NRdRuwINsqVq0yJS" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"
                                       target="_blank" rel="noopener noreferrer"> YouTube </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-white">Contact</p>
                            <ul className="mt-8 space-y-4">
                                <li>
                                    <a href="mailto:contact@elephanteye.com" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> Email:
                                        contact@elephanteye.com </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/94707676750" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"
                                       target="_blank" rel="noopener noreferrer"> Whatsapp: +94 70 767 6750 </a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> Tel:
                                        047 223 8902</a>
                                </li>
                                <li>
                                    <a href="#" title=""
                                       className="text-white font-semibold transition-all duration-200 hover:text-white focus:text-white"> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-20 md:mt-28 2xl:mt-32">
                        <div className="lg:flex lg:items-center lg:justify-between">
                            <div className="sm:flex sm:items-center sm:justify-start sm:space-x-8">
                                {/* Social Media Icons */}
                            </div>
                            <p className="mt-6 text-sm text-white font-semibold lg:mt-0 text-center">All copyrights reserved by Elephant Eye- © 2024 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <p className="mt-6 text-sm text-white font-semibold lg:mt-0 text-center">
                    Website Designed & Developed by{' '}
                    <a
                        href="https://www.wrenix.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-blue-300"
                    >
                        Wrenix (Pvt) Ltd
                    </a>
                </p>
            </section>
        </div>
    );
};

export default Footer;
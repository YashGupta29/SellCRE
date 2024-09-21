import Image from 'next/image';
import './hero.css'

function Hero() {
    return (
        <section id='hero' className='hero'>
            <div className="hero_container container">
                    <div className='hero_text'>
                        <h1 className="hero_title">
                            <span className='bold'>Sell CRE Faster</span> with OMs & Ads created in <span className='bold'>minutes</span>
                        </h1>
                        <h6 className="hero_subtitle">
                            Create beautiful Commercial Real Estate Offering Memorandums, Flyers & Ads in minutes with our AI powered platform
                        </h6>
                        <div className="hero_cta_wrapper">
                            <div className="hero_btn">
                                <div className="hero_btn_text">Try for free</div>
                                <div className="hero_btn_icon">
                                    <Image src={'./right_arrow.svg'} height={17} width={17} alt='Right arrow' />
                                </div>
                            </div>
                            <div className="hero_demo_wrapper">
                                <div className="hero_demo_play_cta">
                                    <Image src={'./play.svg'} height={26} width={26} alt='Play' />
                                </div>
                                <p className="hero_demo_text">
                                    Watch Demo
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hero_image">
                        <Image src={"/hero.png"} layout='fill' alt='Hero' />
                    </div>
            </div>
        </section>
    )
}

export default Hero;
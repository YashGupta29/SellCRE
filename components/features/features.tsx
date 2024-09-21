import FeatureCard from '../feature-card/feature-card';
import './features.css'

function Features() {
    return (
        <section id="features" className="features">
            <div className="features_container">
                <div className="features_title">
                    <p className="features_title_top">Create OMs and Ads For</p>
                    <h3 className="features_title_bottom">Various Real Estate
                        Property Types</h3>
                </div>
                <div className="features_list">
                    <div className="feature_item">
                        <FeatureCard img='/retail.svg' text='Retail' />
                    </div>
                    <div className="feature_item">
                        <FeatureCard img='/multi-family.svg' text='Multi-family' />
                    </div>
                    <div className="feature_item">
                        <FeatureCard img='/office.svg' text='Office' />
                    </div>
                    <div className="feature_item">
                        <FeatureCard img='/industrial.svg' text='Industrial' />
                    </div>
                    <div className="feature_item">
                        <FeatureCard img='/hotel.svg' text='Hotel' />
                    </div>
                    <div className="feature_item">
                        <FeatureCard img='/land.svg' text='Land' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
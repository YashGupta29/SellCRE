import Image from 'next/image';
import './feature-card.css'

interface IFeatureCardProps {
    img: string;
    text: string;
}

function FeatureCard({ img, text}: IFeatureCardProps) {
    return (
        <div className='feature_card'>
            <div className="feature_card_img">
                <Image src={img} layout='fill' alt='Feature' />
            </div>
            <p className="feature_card_text">
                {text}
            </p>
        </div>
    )
}

export default FeatureCard;
import Image from 'next/image';
import './sample-card.css'

interface ISampleCardProps {
    img: string;
    title: string;
    subtitle: string;
}

function SampleCard({ img, title, subtitle }: ISampleCardProps) {
    return (
        <div className="sample_card">
            <div className="sample_card_img">
                <Image src={img} layout='fill' alt='Sample' />
            </div>
            <div className="sample_card_info">
                <h1 className="sample_card_info_title">{title}</h1>
                <p className="sample_card_info_subtitle">{subtitle}</p>
                <div className="sample_card_cta">
                    View Sample Template
                </div>
            </div>
        </div>
    )
}

export default SampleCard;
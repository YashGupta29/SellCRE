import SampleCard from '../sample-card/sample-card';
import './sample.css'

function Sample() {
    return (
        <section id="sample" className="sample">
            <div className="sample_container">
                <h1 className="sample_title">
                    Sample OMs created with our platform
                </h1>
                <div className="sample_list">
                    <div className="sample_list_item">
                        <SampleCard img={'/retail-om.png'} height={214} width={260} title={'Retail Offering Memorandum'} subtitle={"strip centers, street retail, vehicle related, and more"} />
                    </div>
                    <div className="sample_list_item">
                        <SampleCard img={'/multi-family-om.png'} height={214} width={260} title={'Multi-family Offering Memorandum'} subtitle={"garden, low-rise, mid-rise, high-rise."} />
                    </div>
                    <div className="sample_list_item">
                        <SampleCard img={'/office-om.png'} height={214} width={260} title={'Office Offering Memorandum'} subtitle={"all classes of office buildings, loft/creative, medical"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sample;
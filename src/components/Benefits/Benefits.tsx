import BenefitSection from "./BenefitSection"

import { IBenefit } from "@/types"

interface Props {
    benefits: IBenefit[];
    label: string;
}

const Benefits: React.FC<Props> = ({ benefits, label }) => {
    return (
        <div id="features" className="scroll-mt-24">
            <h2 className="sr-only">{label}</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits

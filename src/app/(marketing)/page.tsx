import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import { BenefitsSection } from "@/components/marketing/benefits";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <Features />
            <BenefitsSection/>
            <Analysis />
            <CTA />
        </Wrapper>
    )
};

export default HomePage

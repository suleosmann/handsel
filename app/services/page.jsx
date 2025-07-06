import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import CorporateGovernanceSection from "@/components/services/CorporateGovernanceSection";
import CyberGovernanceSection from "@/components/services/CyberGovernanceSection";
import AIGovernanceSection from "@/components/services/AIGovernanceSection"


export default function page() {
    return (
        <>
            <ServicesHeroSection/>
            <CorporateGovernanceSection/>
            <CyberGovernanceSection/>
            <AIGovernanceSection/>
        </>
    );
}

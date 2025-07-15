import HeroSection from "@/components/home/HeroSection";
import CorporateGovernanceSection from "@/components/services/CorporateGovernanceSection";
import CyberGovernanceSection from "@/components/services/CyberGovernanceSection";
import AIGovernanceSection from "@/components/services/AIGovernanceSection"
import GovernanceCards from "@/components/services/GovernanceCards";


export default function page() {
    return (
        <>
            <HeroSection/>
           <GovernanceCards/>
        </>
    );
}

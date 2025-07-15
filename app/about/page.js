import HeroSection from "@/components/home/HeroSection";
import AboutUsSection from "@/components/about/AboutUsSection";
import WhoWeWorkWithSection from "@/components/about/WhoWeWorkWithSection"
import GovernanceSection from "@/components/about/GovernanceSection";

export default function page() {
    return (
        <>
            <HeroSection />
            <AboutUsSection/>
            <WhoWeWorkWithSection/>
            <GovernanceSection/>
        </>
    );
}

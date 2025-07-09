import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutUsSection from "@/components/about/AboutUsSection";
import WhoWeWorkWithSection from "@/components/about/WhoWeWorkWithSection"
import GovernanceSection from "@/components/about/GovernanceSection";

export default function page() {
    return (
        <>
            {/*<AboutHeroSection />*/}
            <AboutUsSection/>
            <WhoWeWorkWithSection/>
            <GovernanceSection/>
        </>
    );
}

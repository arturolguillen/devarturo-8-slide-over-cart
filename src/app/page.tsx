import HeroSection from "@/components/HeroSection";
import HeroSectionImage from "@/components/HeroSectionImage";
import MainContent from "@/components/MainContent";
import TopNavbar from "@/components/TopNavbar";
import TopNavbarIcons from "@/components/TopNavbarIcons";
import TopNavbarLogo from "@/components/TopNavbarLogo";
import TopNavbarMenu from "@/components/TopNavbarMenu";

export default function Home() {
    return (
        <>
            <TopNavbar>
                <TopNavbarLogo />
                <TopNavbarMenu />
                <TopNavbarIcons />
            </TopNavbar>
            <MainContent>
                <HeroSection>
                    <HeroSectionImage />
                </HeroSection>
            </MainContent>
        </>
    );
}

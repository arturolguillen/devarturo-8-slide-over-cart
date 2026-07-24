import HeroSection from "@/components/HeroSection";
import HeroSectionContent from "@/components/HeroSectionContent";
import HeroSectionImage from "@/components/HeroSectionImage";
import MainContent from "@/components/MainContent";
import ProductSection from "@/components/ProductSection";
import ProductSectionTitle from "@/components/ProductSectionTitle";
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
                    <HeroSectionContent />
                </HeroSection>
                <ProductSection>
                    <ProductSectionTitle />
                </ProductSection>
            </MainContent>
        </>
    );
}

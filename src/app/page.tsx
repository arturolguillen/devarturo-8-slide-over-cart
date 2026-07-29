import CartOverlay from "@/components/CartOverlay";
import CartOverlayHeader from "@/components/CartOverlayHeader";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HeroSectionContent from "@/components/HeroSectionContent";
import HeroSectionImage from "@/components/HeroSectionImage";
import MainContent from "@/components/MainContent";
import ProductCard from "@/components/ProductCard";
import ProductGrid from "@/components/ProductGrid";
import ProductSection from "@/components/ProductSection";
import ProductSectionTitle from "@/components/ProductSectionTitle";
import TopNavbar from "@/components/TopNavbar";
import TopNavbarIcons from "@/components/TopNavbarIcons";
import TopNavbarLogo from "@/components/TopNavbarLogo";
import TopNavbarMenu from "@/components/TopNavbarMenu";
import products from "@/products";

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
                    <ProductGrid>
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </ProductGrid>
                </ProductSection>
            </MainContent>
            <Footer />
            <CartOverlay>
                <CartOverlayHeader />
            </CartOverlay>
        </>
    );
}

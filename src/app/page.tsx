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
        </>
    );
}

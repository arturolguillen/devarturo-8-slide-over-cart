import HeroImage from "@/images/hero.png";

export default function HeroSectionImage() {
    return (
        <div className="absolute inset-0 z-0">
            <div
                className="size-full bg-cover bg-center"
                data-alt={'A premium, cinematic photograph of high-end glass supplement jars on a clean marble countertop.'}
                style={{
                    backgroundImage: `url(${HeroImage.src})`,
                }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-r from-slate-50 via-slate-50/40 to-transparent"></div>
        </div>
    );
}
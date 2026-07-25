import PureWheyIsolateImage from "@/images/pure-whey-isolate.png";
import DailyVitalityMultiImage from "@/images/daily-vitality-multi.png";
import OmegaPlusLiquidImage from "@/images/omega-plus-liquid.png";
import type { StaticImageData } from "next/image";

export type Product = {
    id: number;
    name: string;
    description: string;
    price: string;
    image: StaticImageData;
};

const products: Product[] = [
    {
        id: 1,
        name: 'Pure Whey Isolate',
        description: 'Vanilla Bean | 2lb',
        price: '$45.00',
        image: PureWheyIsolateImage,
    },
    {
        id: 2,
        name: 'Daily Vitality Multi',
        description: '60 Capsules | Vegan',
        price: '$35.00',
        image: DailyVitalityMultiImage,
    },
    {
        id: 3,
        name: 'Omega Plus Liquid',
        description: 'Lemon Fresh | 250ml',
        price: '$28.00',
        image: OmegaPlusLiquidImage,
    },
];

export default products;
import { Montserrat, Playfair_Display, Inter } from "next/font/google";

export const monsterrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '400'],
});

export const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500',  '600',],
    style: ['normal'],
});

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500',  '600',],
    style: ['normal'],
});


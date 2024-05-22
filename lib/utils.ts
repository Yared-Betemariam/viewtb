import { type ClassValue, clsx } from "clsx";
import {
  Inter,
  Montserrat,
  Noto_Sans,
  Noto_Sans_Ethiopic,
  Nunito,
  Open_Sans,
  Poppins,
  Roboto,
  Source_Sans_3,
} from "next/font/google";
import { twMerge } from "tailwind-merge";

export const font = Noto_Sans_Ethiopic({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  // weight: ["100", "300", "400", "500", "700", "900"],
});
// const poppins = Poppins({
//   subsets: ["latin"],
// });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

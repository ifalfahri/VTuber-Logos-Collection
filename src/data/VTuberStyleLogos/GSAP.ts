import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const GSAP: IBrand = {
  name: "GSAP",
  categories: [BrandCategory.OTHER],
  logos: [
    {
      url: "/VTuberStyleLogos/GSAP/GSAP.png",
      credit: getCredit(Author.ifalfahri),
    },
  ],
};

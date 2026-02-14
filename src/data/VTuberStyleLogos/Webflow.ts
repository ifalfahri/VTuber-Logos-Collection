import { BrandCategory } from "../categories";
import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Webflow: IBrand = {
  name: "Webflow",
  categories: [BrandCategory.OTHER],
  logos: [
    {
      url: "/VTuberStyleLogos/Webflow/Webflow.png",
      credit: getCredit(Author.ifalfahri),
    },
  ],
};

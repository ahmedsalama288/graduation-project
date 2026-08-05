import { Cairo, Reem_Kufi } from "next/font/google";

export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
});

export const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["600", "700"],
});

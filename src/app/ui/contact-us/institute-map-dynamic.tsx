"use client";

import dynamic from "next/dynamic";
import MapLoadingSpinner from "@/app/ui/shared-ui/loading-spinner/map-loading-spinner";

const InstituteMap = dynamic(
  () => import("@/app/ui/contact-us/institute-map"),
  { ssr: false, loading: () => <MapLoadingSpinner /> }
);

export default function InstituteMapDynamic() {
  return <InstituteMap />;
}

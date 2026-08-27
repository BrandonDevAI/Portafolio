"use client";

import dynamic from "next/dynamic";

export const CoverParticles = dynamic(
    () => import("./cover-particle").then((module) => module.CoverParticles),
    { ssr: false, loading: () => null },
);
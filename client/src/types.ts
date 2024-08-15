import { Dispatch, SetStateAction } from "react";

export interface BannerState {
    description: string;
    timer: number;
    link: string;
}

export interface BannerProps {
    banner: BannerState;
    setBanner: Dispatch<SetStateAction<BannerState>>;
}
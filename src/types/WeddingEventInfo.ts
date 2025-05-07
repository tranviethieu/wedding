import {ImageModel} from "@/types/Image";

export interface WeddingEventInfoModel {
    title: string;
    date: string;
    time: string;
    address: string;
    image: ImageModel;
    mapAddress: string;
    active: boolean;
}

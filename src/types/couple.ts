import {ImageModel} from "@/types/Image";

export interface CoupleModel {
    male: PersonModel;
    female: PersonModel;
}

export interface PersonModel {
    fullName: string;
    description?: string;
    avatar: ImageModel;
    address?: string;
    mapAddress?: string;
}
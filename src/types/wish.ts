export interface Wish {
    _id?: string;
    name: string;
    emailOrPhone: string;
    wish: string;
    dateCreated?: string;
}

export interface WishesProps {
    wishes: Wish[];
}
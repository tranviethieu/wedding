import { Timestamp } from "firebase/firestore";

export interface Wish {
  id?: string;
  name: string;
  emailOrPhone: string;
  wish: string;
  dateCreated: Timestamp;
}
export interface WishesProps {
  wishes: Wish[];
}

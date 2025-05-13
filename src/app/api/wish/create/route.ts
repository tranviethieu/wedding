import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

type Wish = {
  name: string;
  emailOrPhone: string;
  wish: string;
};

export async function POST(req: NextRequest) {
  try {
    const data: Wish = await req.json();

    const docRef = await addDoc(collection(db, "wishes"), {
      name: data.name,
      emailOrPhone: data.emailOrPhone,
      wish: data.wish,
      dateCreated: Timestamp.now(),
    });

    return NextResponse.json(
      {
        message: "Cám ơn bạn đã gửi lời chúc!",
        data: {
          ...data,
          id: docRef.id,
          dateCreated: new Date().toISOString(),
        },
      },
      { status: 201 } // ✅ chuẩn RESTful
    );
  } catch (error) {
    console.error("Error saving wish:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}

// Optional: reject other methods (not required)
export function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "react-toastify";
import { Wish } from "@/types/wish";

export const useWishesListener = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [initialLoad, setInitialLoad] = useState(true); // Cờ để xác định lần tải đầu tiên

  useEffect(() => {
    const wishesQuery = query(
      collection(db, "wishes"),
      orderBy("dateCreated", "desc")
    );

    const unsubscribe = onSnapshot(wishesQuery, (snapshot) => {
      const newWishes: Wish[] = [];

      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data() as DocumentData;
        const wish: Wish = {
          id: change.doc.id,
          name: data.name,
          emailOrPhone: data.emailOrPhone,
          wish: data.wish,
          dateCreated: data.dateCreated,
        };

        if (change.type === "added") {
          newWishes.push(wish);

          // Kiểm tra nếu không phải lần tải đầu tiên và lời chúc có thời gian gần với hiện tại
          if (!initialLoad) {
            const currentTime = new Date();
            const wishTime = wish.dateCreated.toDate(); // Firebase Timestamp

            // Chỉ gọi toast nếu lời chúc có thời gian gần với thời gian hiện tại (1 phút chẳng hạn)
            if (Math.abs(currentTime.getTime() - wishTime.getTime()) < 6000) {
              //   toast.success(
              //     `🎉 ${wish.name} vừa gửi lời chúc ${
              //       wish.wish ? wish.wish : ""
              //     }!`
              //   );
              toast(
                `💌 Bạn ${wish.name}: ${
                  wish.wish ? wish.wish : "Chúc hai bạn hạnh phúc!"
                }`,
                {
                  style: {
                    backgroundColor: "#fff0f5",
                    color: "#a52a2a",
                    borderLeft: "5px solid #ff69b4",
                    borderRadius: "12px",
                    padding: "16px",
                  },
                }
              );
            }
          }
        }
      });

      if (initialLoad) {
        // Nếu là lần đầu tiên tải trang, chỉ gán toàn bộ dữ liệu mà không hiển thị toast
        const allWishes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Wish, "id">),
        }));

        setWishes(allWishes); // Cập nhật danh sách wishes
        setInitialLoad(false); // Đặt lại cờ khi đã tải xong lần đầu
      } else {
        // Nếu không phải lần đầu, cập nhật thêm các mục mới vào danh sách
        setWishes((prev) => {
          const allWishes = [...newWishes, ...prev];
          // Loại bỏ các mục trùng id
          const uniqueWishes = allWishes.filter(
            (value, index, self) =>
              index === self.findIndex((t) => t.id === value.id)
          );
          return uniqueWishes;
        });
      }
    });

    return () => unsubscribe();
  }, [initialLoad]);

  return wishes;
};

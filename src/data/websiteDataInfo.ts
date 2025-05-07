import { CoupleModel } from "@/types/couple";
import { WeddingModel } from "@/types/wedding";
import { OurStoryModel } from "@/types/ourStory";

export const CoupleInfo: CoupleModel = {
  male: {
    fullName: "Đỗ Trinh",
    avatar: {
      src: "/images/avatars/male_1_1.jpg",
      with: 500,
      height: 500,
    },
    description:
      "Là một chàng trai hiền lành, chu đáo và đam mê nấu ăn. Sự quan tâm chân thành của anh dành cho mọi người khiến anh luôn được yêu quý và trân trọng.",
    address: "Số 21B, xóm Sung, thôn Đống, Cao Viên, Thanh Oai, Hà Nội",
    mapAddress: "https://maps.app.goo.gl/qvcKc5QoV1A27Hd57",
  },
  female: {
    fullName: "Lê Phương",
    avatar: {
      src: "/images/avatars/female_1_1.jpg",
      with: 500,
      height: 500,
    },
    description:
      "Là một cô gái đáng yêu, nội tâm sâu sắc và luôn yêu thương gia đình. Sự dịu dàng, biết lắng nghe và chân thành của cô khiến mọi người cảm thấy gần gũi, ấm áp.",
    address: "Số nhà 27, đường 3, Hưng giáo, Tam Hưng, Thanh Oai, Hà Nội",
    mapAddress: "https://maps.app.goo.gl/MQ2mr7zchtMsPgED7",
  },
};

export const WeddingInfo: WeddingModel = {
  weddingDate: "2024/11/10",
};

export const OurStoryInfos: OurStoryModel[] = [
  {
    date: "2025/11/10",
    caption: "",
    image: {
      src: "/images/stories/4.jpg",
      with: 1000,
      height: 1000,
    },
    content:
      "Sau bao nhiêu ngày chờ đợi, tình yêu của chúng ta đơm hoa kết trái bằng một lễ cưới ấm áp và ngọt ngào. Ngày hôm nay, em sẽ chính thức là cô dâu của anh và sau này là mẹ của các con anh. Cảm ơn vì mình luôn là một phần trong cuộc sống của nhau. Anh mong sau này dù tương lai có như thế nào thì chúng ta luôn nhớ rằng “tình yêu không phải là nhìn chằm chằm vào nhau, mà là cùng nhau nhìn về một hướng”.",
  },
  {
    date: "2024/09/02",
    caption: "",
    image: {
      src: "/images/stories/3.jpg",
      with: 1000,
      height: 1000,
    },
    content:
      "Anh cầu hôn em sau khi chúng ta đã công khai tình yêu của chúng mình tới gia đình và bạn bè. Cảm giác hạnh phúc vỡ òa khi em nói lời đồng ý. Chúng ta thật hạnh phúc và may mắn vì hai bên gia đình và bạn bè thân thiết đều ủng hộ và gửi lời chúc mừng tới hai đứa. Hai đứa bắt đầu ấp ủ ý tưởng và những kế hoạch chuẩn bị về một hôn lễ giản dị, ấm áp và ngọt ngào.",
  },
  {
    date: "2023/10/27",
    caption: "",
    image: {
      src: "/images/stories/2.jpg",
      with: 1000,
      height: 1000,
    },
    content:
      "Buổi hẹn hò đầu tiên của chúng ta tại quán Nhà gỗ café. Khi anh đến thì đã thấy một cô gái xinh xắn, nhỏ nhắn ngồi bên góc bàn cạnh cửa sổ, chúng ta có những giây phút chuyện trò ban đầu thật ngại ngùng. Mãi sau này khi chúng ta chính thức yêu nhau, em hay đùa rằng “buổi hẹn đầu tiên thấy anh cũng ít nói, nhưng em quay sang thấy anh đẹp trai nên lại tiếp tục cố gắng gợi chuyện”. Anh không nghĩ rằng nhan sắc bình thường của anh cũng là một thứ vũ khí lợi hại đến thế😊. Và anh cũng hiểu ra rằng, tình yêu thực sự phải bắt đầu từ sự cố gắng của cả hai phía.",
  },
  {
    date: "2023/10/20",
    caption: "",
    image: {
      src: "/images/stories/1.jpg",
      with: 1000,
      height: 1000,
    },
    content:
      "Ngày mà anh bắt đầu những tin nhắn đầu tiên làm quen em. Anh đã gõ gõ, rồi lại xóa xóa nhưng vẫn không nghĩ ra được gì hay hơn là những dòng tin nhắn thật nhạt nhẽo “Chào em, anh là bạn của Thuyên”. Vậy mà em cũng đã phản hồi lại anh bằng những tin nhắn đáng yêu. Chúng ta tạo dựng lên tình yêu ngọt ngào bắt đầu từ những điều đơn giản như vậy. Đến bây giờ, anh luôn biết ơn vì mình có những người bạn uy tín và tuyệt vời đến vậy, đã giúp chúng ta có duyên gặp và yêu nhau.",
  },
];

export const Metadata = {
  title: `Thư mời cưới ${CoupleInfo.male.fullName} & ${CoupleInfo.female.fullName}`,
  icon: {
    type: "image/png",
    src: "/icons/logo_32.png",
  },
  keywords: "Happy, Wedding, My Wedding, Lễ cưới, My Love, Love u, Love You",
  description:
    "Chúng tôi trân trọng mời bạn đến chung vui trong ngày cưới của chúng tôi.",
  image: {
    src: "/images/meta/wedding.jpg",
    type: "image/jpeg",
    width: 100,
    height: 100,
  },
  url: "",
};

export const WeddingEventInfos = [
  {
    title: "LỄ CƯỚI NHÀ GÁI",
    date: "2024/11/09",
    time: "16:30",
    address: `Tại gia đình nhà gái - ${CoupleInfo.female.address}`,
    image: {
      src: "/images/events/1.jpg",
      type: "image/jpeg",
      width: 300,
      height: 300,
    },
    mapAddress: CoupleInfo.female.mapAddress,
    active: true,
  },
  {
    title: "TIỆC CƯỚI NHÀ GÁI",
    date: "2024/11/10",
    time: "09:00",
    address: `Tại gia đình nhà gái - ${CoupleInfo.female.address}`,
    image: {
      src: "/images/events/2.jpg",
      type: "image/jpeg",
      width: 300,
      height: 300,
    },
    mapAddress: CoupleInfo.female.mapAddress,
    active: false,
  },
  {
    title: "LỄ CƯỚI NHÀ TRAI",
    date: "2024/11/10",
    time: "14:00",
    address: `Tại gia đình nhà trai - ${CoupleInfo.male.address}`,
    image: {
      src: "/images/events/3.jpg",
      type: "image/jpeg",
      width: 300,
      height: 300,
    },
    mapAddress: CoupleInfo.male.mapAddress,
    active: true,
  },
  {
    title: "TIỆC CƯỚI NHÀ TRAI",
    date: "2024/11/09",
    time: "16:30",
    address: `Tại gia đình nhà trai - ${CoupleInfo.male.address}`,
    image: {
      src: "/images/events/4.jpg",
      type: "image/jpeg",
      width: 300,
      height: 300,
    },
    mapAddress: CoupleInfo.male.mapAddress,
    active: true,
  },
];

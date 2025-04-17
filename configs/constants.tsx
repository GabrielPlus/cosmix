import { IsIPAD } from "@/themes/app.constant";
import { Dimensions, Image } from "react-native";
// import { scale, verticalScale } from "react-native-size-matters";
// //@ts-ignore
// import One from "@/assets/images/onboarding/1.png";
// //@ts-ignore
// import Two from "@/assets/images/onboarding/2.png";
// //@ts-ignore
// import Three from "@/assets/images/onboarding/3.png";

// export const onBoardingSlides: onBoardingSlidesTypes[] = [
//   {
//     color: "#40E0D0",
//     title: "Explore",
//     image: (
//       <Image
//         source={One}
//         style={{
//           width: IsIPAD ? verticalScale(285) : verticalScale(320),
//           height: IsIPAD ? verticalScale(345) : verticalScale(330),
//         }}
//       />
//     ),
//     secondTitle: "Our Community",
//     subTitle:
//       "Find the perfect course to enhance your career prospects and skill set",
//   },
//   {
//     color: "#A7F893",
//     title: "Set Your",
//     image: (
//       <Image
//         source={Two}
//         style={{
//           width: IsIPAD ? scale(285) : scale(320),
//           height: IsIPAD ? verticalScale(345) : verticalScale(330),
//         }}
//       />
//     ),
//     secondTitle: "Own Goal",
//     subTitle:
//       "Personalize your study plan with flexible timelines that suit you best",
//   },
//   {
//     color: "#FFC0CB",
//     image: (
//       <Image
//         source={Three}
//         style={{
//           width: IsIPAD ? scale(285) : scale(320),
//           height: IsIPAD ? verticalScale(345) : verticalScale(330),
//         }}
//       />
//     ),
//     title: "Complete full",
//     secondTitle: "Course",
//     subTitle:
//       "Achieve certification by completing courses with dedicated effort",
//   },
// ];

// onboarding variables
export enum Side {
  LEFT,
  RIGHT,
  NONE,
}
export const MIN_LEDGE = 25;
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
export const MARGIN_WIDTH = MIN_LEDGE + 50;
export const PREV = WIDTH;
export const NEXT = 0;
export const LEFT_SNAP_POINTS = [MARGIN_WIDTH, PREV];
export const RIGHT_SNAP_POINTS = [NEXT, WIDTH - MARGIN_WIDTH];


export const categoriesData = [
  {
    title: "Spa",
    image:
      "https://res.cloudinary.com/duwa651xm/image/upload/v1744811778/spa_yog6nx.jpg",
  },
  {
    title: "Gua Sha hoidot",
    image:
      "https://res.cloudinary.com/duwa651xm/image/upload/v1744812019/Gua_Sha_hoidot_rs4ojt.webp",
  },
  {
    title: "Ripset",
    image:
      "https://res.cloudinary.com/duwa651xm/image/upload/v1744812132/ripset_d1mxrc.jpg",
  },
  {
    title: "Meikki",
    image:
      "https://res.cloudinary.com/duwa651xm/image/upload/v1744812258/meikki_azvm9y.webp",
  },
  {
    title: "Hieronnat",
    image:
      "https://res.cloudinary.com/duwa651xm/image/upload/v1744812340/Hieronnat_oxk7j0.jpg",
  },
  {
    title: "Löydä lisää hoitoja",
    image: 
      "https://res.cloudinary.com/duwa651xm/image/upload/v1744812506/woman-washing-head-hairsalon-1-scaled_irxkgc.jpg", 
  },
];



export const NotificationsData = [
  {
    id: "1",
    title: "New Answer Received",
    message: "You have a new answer in your question",
    status: "Unread",
  },
  {
    id: "2",
    title: "New Reply Received",
    message: "You have a new reply in your support question",
    status: "Unread",
  },
];
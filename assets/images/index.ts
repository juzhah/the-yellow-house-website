import { StaticImageData } from "next/image";

import room1_2 from "@/images/room-1-2.jpeg";
import room1_3 from "@/images/room-1-3.jpeg";
import room1_4 from "@/images/room-1-4.jpeg";

export const images: { [key: string]: StaticImageData[] } = {
  apt1: [room1_2],
  apt2: [room1_2],
  apt3: [room1_2],
  apt4: [room1_2, room1_3, room1_4],
  apt5: [room1_2, room1_3, room1_4],
  apt6: [room1_2, room1_3, room1_4],
  apt7: [room1_2, room1_3, room1_4],
  apt8: [room1_2, room1_3, room1_4],
  apt9: [room1_2, room1_3, room1_4],
  apt10: [room1_2, room1_3, room1_4],
};

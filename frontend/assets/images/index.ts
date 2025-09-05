import { StaticImageData } from "next/image";

import { room_1 } from "./room-1";
import { room_2 } from "./room-2";
import { room_4 } from "./room-4";
import { room_6 } from "./room-6";
import { room_7 } from "./room-7";
import { cabin } from "./cabin";
import { yellow_house } from "./yellow-house";
/*import { yellowHouse } from "./yellow-house"; */

export const images: { [key: string]: StaticImageData[] } = {
  apt1: room_1,
  apt2: room_2,
  apt4: room_4,
  apt6: room_6,
  apt7: room_7,
  cabin: cabin,
  yellow_house: yellow_house,
};

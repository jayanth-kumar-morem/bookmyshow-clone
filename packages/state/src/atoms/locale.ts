import { atom } from "recoil";
import {LocationInfo} from "@repo/common"

export const LocaleState = atom({
  key: "Locale",
  default: {} as LocationInfo,
});

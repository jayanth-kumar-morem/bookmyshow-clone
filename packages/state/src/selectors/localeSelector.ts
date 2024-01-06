import { LocaleState } from "../atoms/locale";
import { selector } from "recoil";

export const LocaleStateSelector = () => selector({
    key: 'LocaleState',
    get: ({get}) => {
        return get(LocaleState);
    }
})
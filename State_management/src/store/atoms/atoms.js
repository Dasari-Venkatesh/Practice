import { atom, selector } from 'recoil'

export const networkAtom = atom({
    key : "networkAtom",
    default:90
})

export const jobsAtom = atom({
    key : "jobsAtom",
    default:90
})

export const messagingAtom = atom({
    key : "messagingAtom",
    default:90
})

export const notificationAtom = atom({
    key : "notificationAtom",
    default:90
})

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector",
    get : ({get}) => {
        const totalCount = get(notificationAtom)+get(messagingAtom)+get(jobsAtom)+get(networkAtom);
        return totalCount;
    }
})
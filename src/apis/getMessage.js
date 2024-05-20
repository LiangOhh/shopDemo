import myHttp from "@/utils/http";

export function getMessage() {
    return myHttp({
        url: 'home/category/head'
    })
}

export function getBanner() {
    return myHttp({
        url: 'home/banner'
    })
}

export function getNew() {
    return myHttp({
        url: 'home/new'
    })
}
export function getHot() {
    return myHttp({
        url: 'home/hot'
    })
}

export function getGood() {
    return myHttp({
        url: 'home/goods'
    })
}
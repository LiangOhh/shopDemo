import myHttp from "@/utils/http";

export function getMessage() {
    return myHttp({
        url: 'home/category/head'
    })
}
export function getBanner(params = {}) {
    // 不传默认为1
    const { distributionSite = '1' } = params
    return myHttp({
        url: '/home/banner',
        params: {
            distributionSite
        }
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
export function getCategory(id) {
    return myHttp({
        url: '/category',
        params: {
            id
        }
    })
}
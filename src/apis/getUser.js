import myHttp from "@/utils/http";
export function getUserInfo(account, password) {
    return myHttp({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}

export const getLike = ({ limit = 4 }) => {
    return myHttp({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}
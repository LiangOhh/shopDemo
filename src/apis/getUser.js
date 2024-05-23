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
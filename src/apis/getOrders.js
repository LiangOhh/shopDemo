import myHttp from "@/utils/http";
export const getOrder = () => {
    return myHttp({
        url: '/member/order/pre'
    })
}

import myHttp from "@/utils/http";

export function getMessage() {
    return myHttp({
        url: 'home/category/head'
    })
}


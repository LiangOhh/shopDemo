import myHttp from "@/utils/http";

/* export const getDetail = (id) => {
    return myHttp({
      url: '/goods',
      params: {
        id
      }
    })
  } */

export function getDetail(id) {
    return myHttp({
        url: '/goods',
        params: {
            id
        }
    })
}

export function fetchHotGoodsAPI({ id, type, limit = 3 }) {
    return myHttp({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}
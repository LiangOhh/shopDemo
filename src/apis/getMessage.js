import myHttp from "@/utils/http";

export function testMessage() {
    /*   myHttp({
          url: 'home/category/head'
      }).then(
          res => {
              console.log(res)
          }
      ) */
    return myHttp({
        url: 'home/category/head'
    })
}


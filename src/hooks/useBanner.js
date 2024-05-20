import { getBanner } from '@/apis/getMessage'
import { ref } from 'vue'
let bannerArray = ref([])

export default function () {
    function getBannerArray() {
        getBanner().then(
            res => {
                bannerArray.value = res.result
            }
        )
        console.log(1, bannerArray.value)
    }
    return { bannerArray, getBannerArray }
}


import { ref, onMounted } from "vue"
import { getBanner } from "@/apis/getMessage"
export function useBanner() {
    const bannerArray = ref([])
    const getBannerMessage = () => {
        getBanner({
            distributionSite: '2'
        }).then(
            res => {
                bannerArray.value = res.result
            }
        )
        console.log('调用hooks')
    }
    onMounted(() => {
        getBannerMessage()
    })
    return { bannerArray }
}
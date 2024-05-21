import { ref, onMounted } from "vue"
import { getBanner } from "@/apis/getMessage"

export function useBanner() {
    const bannerArray = ref([])
    const getBannerMessage = async () => {
        const res = await getBanner({
            distributionSite: '2'
        })
        bannerArray.value = res.result
    }
    onMounted(() => getBannerMessage())
    return { bannerArray }
}
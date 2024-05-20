import { useIntersectionObserver } from '@vueuse/core'
// 按需导出
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el:指令绑定的元素,监听元素
                // binding:绑定值
                // console.log(el, binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }],) => {
                        // console.log(isIntersecting);
                        if (isIntersecting) {
                            el.src = binding.value
                            // 防止重复监听
                            stop()
                        }
                    },
                )
            },
        })
    }
}
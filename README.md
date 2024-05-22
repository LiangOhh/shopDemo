# 自定义主题

导入element Plus

构建工具：vite

字体库: iconfont(font-class引用)

vite配置文件

安装依赖

```js
npm i sass -D
```

```js

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  }
})

```

样式文件index.scss

```scss
/* 只需要重写你需要的即可 */
@forward 'element-plus/theme-chalk/src/common/var.scss' with ($colors: ('primary': ( // 主色
            'base': #27ba9b,
        ),
        'success': ( // 成功色
            'base': #1dc779,
        ),
        'warning': ( // 警告色
            'base': #ffb302,
        ),
        'danger': ( // 危险色
            'base': #e26237,
        ),
        'error': ( // 错误色
            'base': #cf4444,
        ),
    ))
```

#  VueUse

官网:https://vueuse.org/

使用该插件获取滚动距离

# home页面效果代码

+ 鼠标hover显示

```scss
.layer {
   //...
   // 控制隐藏,后续鼠标&:hover后block
    display: none;
}
// 关键样式  hover状态下的layer盒子变成block
&:hover {
	.layer {
		display: block;
    }
}
```

+ 轮播效果使用el-carousel组件实现

组件指南:https://element-plus.org/zh-CN/component/carousel.html#carousel-%E8%B5%B0%E9%A9%AC%E7%81%AF

+ 自定义数据懒加载,使用app.directive()自定义指令

+ VueUse监听界面useIntersectionObserver

https://vueuse.org/core/useIntersectionObserver/#useintersectionobserver

```js
import { useIntersectionObserver } from '@vueuse/core'
app.directive('img-lazy', {
    mounted(el, binding) {
        // el:指令绑定的元素,监听元素
        // binding:绑定值
        // console.log(el, binding.value)
        useIntersectionObserver(
            el,
            //isIntersecting布尔值判断是否进入视图
            ([{ isIntersecting }],) => {
                console.log(isIntersecting);
                if (isIntersecting) {
                    el.src = binding.value
                }
            },
        )
    },
})
```

```vue
//使用自定义指令
<img v-img-lazy="item.picture"/>
```



# category效果

+ element plus 的[Breadcrumb](https://element-plus.org/zh-CN/component/breadcrumb.html)组件实现

+ 使用RouterLink标签的active-class属性设置激活样式

+ 路由缓存问题:

  1. 销毁组件,阻止组件服用(给routerview增加key值为路由路径)

  2. 监听路由变化(使用onBeforeRouteUpdate)

  

+ 使用[tab-pane](https://element-plus.org/zh-CN/component/tabs.html#tab-pane-%E5%B1%9E%E6%80%A7)标签进行发送请求切换排序
+ 使用[infinite-scroll](https://element-plus.org/zh-CN/component/infinite-scroll.html#infinite-scroll-%E6%97%A0%E9%99%90%E6%BB%9A%E5%8A%A8)标签进行无限滚动

+ 使用scrollBehavior切换重置滚动条

# detail效果

+ 放大镜效果

1. VueUse中的[useMouseInElement](https://vueuse.org/core/useMouseInElement/#usemouseinelement)获取鼠标位置

```vue
<script setup>
import { useMouseInElement } from '@vueuse/core'
const target = ref(null)
//监听ref为target的节点
const { elementX, elementY, isOutside } = useMouseInElement(target)
</script>
<template>
<div ref="target">      
    监听标记ref的节点
</div>
<template/>
```

2. 滑块移动边界判定

   ![image-20240522150547451](C:\Users\椋\AppData\Roaming\Typora\typora-user-images\image-20240522150547451.png)


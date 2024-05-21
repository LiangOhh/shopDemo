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

  


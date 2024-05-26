import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
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
  }, build: {
    // target指的是js的兼容版本，默认是['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14']
    // 相关值可以是一个es版本(最低支持es2015)，或者相关的流浪器版本
    // 该部分任务由esbuild完成
    target: "es2015",
    // 打包之后的文件放的文件夹，该部分其实根据项目不一样是不一样的
    outDir: "dist",
    //内联资源限制，图片等资源的请求需要http请求，小于该值的资源可以直接转成base64之后,默认是4kb
    assetsInlineLimit: 4096,
    //懒加载组件之中的css分离，默认是true，css内联到对应的组件中，false的话项目中用到的css全放到一个css文件中
    cssCodeSplit: true,
    // cssTarget该熟悉是针对非主流浏览器使用，给css添加一个转换目标，类似target属性
    // cssMinify css的最小化压缩方式，我不是很懂，但应该和合并同类项类似
    // sourcemap:true是否储存sourcemap文件，这个文件记载着js源码和打包后代码的位置关系，方便定位出错，我暂时不知道有什么用
    // chunkSizeWarningLimitchunk大小限制，会和未压缩之前的chunk大小进行比较，有chunk超过这个值会报警，默认500kb
    // assetsDir静态资源的存放位置，默认是assets，注意这个静态资源包含了除js之外的其他内容
    assetsDir: "assets",
    // rollupOptions
    // vite使用rollup实现打包，这就是写具体配置的地方,为父没用过，先看一下
    rollupOptions: {
      // input不写其实啥事都没有,写的话，spa单页面必须注意要把html页面写进去否则不产生html页面
      // input:["./src/main.js",'./index.html'],
      // 出口，这里就涉及比较多的内容
      output: {
        // entry部分的文件命名，我们这里是spa,所以entry写死也没事,多入口的话需要注意了
        entryFileNames: "assets/js/[name]-[hash].js",
        // 自定义chunk如何命名法，包含懒加载或者自定义分包的一些内容的命名
        chunkFileNames: "assets/js/[name]-[hash].js",
        // 除js之外其他资源的存放
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        // 这里注意一下中括号里面的东西都是占位符
        // compact用于压缩rollup产生的临时代码
        compact: true,
        // 其他的一些内容
        // external哪些模块被排除在打包之外,我感觉cdn的引入应该挺需要使用这个
        // manualChunks自定义公共chunk,在多入口的时候很有用
      },
      // 设置为true之后,后续打包的时候只对更改的模块重新分析,加快打包速度
      cache: true
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;`,
      },
    },
  }
})

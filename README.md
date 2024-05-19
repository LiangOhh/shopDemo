# 自定义主题

导入element Plus

构建工具：vite

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


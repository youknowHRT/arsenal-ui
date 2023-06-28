### 🚀为什么在项目中引用了@vue/shared，但是在packages.json 文件中找不到这个依赖呢

因为根目录的.npmrc中设置了shamefully-hoist=true,平铺了依赖，而vue依赖了@vue/shared，所以node_modules中也有@vue/shared
https://github.com/element-plus/element-plus/discussions/9371

### 🚀icons-vue 项目generate批量生成vue组件，关于`ERROR: Top-level await is currently not supported with the "cjs" output format`报错
solve: 在package.json中添加`"type": "module"`


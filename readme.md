# 解决移动端1像素问题的Vue指令

```javascript
/**
 * 解决1像素问题的vue指令
 *
 * 食用方法：
 * 在给对应的DOM上加上对应指令即可
 * v-onepx: 四边
 * v-onepx-t: 顶边
 * v-onepx-b: 底边
 * v-onepx-l: 左边
 * v-onepx-r: 右边
 * data-border-color="#9d9d9d" 给边框加上自定义颜色
 * 传参：如果参数为falsy（除了undefined），则不渲染border，undefined默认渲染
 *
 * 自定义颜色：先读取标签属性data-border-color => 再读取css的border-color值 => 最后使用默认颜色
 *
 * 注意：
 * 1、绑定的元素必须显示声明其position值为：relative、fixed、absolute之一
 * 2、务必给对应的DOM清除掉border样式
 * 3、不能用于<input type="text" />标签等内部不能插入元素的标签
 */
```

demo地址：[https://helloworld20.github.io/onepx/dist](https://helloworld20.github.io/onepx/dist)

![当然移动端才能看到效果](https://helloworld20.github.io/onepx/dist/qrcode.png)


## 安装方法

```bash
yarn add https://github.com/HelloWorld20/onepx.git --save
```

暂时通过github链接安装，不想推到npm上

```javascript
import onepx from '@/directive/onepx';

Vue.use(onepx);
```

然后直接在业务中就可以使用`v-onepx`来给dom添加一像素边框了；

## 使用方法

正常使用
```vue
<template>
    <div v-onepx></div>
</template>
```

条件渲染
```vue
<template>
    <div v-onepx="false"></div>
</template>
```

自定义颜色
```vue
<template>
    <div v-onepx data-border-color="red"></div>
</template>

<!-- 或者css设置 -->
<template>
    <div style="border-color: red;"></div>
</template>

```

# todo list

* 有想法通过class查找、MutationObserver来监听DOM变化来更新的方法来实现一个通用的一像素解决方案。

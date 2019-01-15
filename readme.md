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
 * data-border-outset="true" 使用boxshadow来实现边框，是往外发散的，有些特殊情况有用
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

demo地址：

## 安装方法




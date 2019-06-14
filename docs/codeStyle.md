# 代码风格

1. **代码规范：** ES6
<br />

2. **代码缩进：** 两个空格
```javascript
// good
if (name === 'shb') {
  console.log(`my name is ${name}`)
}

// bad
if (name === 'shb') {
    console.log(`my name is ${name}`)
}
if (name === 'shb') {
 console.log(`my name is ${name}`)
}
```
<br />

3. **变量声明：**
    - 使用let、const代替var
    - 变量需要在头部声明
    - 变量必须先声明，后使用
    - 声明变量，必须使用
```javascript
// good
let name = 'suo'
const SCREEN_WIDTH = 1280

// bad
var name = 'suo'
var SCREEN_WIDTH = 1280
```
<br />

4. **注释**
  - **单行注释**
    + 变量声明，注释是声明语句之后
    + 代码块，注释在代码块前一行
    + 注释内容要与斜线之间空一格空格
```javascript
// good
let name = 'suo' // 这里是我的名字

// 如果是suo 那么需要特殊处理
if (name === 'suo') {
  ...
}
// bad
// 这里是我的名字
let name = 'suo' 
let name2 = 'bobo' //这是bobo
if (name === 'suo') { // 如果是suo 那么需要特殊处理
  ...
}
```
  - **多行注释**
    + 注释第一行，最后一行，不能有注释内容
    + 第二行之后的*号，要空一个空格
    + 注释内容要与*号间隔一个空格
```javascript
/**
 * 注释内容
 */
```
<br />

5. **不得出现多个连续空行**

<br />
 
6. **if语句之后**
  - 左大括号之前，有且仅有一个空格
  - else语句前后，有且仅有一个空格
  - 左大括号，不得单独一行
  - 小括号与字符之间不得有空格
```javascript
// good
if (name === 'suo') {
  ...
} else {
  ...
}

// bad
if( name === 'suo' )
{
  ...
}else{
  ...
}
```
<br />

7. **函数声明**
  - 小括号前后，有且仅有一个空格
  - 匿名函数，=>前后，有且仅有一个空格
  - 多个参数，参数后边逗号之后，有且仅有一个空格
  - 小括号内与字符连接位置，不得有空格
```javascript
// good
function fn1 (p1, p2, p3) {
  ...
}
var fn2 = () => {
  ...
}

// bad
function fn1( p1,p2,p3 ){
  ...
}
var fn2 = ( )=>{
  ...
}
```
<br />

8. **使用 ===,!== 替换 ==,!=**
```javascript
// good
if (name === 'suo') {
  ...
}
if (name !== 'suo') {
  ...
}

// bad
if (name == 'suo') {
  ...
}
if(name != 'suo') {

}
```
<br />

9. **不得出现无意义的阿拉伯数字,需要复制给变量，或者增加注释**
```javascript
// good
let totalPage = 20
if (curPage < totalPage) {
  ...
}

// bad
if (curPage < 20) {
  ...
}
```
<br />

10. **部分CSS使用简写**
    - margin
    - padding
    - transition
    - animiation
    - background
    - border

11. **font样式不得使用简写**
```css
.text {
  font-size: 10px;
  font-weight: blod;
  font-family: 'SimHei'
}
```
<br />

12. **html标签必须闭合**
```html
<!-- good -->
<div></div>
<img />

<!-- bad -->
<div>
<img>
```
<br />

13. **html中使用双引号，script中使用单引号**
```html
<div id="box"></div>
<script>
  var name = 'suo'
</script>
```
<br />

14. **行内元素不得包含块级元素**
```html
<!-- bad -->
<span>
  <div></div>
</span>
```
<br />

15. **重要位置、复杂业务逻辑、特殊情况处理、会产生歧义语句等，需要添加注释**
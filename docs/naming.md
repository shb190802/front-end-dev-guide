# 命名规范

<br />

1. **变量命名：** 使用小驼峰
```javascript
// good
let prodcutName = 'name'

// bad
let productname = 'name'
let Productname = 'name'
let ProductName = 'name'
```
<br />

2. **类命名：** 使用大驼峰
```javascript
// good
class HelloWorld {
  ...
}
function HelloWorld () {
  ...
}
HelloWorld.prototype.say = function () { /*...*/ }

// bad
class helloWorld {
  ...
}
class HELLO_WORLD {
  ...
}
```
<br />

3. **函数名：** 使用小驼峰
``` javascript
// good
function helloWorld () {
  ...
}

// bad
function HelloWorld () {
  ...
}
function HELLO_WORLD () {
  ...
}
```
<br />

4. **常量：** 全部大写字母加下划线
```javascript
// good
const HELLO_WORLD = 'nihao'

// bad
const helloWorld = 'nihoa'
```
<br />

5. **id选择器：** 使用小驼峰
```html
<!-- good -->
<div id="helloWorld"></div>

<!-- bad -->
<div id="hello-world"></div>
<div id="HelloWorld"></div>
```
<br />

6. **class选择器：** BEM规范
```html
<div class="dialog">
  <div class="dialog-title">
    <div class="dialog-title-icon"></div>
    <div class="dialog-title-text"></div>
  </div>
  <div class="dialog-content"></div>
</div>
```
<br />

7. **Vue文件命名：** 大驼峰

```
  │  App.vue
  │  main.js
  │  
  ├─assets
  │      logo.png
  │      
  └─components
          HelloWorld.vue
```
<br />

尽量使用英文命名，命名不要超过3个单词，英文简写应尽量表意。
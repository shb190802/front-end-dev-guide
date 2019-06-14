# Vue开发规范

1. **style需要声明scoped**
```vue
<style scoped>
.qq-group-img{
  display: block;
  margin: 0 auto;
  width: 240px;
}
</style>
```
<br />

2. **Name字段，需使用大驼峰**
```vue
<script>
export default {
  name: 'HelloWorld'
}
</script>
```
<br />

3. **props字段必须声明类型与默认值**
```javascript
export default {
  name: 'App',
  props: {
    name: {
      type: String,
      default: 'suo'
    }
  }
}
```
<br />

4. **vue组件声明，components、props、data需写在最上边**
```javascript
export default {
  name: 'App',
  components: {
    ...
  },
  props: {
    ...
  },
  data () {
    return {
      ...
    }
  }
}
```
<br />

5. **页面级组件需要放置views目录下**

<br />

6. **多页面应用，页面放置pages目录下**

<br />

7. **公共组件设计必须考虑重用，不得直接传递后台返回的Object，拆分为基础数据类型**
```html
  <Movie
    v-for="(item,index) in list"
    :index='index'
    :key='item.id'
    :name='item.resourceName'
    :poster='item.poster'
    :price='item.productPrice'
    @selected='doSelectMovie' />
```
<br />

8. **v-for与v-if不可同时使用，此类情况，请使用computed**
```html
<!-- bad -->
  <Movie
    v-for="(item,index) in list"
    v-if="item.id > 1"
    :index='index'
    :key='item.id'
    :name='item.resourceName'
    :poster='item.poster'
    :price='item.productPrice'
    @selected='doSelectMovie' />
```
<br />

9. **组件相关资源，使用就近原则，存放在组件目录下**

<br />

10. **v-bind与v-on使用缩写**
```vue
// good
<Movie
  :name='item.resourceName'
  :poster='item.poster'
  @selected='doSelectMovie' />

// bad
<Movie
  v-bind:name='item.resourceName'
  v-bind:poster='item.poster'
  v-on:selected='doSelectMovie' />
```
<br />

11. **使用mapGetters、mapMutations、mapActions**

<br />

12. **组件命名不能重复**

<br />

13. **ref的定义和使用时，遵循小驼峰命名**
```vue
<template>
  <ShowInfo ref='showInfo' />
</template>
<script>
  this.$refs.showInfo
</script>
```
<br />

14. **路径使用别名**
```javascript
import PasteEditor from '_c/paste-editor'
import { getTableDataFromArray } from '@/libs/util'
```
<br />

15. **mutations全部使用大写**
```javascript
  mutations: {
    CONCAT_ROUTES(state, routerList) {
      state.routers = routerList.concat(routes)
      state.hasGetRules = true
    }
  }
```
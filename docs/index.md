## vue与react的区别
- 数据是不是可变的
   - 1.react整体是函数式的思想,推崇结合immutable来实现数据不可变,react在setState之后会重新走渲染的流程，PureComponent就是重写了shouldComponentUpdate，然后在里面作了props和state的浅层对比。2.vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。react的性能优化需要手动去做，而vue的性能优化是自动的，但是vue的响应式机制也有问题，就是当state特别多的时候，Watcher也会很多，会导致卡顿，所以大型应用（状态特别多的）一般用react，更加可控。
- 通过js操作一切还是各自的处理方式
  - 1.react的思路是all in js，通过js来生成html，所以设计了jsx，还有通过js来操作css，社区的styled-component.2.vue是把html，css，js组合到一起，用各自的处理方式，vue有单文件组件，可以把html、css、js写到一个文件中，html提供了模板引擎来处理。
- 类式的组件写法还是声明式的写法
  - 1.react是类式的写法，api很少  2.而vue是声明式的写法，通过传入各种options，api和参数都很多。所以react结合typescript更容易一起写，vue稍微复杂.vue结合vue-class-component也可以实现类式的写法，但是还是需要通过decorator来添加声明，并不纯粹。react可以通过高阶组件（Higher Order Components--HOC）来扩展，而vue需要通过mixins来扩展。

- 什么功能内置，什么交给社区去做
  - react做的事情很少，很多都交给社区去做，vue很多东西都是内置的，写起来确实方便一些，
  比如 redux的combineReducer就对应vuex的modules，vuex的mutation是直接改变的原始数据，而redux的reducer是返回一个全新的state，所以redux结合immutable来优化性能，vue不需要。
## vue路由
- 动态路由传值    path:"/home/:id/name"   this.$route.params
- query传值   ?   this.$route.query
- 路由解耦   props :true 
- 编程式导航    this.$router.push  ({path:"/home",query:{}})



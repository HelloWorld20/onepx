<template>
  <div id="app">
    <div class="block">
      <div>默认</div>
      <div>指令</div>
    </div>
    <div class="block">
      <div class="default radius bottom">bottom</div>
      <div class="demo radius bottom" v-onepx-b>bottom</div>
    </div>
    <div class="block">
      <div class="default radius top" style>top</div>
      <div class="demo radius top" v-onepx-t>top</div>
    </div>
    <div class="block">
      <div class="default radius left">left</div>
      <div class="demo radius left" v-onepx-l>left</div>
    </div>
    <div class="block">
      <div class="default radius right">right</div>
      <div class="demo radius right" v-onepx-r>right</div>
    </div>
    <div class="block">
      <div class="default radius margin">margin</div>
      <div class="demo radius margin" v-onepx>margin</div>
    </div>
    <div class="block">
      <div class="default radius padding">padding</div>
      <div class="demo radius padding" v-onepx>padding</div>
    </div>
    <div class="block">
      <div class="default radius border-box">border-box</div>
      <div class="demo radius border-box" v-onepx>border-box</div>
    </div>
    <div class="block">
      <div class="default radius content-box">content-box</div>
      <div class="demo radius content-box" v-onepx>content-box</div>
    </div>
    <div class="block">
      <div class="default radius translate">translate</div>
      <div class="demo radius translate" v-onepx>translate</div>
    </div>
    <div class="block">
      <div class="default radius scale">scale</div>
      <div class="demo radius scale" v-onepx>scale</div>
    </div>
    <div class="block">
      <div class="default radius rotate">rotate</div>
      <div class="demo radius rotate" v-onepx>rotate</div>
    </div>
    <div>
      <input type="text" placeholder="demo" class="default input">
      <input type="text" placeholder="demo" v-onepx class="demo input">
    </div>
    <div class="block">
      <div class="default radius rotate">rotate</div>
      <div class="demo radius rotate" v-onepx>rotate</div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import onepx from './directive/onepx'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  directives: onepx,
  mounted() {
    this.$el.querySelector('input').innerHTML = '<p>some text you can\'t see</p>'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.block{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
}
.demo{
  width: 200px;
  height: 70px;
  background: #eee;
  margin: 10px auto;
  position: relative;
}
.default {
  width: 200px;
  height: 70px;
  background: #eee;
  margin: 10px auto;
  position: relative;
  border: 1px solid rgb(44, 62, 80);
}
.radius{
  border-radius: 10px;
}

.margin{
  margin-left: 30px;
}
.padding{
  padding-right: 40px;
}
.border-box{
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
}
.content-box{
  box-sizing: content-box;
  padding: 10px;
  margin: 10px;
}
.translate{
  transform: translate(10px)
}
.scale{
  transform: scale(.8, .8)
}
.rotate{
  transform: rotateX(30deg)
}
</style>

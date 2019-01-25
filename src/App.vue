<template>
  <div id="app">
    <div class="block">
      <div>原生1px</div>
      <div>原生0.5px</div>
      <div>指令</div>
    </div>
    <div class="block">
      <div class="default radius" style="border-bottom: 1px solid">bottom</div>
      <div class="demo radius" style="border-bottom: .5px solid">bottom</div>
      <div class="demo radius" v-onepx-b>bottom</div>
    </div>
    <div class="block">
      <div class="default radius" style="border-top: 1px solid">top</div>
      <div class="demo radius harf" style="border-top: .5px solid">top</div>
      <div class="demo radius" v-onepx-t>top</div>
    </div>
    <div class="block">
      <div class="default radius" style="border-left: 1px solid">left</div>
      <div class="demo radius harf" style="border-left: .5px solid">left</div>
      <div class="demo radius" v-onepx-l>left</div>
    </div>
    <div class="block">
      <div class="default radius" style="border-right: 1px solid">right</div>
      <div class="demo radius harf" style="border-right: .5px solid">right</div>
      <div class="demo radius" v-onepx-r>right</div>
    </div>
    <div class="block">
      <div class="default radius margin">margin</div>
      <div class="default radius harf margin">margin</div>
      <div class="demo radius margin" v-onepx>margin</div>
    </div>
    <div class="block">
      <div class="default radius padding">padding</div>
      <div class="default radius harf padding">padding</div>
      <div class="demo radius padding" v-onepx>padding</div>
    </div>
    <div class="block">
      <div class="default radius border-box">border-box</div>
      <div class="default radius harf border-box">border-box</div>
      <div class="demo radius border-box" v-onepx>border-box</div>
    </div>
    <div class="block">
      <div class="default radius content-box">content-box</div>
      <div class="default radius harf content-box">content-box</div>
      <div class="demo radius content-box" v-onepx>content-box</div>
    </div>
    <div class="block">
      <div class="default radius translate">translate</div>
      <div class="default radius harf translate">translate</div>
      <div class="demo radius translate" v-onepx>translate</div>
    </div>
    <div class="block">
      <div class="default radius scale">scale</div>
      <div class="default radius harf scale">scale</div>
      <div class="demo radius scale" v-onepx>scale</div>
    </div>
    <div class="block">
      <div class="default radius rotate">rotate</div>
      <div class="default radius harf rotate">rotate</div>
      <div class="demo radius rotate" v-onepx>rotate</div>
    </div>
    <div class="block">
      <input type="text" placeholder="demo" class="default input">
      <input type="text" placeholder="demo" class="default  harf input">
      <input type="text" placeholder="demo" v-onepx class="demo input">
    </div>
  </div>
</template>


<script>

export default {
  name: "app",
  mounted() {
    this.$el.querySelector("input").innerHTML = "<p>some text you can't see</p>";
  }
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.block {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
}
div.harf{
  border-width: .5px;
}
.demo {
  width: 150px;
  height: 70px;
  background: #eee;
  margin: 10px auto;
  position: relative;
}
.device{
  width: 150px;
  height: 70px;
  background: #eee;
  margin: 10px auto;
  position: relative;
  border: 0.5px solid rgb(44, 62, 80);
}
.default {
  width: 150px;
  height: 70px;
  background: #eee;
  margin: 10px auto;
  position: relative;
  border: 1px solid rgb(44, 62, 80);
}
.radius {
  border-radius: 10px;
}
.bottom{
  border: none;
  /* border-bottom: 1px solid; */
}
.top{
  border: none;
  /* border-top: 1px solid; */
}
.left{
  border: none;
  /* border-left: 1px solid; */
}
.right{
  border: none;
  /* border-right: 1px solid; */
}
.margin {
  margin-left: 30px;
}
.padding {
  padding-right: 40px;
}
.border-box {
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
}
.content-box {
  box-sizing: content-box;
  padding: 10px;
  margin: 10px;
}
.translate {
  transform: translate(10px);
}
.scale {
  transform: scale(0.8, 0.8);
}
.rotate {
  transform: rotateX(60deg);
}
</style>

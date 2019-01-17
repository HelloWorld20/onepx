<script>
let blockElementConfig = [
  {
    name: 'title',
    title: true
  },
  {
    name: 'bottom',
    directivesName: 'onepx-b'
  },
  {
    name: 'top',
    directivesName: 'onepx-t'
  },
  {
    name: 'left',
    directivesName: 'onepx-l'
  },
  {
    name: 'right',
    directivesName: 'onepx-r'
  },
  {
    name: 'margin',
    directivesName: 'onepx'
  },
  {
    name: 'padding',
    directivesName: 'onepx'
  },
  {
    name: 'border-box',
    directivesName: 'onepx'
  },
  {
    name: 'content-box',
    directivesName: 'onepx'
  },
  {
    name: 'translate',
    directivesName: 'onepx'
  },
  {
    name: 'scale',
    directivesName: 'onepx'
  },
  {
    name: 'rotate',
    directivesName: 'onepx'
  },
  {
    name: 'input',
    tag: 'input',
    directivesName: 'onepx'
  },
  {
    name: 'rotate',
    directivesName: 'onepx'
  }
];
export default {
  name: "app",
  render(h) {
    return h('div', {
        domProps: {
          id: 'app'
        },
      },
      blockElementConfig.map(v => {
        return h('div', {
            domProps: {
              className: 'block'
            }
          },
          [
            v.tag === 'input' ?
            h('input', {
              domProps: {
                className: `default radius ${v.name}`,
                value: v.name
              }
            }) :
            h('div', {
              domProps: {
                className: v.title ? '' : `default radius ${v.name}`,
                innerText: v.title ? '原生' : v.name
              }
            })
            ,
            v.tag === 'input' ?
            h('input', {
              domProps: {
                className: `demo radius ${v.name}`,
                value: v.name
              },
              directives: [{name: v.directivesName}]
            }) :
            h('div', {
              domProps: {
                className: v.title ? '' : `demo radius ${v.name}`,
                innerText: v.title ? '指令' : v.name
              },
              directives: [{name: v.directivesName}]
            })
          ]
        )
      })
    )
  },
  mounted() {
    this.$el.querySelector("input").innerHTML = "<p>some text you can't see</p>";
  }
};
// render对应的dom结构如下：
// <div id="app">
//     <div class="block">
//       <div>默认</div>
//       <div>指令</div>
//     </div>
//     <div class="block">
//       <div class="default radius bottom">bottom</div>
//       <div class="demo radius bottom" v-onepx-b>bottom</div>
//     </div>
//     <div class="block">
//       <div class="default radius top" style>top</div>
//       <div class="demo radius top" v-onepx-t>top</div>
//     </div>
//     <div class="block">
//       <div class="default radius left">left</div>
//       <div class="demo radius left" v-onepx-l>left</div>
//     </div>
//     <div class="block">
//       <div class="default radius right">right</div>
//       <div class="demo radius right" v-onepx-r>right</div>
//     </div>
//     <div class="block">
//       <div class="default radius margin">margin</div>
//       <div class="demo radius margin" v-onepx>margin</div>
//     </div>
//     <div class="block">
//       <div class="default radius padding">padding</div>
//       <div class="demo radius padding" v-onepx>padding</div>
//     </div>
//     <div class="block">
//       <div class="default radius border-box">border-box</div>
//       <div class="demo radius border-box" v-onepx>border-box</div>
//     </div>
//     <div class="block">
//       <div class="default radius content-box">content-box</div>
//       <div class="demo radius content-box" v-onepx>content-box</div>
//     </div>
//     <div class="block">
//       <div class="default radius translate">translate</div>
//       <div class="demo radius translate" v-onepx>translate</div>
//     </div>
//     <div class="block">
//       <div class="default radius scale">scale</div>
//       <div class="demo radius scale" v-onepx>scale</div>
//     </div>
//     <div class="block">
//       <div class="default radius rotate">rotate</div>
//       <div class="demo radius rotate" v-onepx>rotate</div>
//     </div>
//     <div>
//       <input type="text" placeholder="demo" class="default input">
//       <input type="text" placeholder="demo" v-onepx class="demo input">
//     </div>
//     <div class="block">
//       <div class="default radius rotate">rotate</div>
//       <div class="demo radius rotate" v-onepx>rotate</div>
//     </div>
//   </div>
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
.demo {
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
.radius {
  border-radius: 10px;
}
.bottom{
  border: none;
  border-bottom: 1px solid;
}
.top{
  border: none;
  border-top: 1px solid;
}
.left{
  border: none;
  border-left: 1px solid;
}
.right{
  border: none;
  border-right: 1px solid;
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
  transform: rotateX(30deg);
}
</style>

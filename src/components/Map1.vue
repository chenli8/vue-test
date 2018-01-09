<template>
  <div>
    <div id="map2" style="width:100%;height:800px;float:left"> 
    </div>
  </div>
</template>

<script>
import inMap from "inmap";
import data from "./data.json";

export default {
  name: "Map",
  data() {
    return {
      choose: null,
      arr: [],
      map2: null
    };
  },
  methods: {
    initMap2() {
      let arr = data.features[0].geometry.coordinates[0][0].map(item => {
        return {
          lng: item[0],
          lat: item[1]
        };
      });
       this.map2 = new inMap.Map({
        id: "map2",  
        skin: "Blueness",
        center: [118.185884, 39.652141],
        zoom: {
          value: 9,
          show: true,
          max: 18,
          min: 5
        }
      });
      let THIS = this;
      var overlay = new inMap.DotOverlay({
        style: {
          normal: {
            backgroundColor: "red", // 填充颜色
            globalCompositeOperation: "lighter", // 颜色叠加方式
            size: 3 // 半径
          },
          mouseOver: {
            backgroundColor: "rgba(200, 200, 200, 1)",
            borderColor: "rgba(255,255,255,1)",
            borderWidth: 3
          },
          selected: {
            borderWidth: 1,
            backgroundColor: "rgba(184,0,0,1)",
            borderColor: "rgba(255,255,255,1)"
          }
        },
        data: arr,
        event: {
          multiSelect: false,
          onMouseClick: function(item) {
            THIS.choose = item;
            //能获取当前点的信息
          }
        }
      });
      this.map2.add(overlay)
    },
  },
  mounted() {
    this.initMap2();
  }
};
</script>

<style scoped>

</style>

<template>
  <div>
    <div id="map1" style="width:50%;height:800px;float:left"> </div>
    <div id="map2" style="width:50%;height:800px;float:left"> 
    </div>
     <button style="position:absolute;right:20px;top:30px;z-index:999999" @click="deleteCirle">删除</button>
  </div>
</template>

<script>
import inMap from "inmap";
import data from "./demo.json";

export default {
  name: "Map",
  data() {
    return {
      choose: null,
      arr: [],
      map1: null,
      map2: null,
      list2:[]
    };
  },
  methods: {
    getdata() {
      data.features.forEach((item, index) => {
        this.arr.push({
          name: item.properties.name,
          geo: item.geometry.coordinates[0][0],
          count: index + 1
        });
      });
    },
    initMap() {
      this.map1 = new inMap.Map({
        id: "map1",
        skin: "Blueness",
        center: [118.185884, 39.652141],
        zoom: {
          value: 9,
          show: true,
          max: 22
        }
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
    },
    initMap1(arr) {
      // console.log(arr[0].geo.length)
      //处理数据1
      var option = {
        tooltip: {
          show: true,
          formatter: function(params) {
            return (
              '<div style="white-space: nowrap;z-index: 9999999;transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1);background-color: rgb(255, 255, 255);font-style: normal;font-variant: normal;font-weight: normal;font-stretch: normal;font-size: 14px;font-family: &quot;Microsoft YaHei&quot;;line-height: 21px;padding: 5px 15px;left: 350.544px;top: -7px;border-radius: 2px;">' +
              ' <div class="echart-tool-tips">' +
              ' <div class="time-line clearfix">' +
              ' <span class="time-label">时间 : </span><span class="time-value">14:00</span>' +
              " </div>" +
              ' <div class="time-line clearfix">' +
              ' <span class="time-label">地区 : </span><span class="time-value">' +
              params.name +
              "</span>" +
              " </div>" +
              ' <div class="time-line clearfix">' +
              ' <span class="time-label">温度 : </span><span class="time-value">' +
              params.count +
              "℃</span>" +
              " </div></div></div>"
            );
          },
          offsets: {
            top: 15,
            left: 15
          },
          customClass: "customize"
        },
        legend: {
          show: true,
          title: "板块去重设备数 "
        },
        style: {
          normal: {
            borderWidth: 1.5,
            label: {
              show: true, // 是否显示
              font: "13px bold ",
              color: "#fff"
            }
          },
          mouseOver: {
            shadowColor: "rgba(0, 0, 0, 1)",
            shadowBlur: 10,
            borderWidth: 1.5,
            label: {
              color: "rgba(0, 0, 0, 1)"
            }
          },
          selected: {
            backgroundColor: "rgba(184,0,0,1)",
            borderColor: "rgba(255,255,255,1)",
            label: {
              color: "rgba(255,255,255,1)"
            }
          },
          colors: [
            "rgba(156,200,249,0.4)",
            "rgba(93,158,247,0.4)",
            "rgba(134,207,55,0.4)",
            "rgba(252,198,10,0.4)",
            "rgba(255,144,0,0.4)"
          ]
        },
        multiSelect: false
      };
      var overlay = new inMap.BoundaryOverlay(option);
      overlay.enableEditing = true;
      this.map1.add(overlay);
      overlay.setPoints(arr);
      //开启联动监听事件
      let map1 = this.map1.getMap();
      let map2 = this.map2.getMap();
      map1.addEventListener("dragend", function() {
        var centerPoint = map1.getCenter();
        map2.centerAndZoom(
          new BMap.Point(centerPoint.lng, centerPoint.lat),
          map1.getZoom()
        );
      });
      //监听滚轮放大缩小
      map1.addEventListener("zoomend", function(type) {
        map2.setZoom(map1.getZoom());
      });
    },
    initMap2() {
      let arr = data.features[0].geometry.coordinates[0][0].map(item => {
        return {
          lng: item[0],
          lat: item[1]
        };
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
            THIS.list2.push([Number(item[0].lng),item[0].lat])
          }
        }
      });
      this.map2.add(overlay);
      //开启联动监听事件
      let map2 = this.map2.getMap();
      let map1 = this.map1.getMap();
      map2.addEventListener("dragend", function() {
        var centerPoint = map2.getCenter();
        map1.centerAndZoom(
          new BMap.Point(centerPoint.lng, centerPoint.lat),
          map2.getZoom()
        );
      });
      //监听滚轮放大缩小
      map2.addEventListener("zoomend", function(type) {
        map1.setZoom(map2.getZoom());
      });
    },
    deleteCirle() {
      console.log(this.list2)
      // let THIS = this;
      // let list = [];
      // for (let i = 0; i < this.arr[0].geo.length; i++) {
      //   if (
      //     Number(this.arr[0].geo[i][0]) != Number(THIS.choose[0].lng) &&
      //     Number(THIS.choose[0].lat) != Number(this.arr[0].geo[i][1])
      //   ) {
      //     list.push(this.arr[0].geo[i]);
      //   }
      // }
      // this.arr[0].geo = list;
      this.arr[0].geo=this.list2;
      
      this.initMap1(this.arr);
    }
  },
  mounted() {
    this.getdata();
    this.initMap()
    this.initMap1(this.arr);
    this.initMap2();
    console.log(this.map2.getMap())
  }
};
</script>

<style scoped>

</style>

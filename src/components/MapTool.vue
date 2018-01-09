<template>
<div>
 <div style="position:absolute; right: 0;top: 0; width: 100px;width: 225px;background-color: #00b5ff;z-index: 100">
    <input type="text" id="search">
    <button id="btn-search">搜索</button>
  </div>
  <div id="allmap"></div>
  <div style="float: left; width: 200px;">
    <button id="toolBtn" @click="openPolygon" ref='button'>开启绘制</button>
    <div id="point_text"></div>
  </div>
</div>
</template>

<script>
export default {
  name: "MapTool",
  methods: {
    initHandleFun() {
      var inmap = new inMap.Map({
        id: "allmap",
        center: [118.185884, 39.652141],
        zoom: {
          value: 9,
          show: true,
          max: 18,
          min: 5
        }
      });
      var overlay2 = new inMap.BoundaryOverlay({
        style: {
          normal: {
            borderWidth: 1.5,
            borderColor: "green",
            backgroundColor: "red",
            label: {
              show: true, // 是否显示
              font: "10px bold ",
              color: "rgba(18,65,114,1)"
            }
          }
        },
        data: data
      });
      inmap.add(overlay2);

      var bmap = inmap.getMap();
      BMapLib.DrawingManager.prototype._updatePolygonOptions = function(opt) {
        this.polygonOptions = opt;
      };
      var overlays_color = [
        "red",
        "yellow",
        "blue",
        "#5f93e1",
        "#72cb68",
        "#f7a33d",
        "#e77345",
        "#9280eb",
        "#f0e53d",
        "#d6aa27",
        "#aa71bf",
        "#dfa2d8"
      ];

      var point_text_tep =
        "<div id='point_text{{index}}'><span class = 'point_text_span' data-index ='{{index}}' style='background:{{span_color}}'>&times;</span><p class = 'point_text_text' id = 'text{{index}}' data-color = '{{span_color}}'>{{path_value}}</p></div>";

      function oo(obj) {
        return document.getElementById(obj);
      }
      var point = new BMap.Point(105.403119, 38.028658);
      bmap.centerAndZoom(point, 5);

      var size = new BMap.Size(10, 20);
      bmap.addControl(
        new BMap.CityListControl({
          anchor: BMAP_ANCHOR_TOP_LEFT,
          offset: size
        })
      );

      var overlays = [];
      var overlaycomplete = function(e) {
        oo("toolBtn").innerHTML = "开启绘制";
        var polygon = e.overlay;
        overlays.push(polygon);
        polygon.enableEditing();
        pointsToStr(polygon, true);
        polygon.addEventListener("lineupdate", function(e) {
          pointsToStr(this, false);
        });
      };

      function pointsToStr(polygon, kase) {
        var points = polygon.getPath(),
          index = Array.prototype.indexOf.call(overlays, polygon),
          collen = overlays_color.length,
          // color = index>= collen ? overlays_color[index%collen] : overlays_color[index];
          color = polygon.getFillColor();
        pointsToStrAndColor(points, index, color, kase);
      }

      function pointsToStrAndColor(points, index, color, kase) {
        var p = [];
        for (var i = 0, len = points.length; i < len; i++) {
          p.push(points[i].lng + "," + points[i].lat);
        }
        var html_str = point_text_tep
          .replace(/{{index}}/g, index)
          .replace(/{{span_color}}/g, color)
          .replace(/{{path_value}}/g, p.join(";"));
        if (kase) {
          oo("point_text").innerHTML += html_str;
        } else {
          oo("point_text" + index).innerHTML = html_str;
        }
      }
      var styleOptions = {
        strokeColor: overlays_color[0], //边线颜色。
        fillColor: overlays_color[0], //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3, //边线的宽度，以像素为单位。
        strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
        strokeStyle: "solid" //边线的样式，solid或dashed。
      };
      //实例化鼠标绘制工具
      var drawingManager = new BMapLib.DrawingManager(bmap, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: false, //是否显示工具栏
        drawingToolOptions: {
          anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
          offset: new BMap.Size(5, 5) //偏离值
        },
        polygonOptions: styleOptions //多边形的样式
      });

      //添加鼠标绘制工具监听事件，用于获取绘制结果
      drawingManager.addEventListener("overlaycomplete", overlaycomplete);

      function clearAll() {
        for (var i = 0; i < overlays.length; i++) {
          bmap.removeOverlay(overlays[i]);
        }
        overlays.length = 0;
      }

      function updateColor() {
        var collen = overlays_color.length,
          index = overlays.length,
          color =
            index >= collen
              ? overlays_color[index % collen]
              : overlays_color[index];
        opt = inherit(styleOptions, {
          strokeColor: color,
          fillColor: color
        });
        drawingManager._updatePolygonOptions(opt);
      }

      function inherit(target, source) {
        for (i in source) {
          target[i] = source[i];
        }
        return target;
      }

      oo("point_text").addEventListener(
        "click",
        function(e) {
          if (e.target.className == "point_text_span") {
            var _this = e.target;
            var index = _this.getAttribute("data-index");
            bmap.removeOverlay(overlays[index]);
            overlays[index] = null;
            _this.parentNode.parentNode.removeChild(_this.parentNode);
          }
        },
        false
      );
      document.getElementById("btn-search").onclick = function() {
        var text = document.getElementById("search").value;
        bmap.centerAndZoom(text, 10);
      };
      window.addEventListener("beforeunload", function(event) {
        var overlaysArr = [];
        for (var i = 0, len = overlays.length; i < len; i++) {
          var overlaysObj = overlays[i];
          if (overlaysObj) {
            var obj = {
              drawPoint: overlaysObj.getPath(),
              color: overlaysObj.getFillColor()
            };
            overlaysArr.push(obj);
          }
        }
        window.localStorage.setItem("overlaysArr", JSON.stringify(overlaysArr));
      });

      window.addEventListener("load", function() {
        var _data = window.localStorage.getItem("overlaysArr");
        if (_data) {
          var data = JSON.parse(_data);
          for (var i = 0, len = data.length; i < len; i++) {
            var _obj = data[i];

            pointsToStrAndColor(_obj.drawPoint, i, _obj.color, true);

            var option = inherit(styleOptions, {
              strokeColor: _obj.color,
              fillColor: _obj.color
            });

            var overlay = new BMap.Polygon(_obj.drawPoint, option);
            drawingManager._map.addOverlay(overlay);
            overlays.push(overlay);
            overlay.setPath(_obj.drawPoint);
            overlay.enableEditing();
            overlay.addEventListener("lineupdate", function(e) {
              pointsToStr(this, false);
            });
          }
        }
      });
    },
    openPolygon() {
      var val = this.$refs.button.innerHTML;
      if (val == "开启绘制") {
        drawingManager.open();
        updateColor();
        drawingManager.setDrawingMode(BMAP_DRAWING_POLYGON);
        this.$refs.button.innerHTML = "绘制进行中";
      }
    }
  },
  mounted() {
    this.initHandleFun();
  }
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: "微软雅黑";
}

#allmap {
  width: 80%;
  height: 1000px;
  float: left;
}

#polygon_text {
  width: 400px;
}

p {
  margin-left: 5px;
  font-size: 14px;
}

#toolBtn {
  width: 80px;
  height: 50px;
  margin: 10px;
  border: 1px silver;
  cursor: pointer;
}

#point_text {
  width: 200px;
  height: 500px;
  border: 1px solid #888;
}

#point_text div {
  width: 100%;
  height: auto;
  position: relative;
}

.point_text_span {
  display: block;
  width: 16px;
  height: 16px;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 5px;
}

.point_text_text {
  line-height: 16px;
  font-size: 12px;
  height: auto;
  text-indent: 1.5em;
  word-wrap: break-word;
}
</style>

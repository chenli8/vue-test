<template>
  <div class="editorContain">
      <codemirror ref="myCm"
              :value="code" 
              :options="cmOptions"
              @ready="onCmReady"
              @focus="onCmFocus"
              @input="onCmCodeChange">
      </codemirror>
  </div>
</template>

<script>
import "codemirror/mode/javascript/javascript.js";
import "codemirror/theme/base16-dark.css";

export default {
  name: "editor",
  data() {
    return {
      code: "const a = 10",
      cmOptions: {
        tabSize: 4,// Tab缩进，默认4
        mode: {
            name: "javascript",
            json: true
        },
        theme: "base16-dark", // 主题
        lineNumbers: true,// 是否显示行号
        line: true,
        styleActiveLine: false,
        styleSelectedText: false,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        hintOptions: {
            // 当匹配只有一项的时候是否自动补全
            completeSingle: false
        },
        // keyMap: "sublime",
       matchBrackets: true,
        showCursorWhenSelecting: true,
        // theme: "monokai",
        extraKeys: { Ctrl: "autocomplete" }
      }
    };
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange(newCode) {
      console.log("this is new code", newCode);
      this.code = newCode;
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
  },
  mounted() {
    console.log("this is current codemirror object", this.codemirror);
  }
  //  components: {
  //     codemirror
  //   }
};
</script>

<style>
.editorContain {
  width: 800px;
  height: 800px;
  border: solid 1px #ccc;
}
</style>

<template>
  <section class="container">
      <codemirror v-model="code" 
                  :options="cmOption"
                  @cursorActivity="onCmCursorActivity"
                  @ready="onCmReady"
                  @focus="onCmFocus"
                  @blur="onCmBlur">
      </codemirror>
  </section>
</template>

<script>
export default {
  data() {
    const code = `{}`;
    return {
      code,
      cmOption: {
        tabSize: 4,
        styleActiveLine: false,
        lineNumbers: true,
        styleSelectedText: false,
        line: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        mode: {
            name: "javascript",
            json: true
        },
        // hint.js options
        hintOptions: {
            // 当匹配只有一项的时候是否自动补全
            completeSingle: false
        },
        //快捷键 可提供三种模式 sublime、emacs、vim
        keyMap: "sublime",
        matchBrackets: true,
        showCursorWhenSelecting: true,
        theme: "monokai",
        extraKeys: { Ctrl: "autocomplete" }
      }
    };
  },
  methods: {
    onCmCursorActivity(codemirror) {
        this.$emit('send-codemirror-event', this.code)
    },
    onCmReady(codemirror) {
      console.log("onCmReady", codemirror);
    },
    onCmFocus(codemirror) {
      console.log("onCmFocus", codemirror);
    },
    onCmBlur(codemirror) {
      console.log("onCmBlur", codemirror);
    },
    formatting () {
        console.log(eval("("+this.code+")"))
    }
  }
};
</script>

<style>
.cm-s-monokai .CodeMirror-gutters {
    background: #2f3129;
}
.CodeMirror, .container {
    height: 100vh;
}
.container {
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    height: calc(100%);
}
</style>
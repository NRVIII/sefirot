(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{373:function(t,e,n){},377:function(t,e,n){"use strict";var l=n(2),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M9,18c-0.3,0-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L9,15.6L19.3,5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-11,11C9.5,17.9,9.3,18,9,18z"}})])}),[],!1,null,null,null);e.a=component.exports},405:function(t,e,n){"use strict";var l=n(373);n.n(l).a},406:function(t,e,n){},442:function(t,e,n){"use strict";var l=n(377),o=n(370),r={components:{SIconCheck:l.a,SInputBase:o.a},model:{prop:"value",event:"change"},props:{name:{type:String,default:null},label:{type:String,default:null},note:{type:String,default:null},help:{type:String,default:null},text:{type:String,required:!0},value:{type:Boolean,required:!0}},methods:{emitChange:function(){this.$emit("change",!this.value)}}},c=(n(405),n(2)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SInputBase",{staticClass:"SInputCheckbox",attrs:{name:t.name,label:t.label,note:t.note,help:t.help}},[n("div",{staticClass:"container"},[n("div",{staticClass:"input",class:{on:t.value},attrs:{role:"button"},on:{click:t.emitChange}},[n("div",{staticClass:"box"},[n("div",{staticClass:"check"},[n("SIconCheck",{staticClass:"check-icon"})],1)]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.text))])])])])}),[],!1,null,"f0e270f2",null);e.a=component.exports},477:function(t,e,n){"use strict";var l=n(406);n.n(l).a},521:function(t,e,n){"use strict";n.r(e);n(107),n(108);var l=n(370),o=n(442),r={components:{SInputBase:l.a,SInputCheckbox:o.a},model:{prop:"value",event:"change"},props:{name:{type:String,default:null},label:{type:String,default:null},note:{type:String,default:null},help:{type:String,default:null},options:{type:Array,required:!0},value:{type:Array,required:!0}},methods:{isChecked:function(t){return this.value.includes(t)},handleChange:function(t){var e=this.value.filter((function(e){return e!==t})).concat(this.value.includes(t)?[]:[t]);this.$emit("change",e)}}},c=(n(477),n(2)),h={components:{SInputCheckboxes:Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SInputBase",{staticClass:"SInputCheckboxes",attrs:{name:t.name,label:t.label,note:t.note,help:t.help}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.options,(function(option){return n("div",{key:option.value,staticClass:"col"},[n("SInputCheckbox",{attrs:{text:option.label,value:t.isChecked(option.value)},on:{change:function(e){return t.handleChange(option.value)}}})],1)})),0)])])}),[],!1,null,"587a6027",null).exports,StoryBase:n(359).a},data:function(){return{form:{input:[]},options:[{label:"Check box 1",value:1},{label:"Check box 2",value:2},{label:"Check box 3",value:3}]}}},v=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",[n("SInputCheckboxes",{attrs:{name:"input01",label:"Label",note:"Note text",help:"This is a help text.",options:t.options},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"hljs"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SInputCheckboxes")]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"input"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Label"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("note")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Note text"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("help")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"This is a help text."')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v(":options")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"options"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"form.input"')]),t._v("\n  />")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SInputCheckboxes "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'@globalbrains/sefirot/lib/components/SInputCheckboxes'")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SInputCheckboxes\n  },\n\n  data () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("form")]),t._v(": {\n        "),n("span",{staticClass:"hljs-attr"},[t._v("input")]),t._v(": []\n      },\n\n      "),n("span",{staticClass:"hljs-attr"},[t._v("options")]),t._v(": [\n        { "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Check box 1'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("1")]),t._v(" },\n        { "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Check box 2'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("2")]),t._v(" },\n        { "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'Check box 3'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("value")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("3")]),t._v(" }\n      ]\n    }\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])}],!1,null,null,null).exports,_=n(363),C=n(366),d={components:{StoryInputCheckboxesShowcase:v,SpecProps:_.a,SpecEvents:C.a},data:function(){return{props:[{name:"name",type:"String",required:!1,default:"null",description:"The name for the field. It will be set to `for` attribute at label, and `id` attribute at input so that when user clicks the label, the input will get focus."},{name:"label",type:"String",required:!1,default:"null",description:"The label for the input."},{name:"note",type:"String",required:!1,default:"null",description:"The small note text that will be displayed next to label. The note should be short for example `Optional` or `Max length 160`."},{name:"help",type:"String",required:!1,default:"null",description:"The help text that will be displayed under the input. Useful to add a little detailed information about the input."},{name:"options",type:"Array",required:!0,default:"—",description:"The available options for the checkbox group. The array should contain object with properties of `label` and `value`. `label` is used as a text for the radio button, and `value` is the value corresponding to the radio button."},{name:"value",type:"Array",required:!0,default:"—",description:"The currently selcted values of the checkbox button group."}],events:[{name:"change",description:"Fires when a user clicks a checkbox."}]}},head:{title:"Inputs: Checkboxes"},scrollToTop:!0},f=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Inputs: Checkboxes")]),t._v(" "),n("p",[t._v("Checkboxes allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off.")]),t._v(" "),n("StoryInputCheckboxesShowcase"),t._v(" "),n("h2",[t._v("API")]),t._v(" "),n("SpecProps",{attrs:{props:t.props}}),t._v(" "),n("SpecEvents",{attrs:{events:t.events}})],1)}),[],!1,null,null,null);e.default=f.exports}}]);
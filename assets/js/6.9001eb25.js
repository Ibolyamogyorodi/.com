(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{346:function(e,t,n){},376:function(e,t,n){"use strict";n(346)},386:function(e,t,n){"use strict";n.r(t);n(110);var r={data:function(){return{errors:[]}},methods:{send:function(e){var t=e.target,n=t.subject,r=t.content;if(this.errors=[],!n.value)return this.errors.push("subject");if(!r.value)return this.errors.push("content");n=encodeURIComponent(n.value),r=encodeURIComponent(r.value);var s=document.createElement("a");s.href="mailto:visnalize@gmail.com?subject=".concat(n,"&body=").concat(r),s.target="_blank",s.click(),this.errors=[]}}},s=(n(376),n(14)),o=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[n("div",[n("input",{class:{error:e.errors.includes("subject")},attrs:{type:"text",name:"subject",placeholder:"Subject"}})]),e._v(" "),n("div",[n("textarea",{class:{error:e.errors.includes("content")},attrs:{name:"content",placeholder:"Content"}})]),e._v(" "),e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",{attrs:{type:"submit"}},[this._v("Send")])])}],!1,null,"6f15a542",null);t.default=o.exports}}]);
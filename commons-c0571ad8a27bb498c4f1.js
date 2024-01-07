(self.webpackChunkblog=self.webpackChunkblog||[]).push([[351],{5078:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var o=n(7294),i=n(1883),r=n(5086);const s=r.default.header.withConfig({displayName:"styles__SiteTitle",componentId:"sc-w2frna-0"})(["font-size:3rem;color:",";font-weight:700;margin-right:3rem;"],(e=>e.theme.headerColor)),a=r.default.div.withConfig({displayName:"styles__SiteTopBar",componentId:"sc-w2frna-1"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;header{margin:0;padding:0;}"]),l=r.default.ul.withConfig({displayName:"styles__NavLinksList",componentId:"sc-w2frna-2"})(["display:flex;list-style:none;padding-left:0;"]),c=r.default.li.withConfig({displayName:"styles__NavLink",componentId:"sc-w2frna-3"})(["a{color:",";}font-size:1.4rem;&:not(:last-child){padding-right:2rem;}"],(e=>e.theme.navLinkColor)),d=e=>{let{color:t}=e;return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512",fill:t},o.createElement("path",{d:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"}))},u=e=>{let{color:t}=e;return o.createElement("svg",{width:"800px",height:"800px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",stroke:t,strokeWidth:"1.5",strokeLlinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M22 12L23 12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M12 2V1",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M12 23V22",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M20 20L19 19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M20 4L19 5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M4 20L5 19",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M4 4L5 5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1 12L2 12",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))};var g=n(3722),h=n(6216);const f=r.styled.button.withConfig({displayName:"ThemeSwitcher__StyledButton",componentId:"sc-t24gqx-0"})(["border-radius:4em;border-color:rgba(0,0,0,0);background-color:rgba(0,0,0,0);:hover{border-radius:4em;border-color:",";background-color:",";}svg{padding:0.25em;width:2em;height:2em;}"],(e=>e.theme.buttonBackgroundOnHover),(e=>e.theme.buttonBackgroundOnHover));var p=e=>{const{0:t,1:n}=(0,o.useState)((0,g.nj)());return(0,o.useEffect)((()=>(h.Z&&(window.localStorage.setItem("theme",t),window.dispatchEvent(new Event("themeChanged"))),()=>{})),[t]),o.createElement(f,{onClick:e=>{e.stopPropagation(),n("light"===t?"dark":"light")}},"light"===t?o.createElement(d,{color:g.b3.light.navLinkColor}):o.createElement(u,{color:g.b3.dark.navLinkColor}))};var b=e=>{let{pageTitle:t,children:n}=e;const r=(0,i.K2)("3159585216");return o.createElement(a,null,o.createElement(s,null,r.site.siteMetadata.title),o.createElement("nav",null,o.createElement(l,null,o.createElement(c,null,o.createElement(i.rU,{to:"/"},"Home")),o.createElement(c,null,o.createElement(i.rU,{to:"/about"},"About")))),o.createElement(p,null))};const m=r.styled.div.withConfig({displayName:"styles__Container",componentId:"sc-1uqfh3g-0"})(["padding:8px;margin:auto;@media (min-width:1025px){max-width:70%;}@media (min-width:1281px){max-width:50%;}"]),w=r.default.h1.withConfig({displayName:"styles__PostTitle",componentId:"sc-82hblw-0"})(["color:",";font-size:2rem;text-align:center;"],(e=>e.theme.post.titleColor)),E=r.default.p.withConfig({displayName:"styles__PostInfo",componentId:"sc-82hblw-1"})(["color:",";"],(e=>e.theme.post.infoColor)),y=r.default.div.withConfig({displayName:"styles__PostDiv",componentId:"sc-82hblw-2"})(["color:",";pre{background-color:"," !important;border-radius:4px;overflow-x:auto;code::-webkit-scrollbar{width:100%;}code::-webkit-scrollbar-track{background:rgba(0,0,0,0);}code::-webkit-scrollbar-thumb{background:#383C44;border-radius:1em;border:3px solid #282C34;}code::-webkit-scrollbar-thumb:hover{background:#484C54;}}a{color:",";}"],(e=>e.theme.post.textColor),(e=>e.theme.post.pre.backgroundColor),(e=>e.theme.linkColor));var _=n(3390);_.registerLanguage("python",(function(e){const t=e.regex,n=/[\p{XID_Start}_]\p{XID_Continue}*/u,o=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],i={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:o,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},r={className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,end:/\}/,keywords:i,illegal:/#/},a={begin:/\{\{/,relevance:0},l={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,r],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,r],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,r,a,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,r,a,s]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,a,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,a,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},c="[0-9](_?[0-9])*",d=`(\\b(${c}))?\\.(${c})|\\b(${c})\\.`,u=`\\b|${o.join("|")}`,g={className:"number",relevance:0,variants:[{begin:`(\\b(${c})|(${d}))[eE][+-]?(${c})[jJ]?(?=${u})`},{begin:`(${d})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${u})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${u})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${u})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${u})`},{begin:`\\b(${c})[jJ](?=${u})`}]},h={className:"comment",begin:t.lookahead(/# type:/),end:/$/,keywords:i,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},f={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:["self",r,g,l,e.HASH_COMMENT_MODE]}]};return s.contains=[l,g,r],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:i,illegal:/(<\/|\?)|=>/,contains:[r,g,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},l,h,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,n],scope:{1:"keyword",3:"title.function"},contains:[f]},{variants:[{match:[/\bclass/,/\s+/,n,/\s*/,/\(\s*/,n,/\s*\)/]},{match:[/\bclass/,/\s+/,n]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,f,l]}]}}));var k=e=>{let{postTitle:t,postDate:n,readingTime:i,children:r}=e;o.useEffect((()=>{_.highlightAll()}),[]);let s=n;return void 0!==i&&(s+=` - ${i} min read`),o.createElement("main",null,o.createElement(w,null,t),o.createElement(E,null,s),o.createElement(y,null,r))};var x=e=>{let{postTitle:t,postDate:n,readingTime:i,children:r}=e;return o.createElement(m,null,o.createElement(b,null),o.createElement(k,{postTitle:t,postDate:n,readingTime:i,children:r}))}},7370:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var o=n(7294),i=n(5086),r=n(3722);var s=(0,i.createGlobalStyle)(["body{background-color:","}"],(e=>e.theme.backgroundColor)),a=n(6216);var l=e=>{let{children:t}=e;const{0:n,1:l}=(0,o.useState)((0,r.gz)());return(0,o.useEffect)((()=>{function e(){l((0,r.gz)())}return a.Z&&window.addEventListener("themeChanged",e),()=>{window.removeEventListener("themeChanged",e)}}),[]),o.createElement(i.ThemeProvider,{theme:n},o.createElement(s,null),t)}},3722:function(e,t,n){"use strict";n.d(t,{b3:function(){return s},gz:function(){return a},nj:function(){return l}});var o={headerColor:"#4c566a",navLinkColor:"#4c566a",linkColor:"#4c566a",backgroundColor:"#e5e9f0",buttonBackgroundOnHover:"#cccccc",post:{titleColor:"#4c566a",textColor:"#434c5e",infoColor:"#434c5e",pre:{backgroundColor:"#d8dee9"}}};var i={headerColor:"#DCDFE4",navLinkColor:"#DCDFE4",linkColor:"#D0D3D8",backgroundColor:"#434c5e",buttonBackgroundOnHover:"#666666",post:{titleColor:"#DCDFE4",textColor:"#e5e9f0",infoColor:"#e5e9f0",pre:{backgroundColor:"#364157"}}},r=n(6216);const s={light:o,dark:i};function a(){return s[l()]}function l(){let e="light";if(r.Z){let t=window.localStorage.getItem("theme");null!==t&&(e=t)}return e}},6216:function(e,t){"use strict";const n="undefined"!=typeof window;t.Z=n},3390:function(e){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{const o=e[n],i=typeof o;"object"!==i&&"function"!==i||Object.isFrozen(o)||t(o)})),e}class n{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function i(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const r=e=>!!e.scope;class s{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=o(e)}openNode(e){if(!r(e))return;const t=((e,{prefix:t})=>{if(e.startsWith("language:"))return e.replace("language:","language-");if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${t}${e}`})(e.scope,{prefix:this.classPrefix});this.span(t)}closeNode(e){r(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}const a=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class l{constructor(){this.rootNode=a(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t=a({scope:e});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}addText(e){""!==e&&this.add(e)}startScope(e){this.openNode(e)}endScope(){this.closeNode()}__addSublanguage(e,t){const n=e.root;t&&(n.scope=`language:${t}`),this.add(n)}toHTML(){return new s(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function d(e){return e?"string"==typeof e?e:e.source:null}function u(e){return f("(?=",e,")")}function g(e){return f("(?:",e,")*")}function h(e){return f("(?:",e,")?")}function f(...e){return e.map((e=>d(e))).join("")}function p(...e){const t=function(e){const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(e);return"("+(t.capture?"":"?:")+e.map((e=>d(e))).join("|")+")"}function b(e){return new RegExp(e.toString()+"|").exec("").length-1}const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function w(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n;let o=d(e),i="";for(;o.length>0;){const e=m.exec(o);if(!e){i+=o;break}i+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(t)}const E="[a-zA-Z]\\w*",y="[a-zA-Z_]\\w*",_="\\b\\d+(\\.\\d+)?",k="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",x="\\b(0b[01]+)",v={begin:"\\\\[\\s\\S]",relevance:0},S={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[v]},C={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[v]},N=function(e,t,n={}){const o=i({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const r=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:f(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},L=N("//","$"),A=N("/\\*","\\*/"),O=N("#","$"),M={scope:"number",begin:_,relevance:0},R={scope:"number",begin:k,relevance:0},j={scope:"number",begin:x,relevance:0},B={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,contains:[v]}]},T={scope:"title",begin:E,relevance:0},I={scope:"title",begin:y,relevance:0},D={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var H=Object.freeze({__proto__:null,APOS_STRING_MODE:S,BACKSLASH_ESCAPE:v,BINARY_NUMBER_MODE:j,BINARY_NUMBER_RE:x,COMMENT:N,C_BLOCK_COMMENT_MODE:A,C_LINE_COMMENT_MODE:L,C_NUMBER_MODE:R,C_NUMBER_RE:k,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})},HASH_COMMENT_MODE:O,IDENT_RE:E,MATCH_NOTHING_RE:/\b\B/,METHOD_GUARD:D,NUMBER_MODE:M,NUMBER_RE:_,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},QUOTE_STRING_MODE:C,REGEXP_MODE:B,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=f(t,/.*\b/,e.binary,/\b.*/)),i({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},TITLE_MODE:T,UNDERSCORE_IDENT_RE:y,UNDERSCORE_TITLE_MODE:I});function P(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function $(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function U(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=P,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function z(e,t){Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function F(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function W(e,t){void 0===e.relevance&&(e.relevance=1)}const K=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=n.keywords,e.begin=f(n.beforeMatch,u(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Z=["of","and","for","in","not","or","if","then","parent","list","value"];function G(e,t,n="keyword"){const o=Object.create(null);return"string"==typeof e?i(n,e.split(" ")):Array.isArray(e)?i(n,e):Object.keys(e).forEach((function(n){Object.assign(o,G(e[n],t,n))})),o;function i(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");o[n[0]]=[e,X(n[0],n[1])]}))}}function X(e,t){return t?Number(t):function(e){return Z.includes(e.toLowerCase())}(e)?0:1}const J={},V=e=>{console.error(e)},q=(e,...t)=>{console.log(`WARN: ${e}`,...t)},Q=(e,t)=>{J[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),J[`${e}/${t}`]=!0)},Y=new Error;function ee(e,t,{key:n}){let o=0;const i=e[n],r={},s={};for(let a=1;a<=t.length;a++)s[a+o]=i[a],r[a+o]=!0,o+=b(t[a-1]);e[n]=s,e[n]._emit=r,e[n]._multi=!0}function te(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw V("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Y;if("object"!=typeof e.beginScope||null===e.beginScope)throw V("beginScope must be object"),Y;ee(e,e.begin,{key:"beginScope"}),e.begin=w(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw V("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Y;if("object"!=typeof e.endScope||null===e.endScope)throw V("endScope must be object"),Y;ee(e,e.end,{key:"endScope"}),e.end=w(e.end,{joinWith:""})}}(e)}function ne(e){function t(t,n){return new RegExp(d(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(w(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),o=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,o)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=i(e.classNameAliases||{}),function n(r,s){const a=r;if(r.isCompiled)return a;[$,F,te,K].forEach((e=>e(r,s))),e.compilerExtensions.forEach((e=>e(r,s))),r.__beforeBegin=null,[U,z,W].forEach((e=>e(r,s))),r.isCompiled=!0;let l=null;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),l=r.keywords.$pattern,delete r.keywords.$pattern),l=l||/\w+/,r.keywords&&(r.keywords=G(r.keywords,e.case_insensitive)),a.keywordPatternRe=t(l,!0),s&&(r.begin||(r.begin=/\B|\b/),a.beginRe=t(a.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(a.endRe=t(a.end)),a.terminatorEnd=d(a.end)||"",r.endsWithParent&&s.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+s.terminatorEnd)),r.illegal&&(a.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return i(e,{variants:null},t)})));if(e.cachedVariants)return e.cachedVariants;if(oe(e))return i(e,{starts:e.starts?i(e.starts):null});if(Object.isFrozen(e))return i(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){n(e,a)})),r.starts&&n(r.starts,s),a.matcher=function(e){const t=new o;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(a),a}(e)}function oe(e){return!!e&&(e.endsWithParent||oe(e.starts))}class ie extends Error{constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}const re=o,se=i,ae=Symbol("nomatch"),le=function(e){const o=Object.create(null),i=Object.create(null),r=[];let s=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]};let d={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c};function b(e){return d.noHighlightRe.test(e)}function m(e,t,n){let o="",i="";"object"==typeof t?(o=e,n=t.ignoreIllegals,i=t.language):(Q("10.7.0","highlight(lang, code, ...args) has been deprecated."),Q("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),i=e,o=t),void 0===n&&(n=!0);const r={code:o,language:i};C("before:highlight",r);const s=r.result?r.result:w(r.language,r.code,n);return s.code=r.code,C("after:highlight",s),s}function w(e,t,i,r){const l=Object.create(null);function c(){if(!C.keywords)return void L.addText(A);let e=0;C.keywordPatternRe.lastIndex=0;let t=C.keywordPatternRe.exec(A),n="";for(;t;){n+=A.substring(e,t.index);const i=k.case_insensitive?t[0].toLowerCase():t[0],r=(o=i,C.keywords[o]);if(r){const[e,o]=r;if(L.addText(n),n="",l[i]=(l[i]||0)+1,l[i]<=7&&(O+=o),e.startsWith("_"))n+=t[0];else{const n=k.classNameAliases[e]||e;g(t[0],n)}}else n+=t[0];e=C.keywordPatternRe.lastIndex,t=C.keywordPatternRe.exec(A)}var o;n+=A.substring(e),L.addText(n)}function u(){null!=C.subLanguage?function(){if(""===A)return;let e=null;if("string"==typeof C.subLanguage){if(!o[C.subLanguage])return void L.addText(A);e=w(C.subLanguage,A,!0,N[C.subLanguage]),N[C.subLanguage]=e._top}else e=E(A,C.subLanguage.length?C.subLanguage:null);C.relevance>0&&(O+=e.relevance),L.__addSublanguage(e._emitter,e.language)}():c(),A=""}function g(e,t){""!==e&&(L.startScope(t),L.addText(e),L.endScope())}function h(e,t){let n=1;const o=t.length-1;for(;n<=o;){if(!e._emit[n]){n++;continue}const o=k.classNameAliases[e[n]]||e[n],i=t[n];o?g(i,o):(A=i,c(),A=""),n++}}function f(e,t){return e.scope&&"string"==typeof e.scope&&L.openNode(k.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(g(A,k.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),A=""):e.beginScope._multi&&(h(e.beginScope,t),A="")),C=Object.create(e,{parent:{value:C}}),C}function p(e,t,o){let i=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,o);if(i){if(e["on:end"]){const o=new n(e);e["on:end"](t,o),o.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return p(e.parent,t,o)}function b(e){return 0===C.matcher.regexIndex?(A+=e[0],1):(j=!0,0)}function m(e){const n=e[0],o=t.substring(e.index),i=p(C,e,o);if(!i)return ae;const r=C;C.endScope&&C.endScope._wrap?(u(),g(n,C.endScope._wrap)):C.endScope&&C.endScope._multi?(u(),h(C.endScope,e)):r.skip?A+=n:(r.returnEnd||r.excludeEnd||(A+=n),u(),r.excludeEnd&&(A=n));do{C.scope&&L.closeNode(),C.skip||C.subLanguage||(O+=C.relevance),C=C.parent}while(C!==i.parent);return i.starts&&f(i.starts,e),r.returnEnd?0:n.length}let y={};function _(o,r){const a=r&&r[0];if(A+=o,null==a)return u(),0;if("begin"===y.type&&"end"===r.type&&y.index===r.index&&""===a){if(A+=t.slice(r.index,r.index+1),!s){const t=new Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=y.rule,t}return 1}if(y=r,"begin"===r.type)return function(e){const t=e[0],o=e.rule,i=new n(o),r=[o.__beforeBegin,o["on:begin"]];for(const n of r)if(n&&(n(e,i),i.isMatchIgnored))return b(t);return o.skip?A+=t:(o.excludeBegin&&(A+=t),u(),o.returnBegin||o.excludeBegin||(A=t)),f(o,e),o.returnBegin?0:t.length}(r);if("illegal"===r.type&&!i){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(C.scope||"<unnamed>")+'"');throw e.mode=C,e}if("end"===r.type){const e=m(r);if(e!==ae)return e}if("illegal"===r.type&&""===a)return 1;if(R>1e5&&R>3*r.index){throw new Error("potential infinite loop, way more iterations than matches")}return A+=a,a.length}const k=x(e);if(!k)throw V(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const v=ne(k);let S="",C=r||v;const N={},L=new d.__emitter(d);!function(){const e=[];for(let t=C;t!==k;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach((e=>L.openNode(e)))}();let A="",O=0,M=0,R=0,j=!1;try{if(k.__emitTokens)k.__emitTokens(t,L);else{for(C.matcher.considerAll();;){R++,j?j=!1:C.matcher.considerAll(),C.matcher.lastIndex=M;const e=C.matcher.exec(t);if(!e)break;const n=_(t.substring(M,e.index),e);M=e.index+n}_(t.substring(M))}return L.finalize(),S=L.toHTML(),{language:e,value:S,relevance:O,illegal:!1,_emitter:L,_top:C}}catch(B){if(B.message&&B.message.includes("Illegal"))return{language:e,value:re(t),illegal:!0,relevance:0,_illegalBy:{message:B.message,index:M,context:t.slice(M-100,M+100),mode:B.mode,resultSoFar:S},_emitter:L};if(s)return{language:e,value:re(t),illegal:!1,relevance:0,errorRaised:B,_emitter:L,_top:C};throw B}}function E(e,t){t=t||d.languages||Object.keys(o);const n=function(e){const t={value:re(e),illegal:!1,relevance:0,_top:l,_emitter:new d.__emitter(d)};return t._emitter.addText(e),t}(e),i=t.filter(x).filter(S).map((t=>w(t,e,!1)));i.unshift(n);const r=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(x(e.language).supersetOf===t.language)return 1;if(x(t.language).supersetOf===e.language)return-1}return 0})),[s,a]=r,c=s;return c.secondBest=a,c}function y(e){let t=null;const n=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=d.languageDetectRe.exec(t);if(n){const t=x(n[1]);return t||(q(a.replace("{}",n[1])),q("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>b(e)||x(e)))}(e);if(b(n))return;if(C("before:highlightElement",{el:e,language:n}),e.dataset.highlighted)return void console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",e);if(e.children.length>0&&(d.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(e)),d.throwUnescapedHTML)){throw new ie("One of your code blocks includes unescaped HTML.",e.innerHTML)}t=e;const o=t.textContent,r=n?m(o,{language:n,ignoreIllegals:!0}):E(o);e.innerHTML=r.value,e.dataset.highlighted="yes",function(e,t,n){const o=t&&i[t]||n;e.classList.add("hljs"),e.classList.add(`language-${o}`)}(e,n,r.language),e.result={language:r.language,re:r.relevance,relevance:r.relevance},r.secondBest&&(e.secondBest={language:r.secondBest.language,relevance:r.secondBest.relevance}),C("after:highlightElement",{el:e,result:r,text:o})}let _=!1;function k(){if("loading"===document.readyState)return void(_=!0);document.querySelectorAll(d.cssSelector).forEach(y)}function x(e){return e=(e||"").toLowerCase(),o[e]||o[i[e]]}function v(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{i[e.toLowerCase()]=t}))}function S(e){const t=x(e);return t&&!t.disableAutodetect}function C(e,t){const n=e;r.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){_&&k()}),!1),Object.assign(e,{highlight:m,highlightAuto:E,highlightAll:k,highlightElement:y,highlightBlock:function(e){return Q("10.7.0","highlightBlock will be removed entirely in v12.0"),Q("10.7.0","Please use highlightElement now."),y(e)},configure:function(e){d=se(d,e)},initHighlighting:()=>{k(),Q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){k(),Q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,n){let i=null;try{i=n(e)}catch(r){if(V("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw r;V(r),i=l}i.name||(i.name=t),o[t]=i,i.rawDefinition=n.bind(null,e),i.aliases&&v(i.aliases,{languageName:t})},unregisterLanguage:function(e){delete o[e];for(const t of Object.keys(i))i[t]===e&&delete i[t]},listLanguages:function(){return Object.keys(o)},getLanguage:x,registerAliases:v,autoDetection:S,inherit:se,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),r.push(e)},removePlugin:function(e){const t=r.indexOf(e);-1!==t&&r.splice(t,1)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.9.0",e.regex={concat:f,lookahead:u,either:p,optional:h,anyNumberOfTimes:g};for(const n in H)"object"==typeof H[n]&&t(H[n]);return Object.assign(e,H),e},ce=le({});ce.newInstance=()=>le({}),e.exports=ce,ce.HighlightJS=ce,ce.default=ce}}]);
//# sourceMappingURL=commons-c0571ad8a27bb498c4f1.js.map
"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[7757],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},c="Add as Task",l={unversionedId:"commands/context/message/task",id:"commands/context/message/task",isDocsHomePage:!1,title:"Add as Task",description:"Description",source:"@site/docs/commands/context/message/task.md",sourceDirName:"commands/context/message",slug:"/commands/context/message/task",permalink:"/docs/commands/context/message/task",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/commands/context/message/task.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Save Sticker",permalink:"/docs/commands/context/message/sticker"},next:{title:"User Avatar",permalink:"/docs/commands/context/user/avatar"}},m=[{value:"Description",id:"description",children:[]},{value:"Permissions",id:"permissions",children:[{value:"Bot",id:"bot",children:[]},{value:"Member",id:"member",children:[]}]}],u={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"add-as-task"},"Add as Task"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Adds the message's content as a task to the to-do list"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Always ephemeral"),(0,a.kt)("li",{parentName:"ul"},"3 seconds cooldown")),(0,a.kt)("h2",{id:"permissions"},"Permissions"),(0,a.kt)("h3",{id:"bot"},"Bot"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SEND MESSAGES")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EMBED LINKS"))),(0,a.kt)("h3",{id:"member"},"Member"),(0,a.kt)("p",null,"None"))}p.isMDXComponent=!0}}]);
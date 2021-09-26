"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[5173],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9683:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),s=["components"],a={sidebar_position:3},c="User Status",u={unversionedId:"commands/context/user/status",id:"commands/context/user/status",isDocsHomePage:!1,title:"User Status",description:"Description",source:"@site/docs/commands/context/user/status.md",sourceDirName:"commands/context/user",slug:"/commands/context/user/status",permalink:"/docs/commands/context/user/status",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/commands/context/user/status.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"User Info",permalink:"/docs/commands/context/user/info"},next:{title:"Embeds",permalink:"/docs/embeds"}},l=[{value:"Description",id:"description",children:[]},{value:"Permissions",id:"permissions",children:[{value:"Bot",id:"bot",children:[]},{value:"Member",id:"member",children:[]}]}],p={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"user-status"},"User Status"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Displays the user's status"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports ephemeral response"),(0,i.kt)("li",{parentName:"ul"},"5 seconds cooldown")),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("h3",{id:"bot"},"Bot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SEND MESSAGES")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATTACH FILES"))),(0,i.kt)("h3",{id:"member"},"Member"),(0,i.kt)("p",null,"None"))}m.isMDXComponent=!0}}]);
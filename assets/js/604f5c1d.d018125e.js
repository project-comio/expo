"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[4057],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=r.createContext({}),c=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,h=d["".concat(m,".").concat(u)]||d[u]||p[u]||i;return t?r.createElement(h,a(a({ref:n},l),{},{components:t})):r.createElement(h,a({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1614:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:7},m="/punishment",c={unversionedId:"commands/moderation/punishment",id:"commands/moderation/punishment",isDocsHomePage:!1,title:"/punishment",description:"Description",source:"@site/docs/commands/moderation/punishment.md",sourceDirName:"commands/moderation",slug:"/commands/moderation/punishment",permalink:"/docs/commands/moderation/punishment",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/commands/moderation/punishment.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"/nick",permalink:"/docs/commands/moderation/nick"},next:{title:"/voice",permalink:"/docs/commands/moderation/voice"}},l=[{value:"Description",id:"description",children:[]},{value:"Sub-commands",id:"sub-commands",children:[{value:"Reason",id:"reason",children:[]},{value:"Remove",id:"remove",children:[]},{value:"Reset",id:"reset",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"Bot",id:"bot",children:[]},{value:"Member",id:"member",children:[]}]}],p={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"punishment"},"/punishment"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Manipulates a member's punishment for the server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports ephemeral response"),(0,i.kt)("li",{parentName:"ul"},"3 seconds cooldown"),(0,i.kt)("li",{parentName:"ul"},"Can be used by members having the ",(0,i.kt)("a",{parentName:"li",href:"/docs/setup/modroles"},"moderator role"))),(0,i.kt)("h2",{id:"sub-commands"},"Sub-commands"),(0,i.kt)("h3",{id:"reason"},"Reason"),(0,i.kt)("p",null,"Modifies an existing punishment's reason."),(0,i.kt)("h3",{id:"remove"},"Remove"),(0,i.kt)("p",null,"Removes a member's punishment from the server."),(0,i.kt)("h3",{id:"reset"},"Reset"),(0,i.kt)("p",null,"Resets a member's punishment history for the server. ",(0,i.kt)("strong",{parentName:"p"},"This cannot be undone!")),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("h3",{id:"bot"},"Bot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SEND MESSAGES")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EMBED LINKS"))),(0,i.kt)("h3",{id:"member"},"Member"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the command caller has a moderator role, they do not need the permission(s) listed below."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MANAGE MESSAGES"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[6577],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,u=p["".concat(l,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5252:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Overview",c={unversionedId:"commands/overview",id:"commands/overview",isDocsHomePage:!1,title:"Overview",description:"Comio used different interaction types to interact and execute the commands. Each command category has its very own tab in your server's settings.",source:"@site/docs/commands/overview.md",sourceDirName:"commands",slug:"/commands/overview",permalink:"/docs/commands/overview",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/commands/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Slowmode",permalink:"/docs/automod/slowmode"},next:{title:"/bot",permalink:"/docs/commands/general/bot"}},d=[{value:"Master settings",id:"master-settings",children:[{value:"Moderator only",id:"moderator-only",children:[]},{value:"Ephemeral",id:"ephemeral",children:[]},{value:"Allowed channels",id:"allowed-channels",children:[]},{value:"Allowed roles",id:"allowed-roles",children:[]},{value:"Disabled channels",id:"disabled-channels",children:[]},{value:"Disabled roles",id:"disabled-roles",children:[]}]},{value:"Command categories",id:"command-categories",children:[]}],m={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Comio used different interaction types to interact and execute the commands. Each command category has its very own tab in your ",(0,r.kt)("a",{parentName:"p",href:"https://comio.cf/"},"server's settings"),". "),(0,r.kt)("h2",{id:"master-settings"},"Master settings"),(0,r.kt)("p",null,"Each category has master settings that will always override the individual command settings."),(0,r.kt)("h3",{id:"moderator-only"},"Moderator only"),(0,r.kt)("p",null,"If marked, the category or command will only be accessible to the moderators roles set in the server."),(0,r.kt)("h3",{id:"ephemeral"},"Ephemeral"),(0,r.kt)("p",null,"If marked and the command supports ephemeral response, the command result will only be visible to the user who called the command. Learn more about ephemeral messages ",(0,r.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/1500000580222-Ephemeral-Messages-FAQ"},"here"),". Some commands always use ephemeral responses by default (such as to-do) due to privacy reasons."),(0,r.kt)("img",{className:"imgAuto smImg",alt:"Ephemeral response",src:"/img/docs/6d97b17797db1b302e933902e2bd7527.png"}),(0,r.kt)("h3",{id:"allowed-channels"},"Allowed channels"),(0,r.kt)("p",null,"If specified, the category or commands will only work in these channels."),(0,r.kt)("h3",{id:"allowed-roles"},"Allowed roles"),(0,r.kt)("p",null,"If specified, the category or commands can only be called by members having these roles."),(0,r.kt)("h3",{id:"disabled-channels"},"Disabled channels"),(0,r.kt)("p",null,"If specified, the category or commands will not work in these channels."),(0,r.kt)("h3",{id:"disabled-roles"},"Disabled roles"),(0,r.kt)("p",null,"If specified, the category or commands called by members having these roles won't respond."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You do not need to specify both allowed and disabled entities, specifying allowed channels/roles will automatically disable the category/commands for other channels/roles."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Each commands can be disabled server-wide, and has its own customizable properties & options."))),(0,r.kt)("h2",{id:"command-categories"},"Command categories"),(0,r.kt)("p",null,"The commands that the bot offers are arranged into thier own categories. Each command has its own sub-commands that can be accessed via ",(0,r.kt)("inlineCode",{parentName:"p"},"/help"),"."))}p.isMDXComponent=!0}}]);
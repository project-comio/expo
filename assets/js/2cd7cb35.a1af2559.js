"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[507],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8334:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],m={sidebar_position:10},l="/member",s={unversionedId:"commands/general/member",id:"commands/general/member",isDocsHomePage:!1,title:"/member",description:"Description",source:"@site/docs/commands/general/member.md",sourceDirName:"commands/general",slug:"/commands/general/member",permalink:"/docs/commands/general/member",editUrl:"https://github.com/ProjectComio/expo/edit/main/docs/commands/general/member.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"/info",permalink:"/docs/commands/general/info"},next:{title:"/ping",permalink:"/docs/commands/general/ping"}},c=[{value:"Description",id:"description",children:[]},{value:"Sub-commands",id:"sub-commands",children:[{value:"Info",id:"info",children:[]},{value:"Avatar",id:"avatar",children:[]},{value:"Status",id:"status",children:[]},{value:"Search",id:"search",children:[]}]},{value:"Permissions",id:"permissions",children:[{value:"Bot",id:"bot",children:[]},{value:"Member",id:"member-1",children:[]}]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"member"},"/member"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Provides details for a member"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports ephemeral response"),(0,i.kt)("li",{parentName:"ul"},"5 seconds cooldown")),(0,i.kt)("h2",{id:"sub-commands"},"Sub-commands"),(0,i.kt)("h3",{id:"info"},"Info"),(0,i.kt)("p",null,"Provides details about a member"),(0,i.kt)("h3",{id:"avatar"},"Avatar"),(0,i.kt)("p",null,"Provides the image URL for the member's avatar"),(0,i.kt)("h3",{id:"status"},"Status"),(0,i.kt)("p",null,"Generates an image of the member's custom status (for you to save as a memory ",(0,i.kt)("inlineCode",{parentName:"p"},":)"),")"),(0,i.kt)("h3",{id:"search"},"Search"),(0,i.kt)("p",null,"Searches the server for a member, based on the input provided such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#0000")," (Discriminator)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"123456789012345678")," (ID)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Liz")," (Username or Nickname)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Username and nicknames are broken down into simple text, this sub-command can also fetch members having zalgos in their name."))),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("h3",{id:"bot"},"Bot"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SEND MESSAGES")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EMBED LINKS"))),(0,i.kt)("h3",{id:"member-1"},"Member"),(0,i.kt)("p",null,"None"))}u.isMDXComponent=!0}}]);
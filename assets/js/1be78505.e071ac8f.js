"use strict";(self.webpackChunkcomio_expo=self.webpackChunkcomio_expo||[]).push([[9514,6167],{895:function(e,t,n){n.d(t,{dK:function(){return r},_k:function(){return c},vc:function(){return o.a},rx:function(){return l},qo:function(){return i},Hk:function(){return s},Iz:function(){return d}});n(1336);var a=n(813),o=n.n(a),r=["en"],c=!1,l="eb34f2ab",i=8,s=50,d={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},8704:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),o=n(3905),r=n(6291),c=n(6698),l=n(6010),i=n(941),s=n(3783),d=n(7898),u=n(5537),m=n(7462),p=function(e){return a.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},f=n(4973),h=n(3366),b=n(6742),E=n(3919),v=n(8617),_="menuLinkText_1J2g",g=["items"],k=["item"],C=["item","onItemClick","activePath"],Z=["item","onItemClick","activePath"],N=function e(t,n){return"link"===t.type?(0,i.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},S=(0,a.memo)((function(e){var t=e.items,n=(0,h.Z)(e,g);return a.createElement(a.Fragment,null,t.map((function(e,t){return a.createElement(I,(0,m.Z)({key:t,item:e},n))})))}));function I(e){var t=e.item,n=(0,h.Z)(e,k);return"category"===t.type?0===t.items.length?null:a.createElement(T,(0,m.Z)({item:t},n)):a.createElement(M,(0,m.Z)({item:t},n))}function T(e){var t,n=e.item,o=e.onItemClick,r=e.activePath,c=(0,h.Z)(e,C),s=n.items,d=n.label,u=n.collapsible,p=N(n,r),f=(0,i.uR)({initialState:function(){return!!u&&(!p&&n.collapsed)}}),b=f.collapsed,E=f.setCollapsed,v=f.toggleCollapsed;return function(e){var t=e.isActive,n=e.collapsed,o=e.setCollapsed,r=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&o(!1)}),[t,r,n])}({isActive:p,collapsed:b,setCollapsed:E}),a.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},a.createElement("a",(0,m.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&p},t[_]=!u,t)),onClick:u?function(e){e.preventDefault(),v()}:void 0,href:u?"#":void 0},c),d),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},a.createElement(S,{items:s,tabIndex:b?-1:0,onItemClick:o,activePath:r})))}function M(e){var t=e.item,n=e.onItemClick,o=e.activePath,r=(0,h.Z)(e,Z),c=t.href,s=t.label,d=N(t,o);return a.createElement("li",{className:(0,l.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:s},a.createElement(b.Z,(0,m.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":d}),"aria-current":d?"page":void 0,to:c},(0,E.Z)(c)&&{onClick:n},r),(0,E.Z)(c)?s:a.createElement("span",null,s,a.createElement(v.Z,null))))}var w="sidebar_15mo",x="sidebarWithHideableNavbar_267A",y="sidebarHidden_2kNb",A="sidebarLogo_3h0W",P="menu_Bmed",B="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",H="collapseSidebarButtonIcon_3E-R";function L(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",F),onClick:t},a.createElement(p,{className:H}))}function D(e){var t,n,o=e.path,r=e.sidebar,c=e.onCollapse,s=e.isHidden,m=function(){var e=(0,i.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],o=t[1];return(0,d.Z)((function(t){var n=t.scrollY;e||o(0===n)})),n}(),p=(0,i.LU)(),f=p.navbar.hideOnScroll,h=p.hideableSidebar,b=(0,i.nT)().isClosed;return a.createElement("div",{className:(0,l.Z)(w,(t={},t[x]=f,t[y]=s,t))},f&&a.createElement(u.Z,{tabIndex:-1,className:A}),a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",P,(n={},n[B]=!b&&m,n))},a.createElement("ul",{className:(0,l.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(S,{items:r,activePath:o}))),h&&a.createElement(L,{onClick:c}))}var R=function(e){var t=e.toggleSidebar,n=e.sidebar,o=e.path;return a.createElement("ul",{className:(0,l.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(S,{items:n,activePath:o,onItemClick:function(){return t()}}))};function W(e){return a.createElement(i.Cv,{component:R,props:e})}var z=a.memo(D),Y=a.memo(W);function J(e){var t=(0,s.Z)(),n="desktop"===t||"ssr"===t,o="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(z,e),o&&a.createElement(Y,e))}var K=n(6845),q=n(4608),U=n(5977),G="backToTopButton_35hR",O="backToTopButtonShow_18ls";function Q(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var X=function(){var e,t=(0,U.TH)(),n=Q(),o=n.smoothScrollTop,r=n.cancelScrollToTop,c=(0,a.useState)(!1),i=c[0],s=c[1];return(0,d.Z)((function(e,t){var n=e.scrollY;if(t){var a=n<t.scrollY;if(a||r(),n<300)s(!1);else if(a){var o=document.documentElement.scrollHeight;n+window.innerHeight<o&&s(!0)}else s(!1)}}),[t]),a.createElement("button",{className:(0,l.Z)("clean-btn",G,(e={},e[O]=i,e)),type:"button",onClick:function(){return o()}},a.createElement("svg",{viewBox:"0 0 24 24",width:"28"},a.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},j={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},V=n(9105);function $(e){var t,n,r,s=e.currentDocRoute,d=e.versionMetadata,u=e.children,m=d.pluginId,h=d.version,b=s.sidebar,E=b?d.docsSidebars[b]:void 0,v=(0,a.useState)(!1),_=v[0],g=v[1],k=(0,a.useState)(!1),C=k[0],Z=k[1],N=(0,a.useCallback)((function(){C&&Z(!1),g(!_)}),[C]);return a.createElement(c.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,i.os)(m,h)}},a.createElement("div",{className:j.docPage},a.createElement(X,null),E&&a.createElement("aside",{className:(0,l.Z)(j.docSidebarContainer,(t={},t[j.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(j.docSidebarContainer)&&_&&Z(!0)}},a.createElement(J,{key:b,sidebar:E,path:s.path,onCollapse:N,isHidden:C}),C&&a.createElement("div",{className:j.collapsedDocSidebar,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},a.createElement(p,{className:j.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,l.Z)(j.docMainContainer,(n={},n[j.docMainContainerEnhanced]=_||!E,n))},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",j.docItemWrapper,(r={},r[j.docItemWrapperEnhanced]=_,r))},a.createElement(o.Zo,{components:K.Z},u)))))}var ee=function(e){var t=e.route.routes,n=e.versionMetadata,o=e.location,c=t.find((function(e){return(0,U.LX)(o.pathname,e)}));return c?a.createElement(a.Fragment,null,a.createElement(V.Z,null,a.createElement("html",{className:n.className})),a.createElement($,{currentDocRoute:c,versionMetadata:n},(0,r.Z)(t,{versionMetadata:n}))):a.createElement(q.default,e)}},4608:function(e,t,n){n.r(t);var a=n(7294),o=n(6698),r=n(4973);t.default=function(){return a.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);
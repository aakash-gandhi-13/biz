(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54d24278"],{"0830":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("RootContainer",[n("template",{slot:"sidebarToggler"},[n("SidebarToggler",{staticClass:"d-lg-none d-sm-show d-md-show",attrs:{mobile:!0,display:"md"}}),!t.isAdmin&&t.unread_messages>0?n("span",{staticClass:"dot side-mobile-badge d-lg-none d-sm-show d-md-show"}):t._e()],1),t.showSideMenu?t._e():n("template",{slot:"sidebarTogglerDefault"},[n("div",[n("SidebarToggler",{staticClass:"d-md-down-none rel",attrs:{defaultOpen:t.showSideMenu,display:"lg"},on:{"sidebar-toggle":t.sidebarToggle}})],1),!t.isAdmin&&t.unread_messages>0?n("span",{staticClass:"badge badge-danger badge-pill"},[t._v(t._s(t.unread_messages))]):t._e()]),n("template",{slot:"profileDropdown"},[n("ProfileDropdownList")],1),n("template",{slot:"sidebar"},[n("AppSidebar",{attrs:{fixed:""}},[n("div",{staticClass:"navbar-brand"},[t.showSideMenu?n("span",[n("SidebarToggler",{staticClass:"d-md-down-none rel",attrs:{defaultOpen:t.showSideMenu,display:"lg"},on:{"sidebar-toggle":t.sidebarToggle}}),!t.isAdmin&&t.unread_messages>0?n("span",{staticClass:"badge side-badge badge-danger badge-pill"},[t._v(t._s(t.unread_messages))]):t._e()],1):t._e(),n("img",{staticClass:"navbar-brand-full logo-p navbar-brand-logo pointer",attrs:{id:"logo-app",src:a("9b19"),width:"60%",alt:"Expense Reduction Management Logo"},on:{click:t.navigateHome}})]),t._t("sidebarTogglerDefault"),n("SidebarHeader",[t.isAdmin?n("div",{staticClass:"title-fs"},[t._v(" "+t._s(t.$t("ADMINSIDEBARHEADER"))+" ")]):t._e()]),n("SidebarForm"),n("SidebarNav",{attrs:{navItems:t.getNavItems}}),n("SidebarFooter"),n("SidebarMinimizer")],2)],1),n("template",{slot:"breadcrumb"},[n("Breadcrumb")],1),n("template",{slot:"footer"},[n("Footer",[n("b-row",{staticClass:"footer-text footer-left",attrs:{id:"web-item"}},[n("b-col",{attrs:{cols:"7"}},[n("div",{staticClass:"float-left"},[t.isAdmin?t._e():n("a",{staticClass:"footer-link-padding footer-font",attrs:{href:"javascript:;"},on:{click:t.openTerms}},[t._v(" "+t._s(t.$t("TERMSOFSERVICE"))+" ")]),n("a",{staticClass:"footer-link-padding footer-font",attrs:{href:"javascript:;"}},[t._v(" "+t._s(t.$t("PRIVACYPOLICY"))+" ")]),n("a",{staticClass:"footer-link-padding footer-font",attrs:{href:"javascript:;"},on:{click:t.openQAndA}},[t._v(" "+t._s(t.$t("QANDA"))+" ")]),n("a",{staticClass:"footer-link-padding footer-font",attrs:{href:"javascript:;"},on:{click:t.openInquary}},[t._v(" "+t._s(t.$t("ENQUIRY"))+" ")])])]),n("b-col",{attrs:{cols:"5"}},[n("div",{staticClass:"float-right padding-0"},[n("span",[t._v(t._s(t.$t("COPYRIGHT")))])])])],1),n("b-row",{staticClass:"footer-text",attrs:{id:"mobile-item"}},[n("b-col",{staticClass:"text-center mb-2 mt-2",attrs:{cols:"12"}},[t.isAdmin?t._e():n("a",{staticClass:"footer-link-padding footer-font",attrs:{href:"javascript:;"},on:{click:t.openTerms}},[t._v(" "+t._s(t.$t("TERMSOFSERVICE"))+" ")])]),n("b-col",{staticClass:"text-center mb-2 mt-2",attrs:{cols:"12"}},[n("a",{staticClass:"footer-link-padding footer-font",attrs:{href:"javascript:;"}},[t._v(" "+t._s(t.$t("PRIVACYPOLICY"))+" ")])]),n("b-col",{staticClass:"text-center mb-2 mt-2",attrs:{cols:"12"}},[n("a",{staticClass:"footer-link-padding footer-font",attrs:{href:"javascript:;"},on:{click:t.openQAndA}},[t._v(" "+t._s(t.$t("QANDA"))+" ")])]),n("b-col",{staticClass:"text-center mb-2 mt-2",attrs:{cols:"12"}},[n("a",{staticClass:"footer-link-padding footer-font",attrs:{href:"javascript:;"},on:{click:t.openInquary}},[t._v(" "+t._s(t.$t("ENQUIRY"))+" ")])]),n("b-col",{staticClass:"mb-3 mt-3"},[n("div",{staticClass:"text-center padding-0"},[n("span",[t._v(t._s(t.$t("COPYRIGHT")))])])])],1)],1)],1)],2)],1)},r=[],s=(a("8e6e"),a("cadf"),a("456d"),a("ac6a"),a("96cf"),a("3b8d")),i=(a("7f7f"),a("bd86"));function o(t){return"NOTADMIN"===t?[{name:"分析マトリクス",svgSrcImage:a("9533"),url:"/dashboard",icon:"fa fa-tachometer"},{name:"お知らせ・削減提案一覧",svgSrcImage:a("bec1"),url:"/reduction/proposal",icon:"fa fa-bell"},{name:"費目評価一覧",svgSrcImage:a("fff5"),url:"/expense/evaluation",icon:"fa fa-calculator"},{name:"改善チャート",svgSrcImage:a("56d0"),url:"/improvement/expense",icon:"fa fa-line-chart"},{name:"補助金/助成金交付判定",svgSrcImage:a("586d"),url:"/subsidy/grant/judgement/index",icon:"fa fa-money"},{name:"費目別入力",svgSrcImage:a("0b62"),url:"/expense/item",icon:"fa fa-cubes"},{name:" 明細・仕訳帳インポート",svgSrcImage:a("32e7"),url:"/journal/import",icon:"fa fa-cubes"},{name:"ポイントプログラム",svgSrcImage:a("1353"),url:"/point/program",attributes:{disabled:!0}},{name:"各種設定",svgSrcImage:a("697e"),url:"/edit/settings",icon:"fa fa-cogs"}]:[{name:"タスク処理",url:"/dashboard",icon:"fa fa-tasks",uID:"1"},{name:"顧客一覧",url:"/client/list",icon:"fa fa-list",uID:"2"},{name:"サプライヤー",url:"/supplier",icon:"fa fa-suitcase",uID:"3"},{name:"ユーザーマネージメント",url:"/usermanagement",icon:"fa fa-users",uID:"4"},{name:"ポイントプログラム",url:"/point/program",icon:"fa fa-product-hunt",uID:"5",attributes:{disabled:!0}},{name:"担当者管理",url:"/personIncharge",icon:"fa fa-user-secret",uID:"6"},{name:"統計データルーム",url:"/statistical/data/room",icon:"fa fa-bar-chart",uID:"7",attributes:{disabled:!0}},{name:"マスタメンテナンス",url:"/master/maintanence",icon:"fa fa-superpowers",uID:"8"}]}var c=a("2ef0"),l=a.n(c),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("div",{staticClass:"app-body"},[t._t("sidebar"),n("main",{staticClass:"main"},[n("AppHeader",{attrs:{fixed:""}},[n("b-link",{staticClass:"navbar-brand",attrs:{id:"header-logo"},on:{click:t.navigateHome}},[n("img",{staticClass:"navbar-brand-full navbar-brand-logo",attrs:{src:a("9b19"),alt:"Expense Reduction Management Logo"}})]),n("b-navbar-nav",{staticClass:"title-fw header-content-margin width-100"},[n("div",[t._t("sidebarTogglerDefault")],2),t.isAdmin||""==t.user_details.icon_path||"null"==t.user_details.icon_path||"default"==t.user_details.icon_path?n("div",{attrs:{id:"thumbnailLogo"}},[n("img",{staticClass:"thumbnailLogo",attrs:{src:a("7b46"),alt:"client_icon"}})]):n("div",{attrs:{id:"thumbnailLogo"}},[n("img",{staticClass:"thumbnailLogo",attrs:{src:t.baseDOMAIN+t.user_details.icon_path,alt:"client_icon"}})]),n("div",{staticClass:"header-content-width client-fs ml-2",attrs:{id:"header-item-2"}},[t._v(" "+t._s(t.user_details.clientCompanyName)+" ")]),n("div",{staticClass:"flag-button ml-2",attrs:{id:"profile-item"}},[t._t("profileDropdown")],2),n("b-link",{staticClass:"navbar-brand",attrs:{id:"sp-logo"},on:{click:t.navigateHome}},[n("img",{staticClass:"navbar-brand-full navbar-brand-logo",attrs:{src:a("9b19"),alt:"Expense Reduction Management Logo"}})]),t.isAdmin?t._e():n("div",{staticClass:"flag-button w-100",attrs:{id:"header-item-1"}},[n("div",{staticClass:"float-right"},[n("span",{staticClass:"point-label-fs"},[t._v(t._s(t.$t("ËXCELLENTPOINT"))+" / ")]),n("a",{attrs:{href:"javascript:;"}},[n("span",{staticClass:"point-fs"},[t._v(t._s(t.excelentPoint))])])])])],1),t._t("sidebarToggler")],2),t._t("breadcrumb"),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"container-box"},[n("router-view")],1)])],2)],2),t._t("footer")],2)},d=[],f=(a("20d6"),a("f1fb")),b=a("d3a4"),g=a("8992"),p=a("edfa"),m=a("2f62");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var _={name:"RootContainer",components:{AppHeader:f["b"]},data:function(){return{languages:[{caption:"English",state:!1,language:"en",title:"ENGLISH"},{caption:"Japanese",state:!1,language:"ja",title:"日本語"}],baseDOMAIN:p["a"].apiDomain,basicInfo:{excellentPoint:localStorage.getItem("judg_company_point")+"P",label:localStorage.getItem("clientCompanyName"),name:localStorage.getItem("clientPersonName")}}},computed:h({},Object(m["b"])({user_details:"getUserDetails",excelentPoint:"getExcellentPoint"}),{btnStates:function(){return this.buttons.map((function(t){return t.state}))},name:function(){return this.$route.name},isAdmin:function(){return"ADMIN"===localStorage.getItem("role")}}),created:function(){localStorage.getItem("locale")?this.languages[this._.findIndex(this.languages,{language:localStorage.getItem("locale")})].state=!0:this.languages[1].state=!0},methods:{changeLocale:function(t){this._.map(this.languages,(function(t){return t.state=!1})),this.languages[this._.findIndex(this.languages,{language:t})].state=!0,b["a"].locale=t,localStorage.setItem("locale",t)},onFAQClick:function(){window.open("https://www.jpx.co.jp/learning/tour/arrows/05.html","_blank")},navigateHome:function(){this.isAdmin||this.$router.push({name:"user_dasboard"}),this.isAdmin&&this.$router.push({name:"admin_dasboard"}),Object(g["j"])("isAdmin",this.isAdmin)}}},S=_,y=(a("a74a"),a("d8fe"),a("2877")),O=Object(y["a"])(S,u,d,!1,null,"341bc8f0",null),I=O.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb"},t._l(t.breadcrumbList,(function(e,n){return a("li",{key:n,staticClass:"breadcrumb-item"},[n+1!=t.breadcrumbList.length?a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.routeTo(n)}}},[t._v(" "+t._s(t.$t(e.name))+" ")]):t._e(),n+1==t.breadcrumbList.length?a("span",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.$t(e.name))+" ")]):t._e()])})),0)])])},C=[],j=(a("b54a"),{name:"Breadcrumb",data:function(){return{breadcrumbList:[]}},computed:{},watch:{$route:function(){this.updateList()}},mounted:function(){this.updateList()},methods:{routeTo:function(t){this.breadcrumbList[t].link&&this.$router.push(this.breadcrumbList[t].link)},updateList:function(){this.breadcrumbList=this.$route.meta.breadcrumb}}}),k=j,D=Object(y["a"])(k,w,C,!1,null,null,null),A=D.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("AppHeaderDropdown",{attrs:{right:"","no-caret":""}},[a("template",{slot:"header"},[a("a",{attrs:{href:"javascript:;"}},[t._v(" "+t._s(t.user_details.clientPersonName)+" ")])]),a("template",{slot:"dropdown"},[a("b-dropdown-item",{on:{click:t.logout}},[a("i",{staticClass:"fa fa-lock"}),t._v(" "+t._s(t.$t("LOGOUT"))+" ")])],1)],2)},L=[];function N(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?N(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var E={name:"ProfileDropdownList",components:{AppHeaderDropdown:f["c"]},data:function(){return{}},computed:P({},Object(m["b"])({user_details:"getUserDetails"}),{clientPersonName:function(){return localStorage.getItem("clientPersonName")},username:function(){return localStorage.getItem("clientName")}}),methods:{logout:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=[],this.$store.dispatch("updateCheckedExpItemCodeArrayInDasboard",e),"ADMIN"==localStorage.getItem("role")?(localStorage.clear(),this.$router.push({name:"admin_login"})):(localStorage.clear(),this.$router.push("/"));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},$=E,M=(a("df49"),Object(y["a"])($,x,L,!1,null,null,null)),T=M.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"sidebar-nav"},[a("VuePerfectScrollbar",{staticClass:"scroll-area",attrs:{settings:t.psSettings},on:{"ps-scroll-y":t.scrollHandle}},[a("ul",{staticClass:"nav"},[t._l(t.navItems,(function(e,n){return[e.title?[a("SidebarNavTitle",{key:n,attrs:{name:e.name,classes:e.class,wrapper:e.wrapper}})]:e.divider?[a("SidebarNavDivider",{key:n,attrs:{classes:e.class}})]:e.label?[a("SidebarNavLabel",{key:n,attrs:{name:e.name,url:e.url,icon:e.icon,label:e.label,classes:e.class}})]:[e.children?[a("SidebarNavDropdown",{key:n,attrs:{name:e.name,url:e.url,icon:e.icon}},[t._l(e.children,(function(n,r){return[n.children?[a("SidebarNavDropdown",{key:r,attrs:{name:n.name,url:n.url,icon:n.icon}},t._l(n.children,(function(t,n){return a("li",{key:n,staticClass:"nav-item"},[a("SidebarNavLink",{attrs:{name:t.name,url:t.url,icon:t.icon,svgSrcImage:e.svgSrcImage,badge:t.badge,variant:t.variant,attributes:t.attributes}})],1)})),0)]:[a("SidebarNavItem",{key:r,attrs:{classes:e.class}},[a("SidebarNavLink",{attrs:{name:n.name,url:n.url,icon:n.icon,svgSrcImage:e.svgSrcImage,badge:n.badge,variant:n.variant,attributes:n.attributes}})],1)]]}))],2)]:[a("SidebarNavItem",{key:n,attrs:{classes:e.class}},[a("SidebarNavLink",{attrs:{name:e.name,url:e.url,icon:e.icon,svgSrcImage:e.svgSrcImage,badge:e.badge,variant:e.variant,attributes:e.attributes}})],1)]]]}))],2),t._t("default")],2)],1)},H=[],U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:t.classList})},F=[],Y=(a("28a5"),a("75fc")),B={name:"SidebarNavDivider",props:{classes:{type:[String,Array,Object],default:""}},computed:{classList:function(){return["nav-divider"].concat(Object(Y["a"])(this.itemClasses))},itemClasses:function(){var t=this.classes;return t?"string"===typeof t||t instanceof String?t.split(" "):Array.isArray(t)?t:Object.keys(t).filter((function(e){return t[e]})):[]}}},Q=B,V=Object(y["a"])(Q,U,F,!1,null,null,null),q=V.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"nav-item nav-dropdown",attrs:{tag:"li",to:t.url,disabled:""}},[a("div",{staticClass:"nav-link nav-dropdown-toggle",on:{click:t.handleClick}},[a("i",{class:t.classIcon}),t._v(" "+t._s(t.name))]),a("ul",{staticClass:"nav-dropdown-items"},[t._t("default")],2)])},J=[],G={props:{name:{type:String,default:""},url:{type:String,default:""},icon:{type:String,default:""}},computed:{classIcon:function(){return["nav-icon",this.icon]}},methods:{handleClick:function(t){t.preventDefault(),t.target.parentElement.classList.toggle("open")}}},X=G,K=(a("f8d8"),Object(y["a"])(X,z,J,!1,null,"3c30d67d",null)),W=K.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t.isDisabled?a("a",t._b({class:t.classList,attrs:{tabindex:"-1"},on:{click:function(t){t.stopPropagation(),t.preventDefault()}}},"a",t.attributes,!1),[t.svgSrcImage?[a("b-img",{staticClass:"navbar-brand-full nav-icon",attrs:{src:t.svgSrcImage,width:"18%",alt:""}})]:[a("i",{class:t.classIcon})],t._v(" "),a("span",{staticClass:"nav-text"},[t._v(t._s(t.name))]),t.badge&&t.badge.text?a("b-badge",{attrs:{variant:t.badge.variant}},[t._v(t._s(t.badge.text))]):t._e()],2):t.isExternalLink?a("a",t._b({class:t.classList,attrs:{href:t.url}},"a",t.attributes,!1),[a("i",{class:t.classIcon}),t._v(" "),a("span",{staticClass:"nav-text"},[t._v(t._s(t.name))]),t.badge&&t.badge.text?a("b-badge",{attrs:{variant:t.badge.variant}},[t._v(t._s(t.badge.text))]):t._e()],1):a("router-link",t._b({class:t.classList,attrs:{to:t.url}},"router-link",t.attributes,!1),[t.svgSrcImage?[a("b-img",{staticClass:"navbar-brand-full nav-icon",attrs:{src:t.svgSrcImage,width:"18%",alt:""}})]:[a("i",{class:t.classIcon})],a("span",{staticClass:"nav-text"},[t._v(t._s(t.name))]),t.badge&&t.badge.text?a("b-badge",{attrs:{variant:t.badge.variant}},[t._v(t._s(t.badge.text))]):t._e()],2)],1)},tt=[],et={name:"SidebarNavLink",props:{name:{type:String,default:""},url:{type:String,default:""},icon:{type:String,default:""},svgSrcImage:{type:String,default:""},badge:{type:Object,default:function(){}},variant:{type:String,default:""},classes:{type:[String,Array,Object],default:""},attributes:{type:Object,default:function(){return Object.create(null)}}},computed:{classList:function(){return["nav-link",this.linkVariant].concat(Object(Y["a"])(this.disabledClasses),Object(Y["a"])(this.attrClasses),Object(Y["a"])(this.itemClasses))},classIcon:function(){return["nav-icon",this.icon]},linkVariant:function(){return this.variant?"nav-link-".concat(this.variant):""},itemClasses:function(){return this.getClassArray(this.classes)},attrClasses:function(){return this.getClassArray(this.attributes.class)},disabledClasses:function(){return this.isDisabled?"disabled".split(" "):[]},isDisabled:function(){return Boolean(this.attributes.disabled)},isExternalLink:function(){return Boolean("http"===this.url.substring(0,4))}},methods:{getClassArray:function(t){var e=t?"string"===typeof t||t instanceof String?t.split(" "):Array.isArray(t)?t:Object.keys(t).filter((function(e){return t[e]})):[];return this.url||e.push("remove-background"),e}}},at=et,nt=(a("9371"),Object(y["a"])(at,Z,tt,!1,null,"74b70f3f",null)),rt=nt.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:t.classList},[t.wrapper&&t.wrapper.element?[a(t.wrapper.element,t._b({tag:"component"},"component",t.wrapper.attributes,!1),[t._v(" "+t._s(t.name)+" ")])]:[t._v(" "+t._s(t.name)+" ")]],2)},it=[],ot={props:{name:{type:String,default:""},classes:{type:[String,Array,Object],default:""},wrapper:{type:Object,default:function(){}}},computed:{classList:function(){return["nav-title"].concat(Object(Y["a"])(this.itemClasses))},itemClasses:function(){var t=this.classes;return t?"string"===typeof t||t instanceof String?t.split(" "):Array.isArray(t)?t:Object.keys(t).filter((function(e){return t[e]})):[]}}},ct=ot,lt=Object(y["a"])(ct,st,it,!1,null,null,null),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:t.classList,on:{click:t.hideMobile}},[t._t("default")],2)},ft=[];const bt={methods:{hideMobile(){document.body.classList.contains("sidebar-show")&&document.body.classList.toggle("sidebar-show")}}};var gt={name:"sidebar-nav-item",mixins:[bt],props:{classes:{type:[String,Array,Object],default:""}},computed:{classList:function(){return["nav-item"].concat(Object(Y["a"])(this.itemClasses))},itemClasses:function(){var t=this.classes;return t?"string"===typeof t||t instanceof String?t.split(" "):Array.isArray(t)?t:Object.keys(t).filter((function(e){return t[e]})):[]}}},pt=gt,mt=Object(y["a"])(pt,dt,ft,!1,null,null,null),vt=mt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SidebarNavItem",{attrs:{classes:t.classList.navItem}},[a("a",{class:t.classList.navLink,attrs:{href:t.url}},[a("i",{class:t.classList.icon}),t._v(" "+t._s(t.name)+" ")])])},_t=[],St={name:"SidebarNavLabel",components:{SidebarNavItem:vt},props:{name:{type:String,default:""},url:{type:String,default:"#"},icon:{type:String,default:"fa fa-circle"},classes:{type:[String,Array,Object],default:""},label:{type:Object,required:!0,default:function(){}}},computed:{classList:function(){var t={navItem:["hidden-cn"].concat(Object(Y["a"])(this.itemClasses)),navLink:"nav-label",icon:[this.icon?this.icon:"fa fa-circle",this.label.variant?"text-".concat(this.label.variant):"",this.label.class?this.label.class:""].join(" ")};return t},itemClasses:function(){var t=this.classes;return t?"string"===typeof t||t instanceof String?t.split(" "):Array.isArray(t)?t:Object.keys(t).filter((function(e){return t[e]})):[]}}},yt=St,Ot=Object(y["a"])(yt,ht,_t,!1,null,null,null),It=Ot.exports,wt=a("9d63"),Ct=a.n(wt);function jt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function kt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?jt(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):jt(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Dt={name:"SidebarNav",components:{SidebarNavDivider:q,SidebarNavDropdown:W,SidebarNavLink:rt,SidebarNavTitle:ut,SidebarNavItem:vt,SidebarNavLabel:It,VuePerfectScrollbar:Ct.a},props:{navItems:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{}},computed:{psSettings:function(){return{maxScrollbarLength:200,minScrollbarLength:40,suppressScrollX:"rtl"!==getComputedStyle(document.querySelector("html")).direction,wheelPropagation:!1,interceptRailY:function(t){return kt({},t,{height:0})}}}},methods:{scrollHandle:function(t){}}},At=Dt,xt=(a("271c"),Object(y["a"])(At,R,H,!1,null,"0f0022f2",null)),Lt=xt.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.classList,attrs:{display:t.display,mobile:t.mobile,type:"button"},on:{click:t.sidebarToggle}},[a("span",{staticClass:"navbar-toggler-icon"})])},Pt=[],Et=["sidebar-show","sidebar-sm-show","sidebar-md-show","sidebar-lg-show","sidebar-xl-show"],$t=["sm","md","lg","xl"];function Mt(t,e){return e.indexOf(t)>-1}function Tt(t,e,a){var n=e.indexOf(t),r=e.slice(0,n);r.map((function(t){return document.body.classList.remove(t)})),document.body.classList.toggle(t,a)}var Rt={name:"SidebarToggler",props:{defaultOpen:{type:Boolean,default:!0},display:{type:String,default:"lg"},mobile:{type:Boolean,default:!1}},computed:{classList:function(){return["navbar-toggler"]}},mounted:function(){this.toggle(this.defaultOpen)},methods:{toggle:function(t){var e=[this.display,this.mobile],a=e[0],n=e[1],r=Et[0];!n&&a&&Mt(a,$t)&&(r="sidebar-".concat(a,"-show")),Tt(r,Et,t)},sidebarToggle:function(t){this.$emit("sidebar-toggle"),t.preventDefault(),t.stopPropagation(),this.toggle()}}},Ht=Rt,Ut=Object(y["a"])(Ht,Nt,Pt,!1,null,null,null),Ft=Ut.exports,Yt=a("3fba"),Bt=a("2f4e");function Qt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function Vt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Qt(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Qt(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var qt={name:"RootSidebarContainer",components:{RootContainer:I,AppSidebar:f["d"],SidebarFooter:f["e"],SidebarForm:f["f"],SidebarHeader:f["g"],SidebarMinimizer:f["h"],SidebarNav:Lt,SidebarToggler:Ft,Breadcrumb:A,ProfileDropdownList:T,Footer:f["a"]},data:function(){return{navItems:[],timer:"",notify:"",lang:"",admin_flg:!1,supplier_flag:!1,wiz_flag:!1,showSideMenu:!0}},computed:Vt({name:function(){return this.$route.name},isAdmin:function(){return"ADMIN"===localStorage.getItem("role")},getNavItems:function(){return this.navItems}},Object(m["b"])({unread_messages:"getUnreadMessages"})),beforeDestroy:function(){clearInterval(this.timer),clearInterval(this.notify)},created:function(){this.admin_flg=JSON.parse(localStorage.getItem("admin_auth")),this.supplier_flag=JSON.parse(localStorage.getItem("supplier_auth")),this.wiz_flag=JSON.parse(localStorage.getItem("wiz_auth")),this.lang=localStorage.getItem("locale");var t=[];t="ADMIN"===localStorage.getItem("role")?o("ADMIN"):o("NOTADMIN"),this.aclCheck(t),this.timer=setInterval(this.checkLanguageChange,100),"ADMIN"!=localStorage.getItem("role")&&(this.notify=setInterval(this.getUnreadNotifications,3e5))},methods:{sidebarToggle:function(){this.showSideMenu=!this.showSideMenu},navigateHome:function(){this.isAdmin||this.$router.push({name:"user_dasboard"}),Object(g["j"])("isAdmin",this.isAdmin)},getUnreadNotifications:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Yt["a"].post(Bt["a"].MESSAGEREDORUNREDCOUNT,{client_no:localStorage.getItem("client_account_no")});case 2:e=t.sent,a=e.data,a.success&&this.$store.dispatch("updateUnreadMessages",{unread_messages:a.data.messageCount});case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),aclCheck:function(t){var e=this,a=[];"ADMIN"===localStorage.getItem("role")?t.forEach((function(t){if(t.uID){var n=e.readMenuACL(t.uID);n&&a.push(t)}})):(console.log("menu",t),a=t),this.navItems=a},readMenuACL:function(t){var e=this.admin_flg,a=this.wiz_flag&&!("5"==t||"8"==t),n=this.supplier_flag&&!("4"==t||"5"==t||"7"==t),r=e||a||n;return r},aclCheck1:function(t){var e=[];l.a.forEach(t,(function(t){if(t.uID){var a=Object(g["k"])(t.uID);if(a&&1===a.canAccess)if(t.children){var n=t,r=Object(g["c"])(t.children);l.a.forEach(n.children,(function(t){t.children&&(t.children=Object(g["c"])(t.children))})),n.children=r,e.push(n)}else e.push(t)}else if(t.children){var s=t,i=Object(g["c"])(t.children);l.a.forEach(s.children,(function(t){t.children&&(t.children=Object(g["c"])(t.children))})),s.children=i,e.push(s)}else e.push(t)})),this.navItems=e},checkLanguageChange:function(){if(localStorage.getItem("locale")!==this.lang){this.lang=localStorage.getItem("locale");var t=[];t="ADMIN"===localStorage.getItem("role")?o("ADMIN"):o("NOTADMIN"),this.aclCheck(t)}},cancelCheckLanguageChange:function(){clearInterval(this.timer)},openTerms:function(){var t=this.$router.resolve({path:"/termsandconditions"});window.open(t.href,"_blank")},openQAndA:function(){var t=this.$router.resolve({path:"/qna"});window.open(t.href,"_blank")},openInquary:function(){var t=this.$router.resolve({path:"/contact"});window.open(t.href,"_blank")}}},zt=qt,Jt=(a("6cd9"),a("b0a4"),Object(y["a"])(zt,n,r,!1,null,"52489adc",null));e["default"]=Jt.exports},"0b62":function(t,e,a){t.exports=a.p+"img/list.d1fa362c.svg"},"0c7b":function(t,e,a){},1353:function(t,e,a){t.exports=a.p+"img/point.519aed65.svg"},"271c":function(t,e,a){"use strict";var n=a("0c7b"),r=a.n(n);r.a},"32e7":function(t,e,a){t.exports=a.p+"img/import.e50d5cdf.svg"},"454f":function(t,e,a){a("46a7");var n=a("584a").Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},"46a7":function(t,e,a){var n=a("63b6");n(n.S+n.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"4bef":function(t,e,a){},"56d0":function(t,e,a){t.exports=a.p+"img/kaizen_chart.0752b540.svg"},"586d":function(t,e,a){t.exports=a.p+"img/subsidy.b10c6c50.svg"},6030:function(t,e,a){},"697e":function(t,e,a){t.exports=a.p+"img/setting.83d38c97.svg"},"6cd9":function(t,e,a){"use strict";var n=a("f13d"),r=a.n(n);r.a},"79f2":function(t,e,a){},"7b46":function(t,e,a){t.exports=a.p+"img/DefaultIcon.bbdff329.png"},"85f2":function(t,e,a){t.exports=a("454f")},"8cd8":function(t,e,a){},"8e6e":function(t,e,a){var n=a("5ca1"),r=a("990b"),s=a("6821"),i=a("11e9"),o=a("f1ae");n(n.S,"Object",{getOwnPropertyDescriptors:function(t){var e,a,n=s(t),c=i.f,l=r(n),u={},d=0;while(l.length>d)a=c(n,e=l[d++]),void 0!==a&&o(u,e,a);return u}})},9371:function(t,e,a){"use strict";var n=a("6030"),r=a.n(n);r.a},94833:function(t,e,a){},9533:function(t,e,a){t.exports=a.p+"img/mypage.1c9aeb73.svg"},"990b":function(t,e,a){var n=a("9093"),r=a("2621"),s=a("cb7c"),i=a("7726").Reflect;t.exports=i&&i.ownKeys||function(t){var e=n.f(s(t)),a=r.f;return a?e.concat(a(t)):e}},a74a:function(t,e,a){"use strict";var n=a("8cd8"),r=a.n(n);r.a},b01b:function(t,e,a){},b0a4:function(t,e,a){"use strict";var n=a("b01b"),r=a.n(n);r.a},bd86:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("85f2"),r=a.n(n);function s(t,e,a){return e in t?r()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},bec1:function(t,e,a){t.exports=a.p+"img/notice.bfcfa272.svg"},d8fe:function(t,e,a){"use strict";var n=a("79f2"),r=a.n(n);r.a},df49:function(t,e,a){"use strict";var n=a("94833"),r=a.n(n);r.a},f13d:function(t,e,a){},f8d8:function(t,e,a){"use strict";var n=a("4bef"),r=a.n(n);r.a},fff5:function(t,e,a){t.exports=a.p+"img/calculate.4161741e.svg"}}]);
//# sourceMappingURL=chunk-54d24278.c7bd28f3.js.map
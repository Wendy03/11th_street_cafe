import{_ as u,r,o as d,c as _,a as t,b as s,w as e,d as o,m as g,e as x,t as $,f as w,F as k}from"./index-0c942f24.js";import{c as p}from"./cartStore-21091e26.js";import"./Toast-fa3f4d5c.js";import"./statusStore-add7e598.js";const y={},S={class:"bg-dark"},C={class:"container"},T={class:"text-white py-3"},N={class:"d-flex justify-content-center"},B={class:"d-flex list-unstyled mb-0"},E={class:"nav-item me-2"},F={class:"nav-item me-2"},V={class:"nav-item me-2"},L={class:"nav-item"},H=t("p",{class:"mb-0 text-center"},[t("small",null,"無商業用途，僅供學習使用")],-1);function j(a,l){const c=r("router-link");return d(),_("div",S,[t("div",C,[t("div",T,[t("div",N,[t("ul",B,[t("li",E,[s(c,{to:"/products",class:"nav-link text-white"},{default:e(()=>[o(" 商品列表 ")]),_:1})]),t("li",F,[s(c,{to:"/about",class:"nav-link text-white"},{default:e(()=>[o(" 關於我們 ")]),_:1})]),t("li",V,[s(c,{to:"/information",class:"nav-link text-white"},{default:e(()=>[o(" 常見問題 ")]),_:1})]),t("li",L,[s(c,{to:"/login",class:"nav-link text-white"},{default:e(()=>[o(" 後台管理 ")]),_:1})])])]),H])])])}const A=u(y,[["render",j]]),D={data(){return{}},methods:{...g(p,["getCarts"])},computed:{...x(p,["cart"])},mounted(){this.getCarts()}},q={class:"fixed-top"},z={id:"nav"},G={class:"navbar navbar-expand-lg bg-dark navbar-dark"},I={class:"container px-md-0 position-relative"},J={class:"d-flex"},K={class:"navbar-nav flex-row"},M={class:"nav-item me-md-3 me-lg-3 order-lg-2 order-1"},O=t("i",{class:"bi bi-bag-fill text-secondary"},null,-1),P={class:"badge badge-pill rounded-pill bg-danger"},Q={class:"nav-item order-lg-1 order-2"},R=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),U={class:"collapse navbar-collapse",id:"navbarSupportedContent"},W={class:"navbar-nav ms-auto mb-2 mb-lg-0"},X={class:"nav-item"},Y={class:"nav-item"},Z={class:"nav-item"};function tt(a,l,c,v,h,m){const n=r("router-link");return d(),_("div",q,[t("div",z,[t("nav",G,[t("div",I,[s(n,{to:"/",class:"navbar-brand fs-1 logo"},{default:e(()=>[o("11 街咖啡")]),_:1}),t("div",J,[t("ul",K,[t("li",M,[s(n,{to:"/cart",class:"nav-link"},{default:e(()=>{var i;return[O,t("span",P,$((i=a.cart.carts)==null?void 0:i.length),1)]}),_:1})]),t("li",Q,[R,t("div",U,[t("ul",W,[t("li",X,[s(n,{to:"/products",class:"nav-link text-secondary"},{default:e(()=>[o(" 商品列表 ")]),_:1})]),t("li",Y,[s(n,{to:"/articles",class:"nav-link text-secondary",href:"#"},{default:e(()=>[o(" 咖啡專欄 ")]),_:1})]),t("li",Z,[s(n,{to:"/follows",class:"nav-link text-secondary",href:"#"},{default:e(()=>[o(" 追蹤商品 ")]),_:1})])])])])])])])])])])}const st=u(D,[["render",tt]]),et={data(){return{isShowed:!1}},components:{NavBar:st,FooterCard:A},methods:{scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){const a=document.documentElement,l=a.scrollHeight-a.clientHeight;a.scrollTop/l>.1?this.isShowed=!0:this.isShowed=!1}},mounted(){document.addEventListener("scroll",this.handleScroll)},unmounted(){document.removeEventListener("scroll",this.handleScroll)}},ot={class:"ec-container"},at={key:0,class:"position-fixed end-0 bottom-0 scroll-top-btn pe-3 pb-3"},nt=t("i",{class:"bi bi-arrow-up-circle-fill"},null,-1),lt=[nt];function ct(a,l,c,v,h,m){const n=r("NavBar"),i=r("router-view"),b=r("FooterCard");return d(),_(k,null,[s(n),t("div",ot,[s(i)]),h.isShowed?(d(),_("div",at,[t("button",{type:"button",class:"btn btn-secondary shadow btn-sm",onClick:l[0]||(l[0]=(...f)=>m.scrollToTop&&m.scrollToTop(...f))},lt)])):w("",!0),s(b)],64)}const mt=u(et,[["render",ct]]);export{mt as default};

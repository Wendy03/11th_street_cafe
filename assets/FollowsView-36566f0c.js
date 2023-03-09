import{c as C}from"./cartStore-b3eb4093.js";import{p as L,f as p}from"./productsStore-ea8c54a5.js";import{s as F}from"./statusStore-08f0d806.js";import{R as S,m as d,e as u,_ as b,r as i,o as e,c as n,b as a,a as t,F as m,p as V,w as h,t as r,l as g,d as H}from"./index-f5198bfb.js";import{H as P}from"./HomeCategory-371cb31a.js";import"./Toast-0995bd9d.js";const R={data(){return{}},components:{RouterLink:S,HomeCategory:P},methods:{...d(L,["getProducts"]),...d(p,["getFollows","toggleFollow"]),...d(C,["addToCart"])},computed:{...u(p,["followIds","followList"]),...u(F,["isLoading","isProcessing","loadingItem"])},mounted(){this.getProducts()}},B={class:"py-7"},I={key:0},N={class:"row justify-content-center"},T={class:"col-lg-10"},j=t("h3",{class:"mt-5"},"追蹤清單",-1),A={class:"table-responsive-lg mt-5"},D={class:"table table-hover"},E=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"品名"),t("th",{scope:"col"},"分類"),t("th",{scope:"col"},"價格"),t("th",{scope:"col"},"購買"),t("th",{scope:"col"},"取消")])],-1),M={style:{"white-space":"nowrap"}},U={class:"text-dark align-middle"},q={class:"align-middle"},x={class:"align-middle"},z=["onClick","disabled"],G={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"},J={key:1,class:"bi bi-bag-plus fs-5"},K=["onClick"],O=t("i",{class:"bi bi-x fs-5"},null,-1),Q=[O],W={key:1},X={class:"row justify-content-center"},Y={class:"col-md-8"},Z=t("h2",{class:"mb-3 fs-4"},"目前的追蹤清單是空的，請選擇您喜歡的商品",-1),tt=t("i",{class:"bi bi-cart mb-md-7 mt-3"},null,-1);function ot(o,l,f,w,y,v){const c=i("VueLoading"),_=i("RouterLink"),k=i("HomeCategory");return e(),n(m,null,[a(c,{active:o.isLoading,"onUpdate:active":l[0]||(l[0]=s=>o.isLoading=s)},null,8,["active"]),t("div",B,[o.followList.length?(e(),n("div",I,[t("div",N,[t("div",T,[j,t("div",A,[t("table",D,[E,t("tbody",null,[(e(!0),n(m,null,V(o.followList,s=>(e(),n("tr",{key:s.id},[t("td",M,[a(_,{to:`/product/${s.id}`},{default:h(()=>[t("p",U,[t("strong",null,r(s.title),1)])]),_:2},1032,["to"])]),t("td",q,r(s.category),1),t("td",x,r(o.$filters.currency(s.price)),1),t("td",null,[t("button",{type:"button",class:"btn btn-outline-dark btn-sm border-0",onClick:g($=>o.addToCart(s.id),["prevent"]),disabled:o.isProcessing},[o.loadingItem===s.id?(e(),n("span",G)):(e(),n("i",J))],8,z)]),t("td",null,[t("button",{type:"button",class:"btn btn-outline-dark btn-sm border-0",onClick:g($=>o.toggleFollow(s.id),["prevent"])},Q,8,K)])]))),128))])])])])])])):(e(),n("div",W,[t("div",X,[t("div",Y,[Z,a(_,{to:"/products",class:"btn btn-primary mt-3 text-end"},{default:h(()=>[tt,H(" 查看商品 ")]),_:1})])]),a(k)]))])],64)}const st=b(R,[["render",ot]]),et={data(){return{}},components:{FollowsCard:st}},nt={class:"container my-12"};function at(o,l,f,w,y,v){const c=i("FollowsCard");return e(),n("div",nt,[a(c)])}const pt=b(et,[["render",at]]);export{pt as default};

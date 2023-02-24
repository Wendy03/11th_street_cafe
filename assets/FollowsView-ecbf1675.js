import{c as C}from"./cartStore-a5eb01d7.js";import{p as F,f as p}from"./productsStore-2a2fec59.js";import{s as L}from"./statusStore-f57763db.js";import{m as d,e as u,_ as g,r as a,o as e,c as n,b as l,a as t,F as h,n as S,w as m,t as r,k as f,d as V}from"./index-dfe46513.js";import{H}from"./HomeCategory-12e1506d.js";import"./Toast-81c1f1d0.js";const P={data(){return{}},components:{HomeCategory:H},methods:{...d(F,["getProducts"]),...d(p,["getFollows","toggleFollow"]),...d(C,["addToCart"])},computed:{...u(p,["followIds","followList"]),...u(L,["isLoading","isProcessing","loadingItem"])},mounted(){this.getProducts()}},B={class:"p-7"},I={key:0},N={class:"row justify-content-center"},T={class:"col-lg-10"},j=t("h3",{class:"mt-5"},"追蹤商品",-1),x={class:"table-responsive mt-5"},A={class:"table"},D=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"品名"),t("th",{scope:"col"},"分類"),t("th",{scope:"col"},"價格"),t("th",{scope:"col"},"購物車"),t("th",{scope:"col"},"取消")])],-1),E={style:{"white-space":"nowrap"}},M={class:"text-dark align-middle"},U={class:"align-middle"},q={class:"align-middle"},z=["onClick","disabled"],G={key:0,class:"fas fa-spinner fa-spin"},J={key:1,class:"bi bi-bag-plus fs-5"},K=["onClick"],O=t("i",{class:"bi bi-x fs-5"},null,-1),Q=[O],R={key:1},W={class:"d-flex justify-content-center py-7"},X=t("h2",{class:"mb-3 fs-4"},"目前的追蹤清單是空的，請選擇您喜歡的商品",-1),Y=t("i",{class:"bi bi-cart mt-3"},null,-1);function Z(o,i,b,w,k,y){const c=a("VueLoading"),_=a("router-link"),v=a("HomeCategory");return e(),n(h,null,[l(c,{active:o.isLoading,"onUpdate:active":i[0]||(i[0]=s=>o.isLoading=s)},null,8,["active"]),t("div",B,[o.followList.length?(e(),n("div",I,[t("div",N,[t("div",T,[j,t("div",x,[t("table",A,[D,t("tbody",null,[(e(!0),n(h,null,S(o.followList,s=>(e(),n("tr",{key:s.id},[t("td",E,[l(_,{to:`/product/${s.id}`},{default:m(()=>[t("p",M,[t("strong",null,r(s.title),1)])]),_:2},1032,["to"])]),t("td",U,r(s.category),1),t("td",q,r(o.$filters.currency(s.price)),1),t("td",null,[t("button",{type:"button",class:"btn btn-outline-dark btn-sm border-0",onClick:f($=>o.addToCart(s.id),["prevent"]),disabled:o.isProcessing},[o.loadingItem===s.id?(e(),n("i",G)):(e(),n("i",J))],8,z)]),t("td",null,[t("button",{href:"#",class:"btn btn-outline-dark btn-sm border-0",onClick:f($=>o.toggleFollow(s.id),["prevent"])},Q,8,K)])]))),128))])])])])])])):(e(),n("div",R,[t("div",W,[X,l(_,{to:"/products",class:"text-dark mt-5 mt-3 h5"},{default:m(()=>[Y,V(" 查看商品 ")]),_:1})]),l(v)]))])],64)}const tt=g(P,[["render",Z]]),ot={data(){return{}},components:{FollowsCard:tt}},st={class:"container my-12"};function et(o,i,b,w,k,y){const c=a("FollowsCard");return e(),n("div",st,[l(c)])}const rt=g(ot,[["render",et]]);export{rt as default};

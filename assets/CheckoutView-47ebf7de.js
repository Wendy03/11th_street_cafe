import{T as h}from"./Toast-81c1f1d0.js";import{_ as w,r as $,o as c,c as l,a as t,F as C,n as T,t as o,p as I,f as g,k as E,b as k,w as V,d as L,m as O,e as P}from"./index-dfe46513.js";import{c as y}from"./cartStore-a5eb01d7.js";import"./statusStore-f57763db.js";const{VITE_API:x,VITE_PATH:v}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},A={data(){return{order:{products:[],user:{}},orderId:"",isLoading:!1,isProcessing:!1}},methods:{getOrder(){this.isLoading=!0,this.$http.get(`${x}/api/${v}/order/${this.orderId}`).then(e=>{this.isLoading=!1;const{order:r}=e.data;this.order=r}).catch(e=>{var i,n;const r=((n=(i=e.response)==null?void 0:i.data)==null?void 0:n.message)||"資料錯誤";this.isLoading=!1,h.fire({title:`${r}`,icon:"error"})})},payOrder(){this.isLoading=!0,this.$http.post(`${x}/api/${v}/pay/${this.orderId}`).then(()=>{this.isLoading=!1,this.getOrder(),h.fire({title:"付款成功",icon:"success"})}).catch(e=>{var i,n;const r=((n=(i=e.response)==null?void 0:i.data)==null?void 0:n.message)||"資料錯誤";this.isLoading=!1,h.fire({title:`${r}`,icon:"error"})})}},mounted(){this.orderId=this.$route.params.orderId,this.getOrder()}},N={class:"col-md-6"},j={class:"card rounded-0 py-4 mb-3"},B=t("div",{class:"card-header border-bottom-0 bg-white px-4 py-0"},[t("h2",null,"訂單資訊")],-1),D={class:"card-body px-4 py-0"},M={class:"list-group list-group-flush"},S={class:"d-flex mt-2"},H=["src","alt"],q={class:"w-100 d-flex flex-column"},z={class:"d-flex justify-content-between fw-bold"},F={class:"mb-0"},R={class:"d-flex justify-content-between mt-auto"},U={class:"text-muted mb-0"},J={class:"mb-0"},Q={class:"list-group-item px-0 pb-0"},W=t("table",{class:"table text-muted"},[t("tbody",null,[t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 font-weight-normal"}," Payment "),t("td",{class:"text-end border-0 px-0 pt-0"},"ApplePay")])])],-1),G={class:"d-flex justify-content-between mt-2"},K=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),X={class:"mb-0 h4 fw-bold"},Y={class:"card rounded-0 py-4"},Z={class:"table"},tt=t("th",{width:"100"},"Email",-1),st=t("th",null,"姓名",-1),et=t("th",null,"收件人電話",-1),ot=t("th",null,"收件人地址",-1),rt=t("th",null,"付款狀態",-1),dt={key:0,class:"text-end mt-4"},it=t("button",{type:"submit",class:"btn btn-primary"},"確認付款去",-1),nt=[it],ct={key:0,class:"text-end"};function lt(e,r,i,n,s,a){const u=$("router-link");return c(),l("div",N,[t("form",{onSubmit:r[0]||(r[0]=E((...d)=>a.payOrder&&a.payOrder(...d),["prevent"]))},[t("div",j,[B,t("div",D,[t("ul",M,[(c(!0),l(C,null,T(s.order.products,d=>{var _,p,m,f,b;return c(),l("li",{key:d.id,class:"list-group-item px-0"},[t("div",S,[t("img",{src:(_=d.product)==null?void 0:_.imageUrl,alt:(p=d.product)==null?void 0:p.title,class:"me-2",style:{width:"60px",height:"60px","object-fit":"cover"}},null,8,H),t("div",q,[t("div",z,[t("h5",null,o((m=d.product)==null?void 0:m.title),1),t("p",F,"x"+o(d.qty),1)]),t("div",R,[t("p",U,[t("small",null," NT$"+o(e.$filters.currency((f=d.product)==null?void 0:f.price)),1)]),t("p",J," NT$"+o(e.$filters.currency((b=d.product)==null?void 0:b.price)),1)])])])])}),128)),t("li",Q,[W,t("div",G,[K,t("p",X," NT$"+o(e.$filters.currency(s.order.total)),1)])])])])]),t("div",Y,[t("table",Z,[t("tbody",null,[t("tr",null,[tt,t("td",null,o(s.order.user.email),1)]),t("tr",null,[st,t("td",null,o(s.order.user.name),1)]),t("tr",null,[et,t("td",null,o(s.order.user.tel),1)]),t("tr",null,[ot,t("td",null,o(s.order.user.address),1)]),t("tr",null,[rt,t("td",null,[t("span",{class:I({"text-success":s.order.is_paid})},o(s.order.is_paid?"付款完成":"尚未付款"),3)])])])])]),s.order.is_paid===!1?(c(),l("div",dt,nt)):g("",!0)],32),s.order.is_paid?(c(),l("div",ct,[k(u,{to:"/",class:"btn btn-outline-dark me-2 rounded-0 my-4"},{default:V(()=>[L(" 回首頁 ")]),_:1})])):g("",!0)])}const at=w(A,[["render",lt]]),ut={data(){return{}},components:{CheckoutCard:at},methods:{...O(y,["getCarts"])},computed:{...P(y,["cart"])},mounted(){this.getCarts()}},ht={class:"container my-12"},_t={class:"row py-7"},pt=t("div",{class:"col-md-6"},[t("h2",null,"訂單完成"),t("div",{class:"mt-4"},[t("h5",null,"感謝訂購"),t("p",{class:"ml-2"},"訂單完成預計1~2天出貨"),t("div",{style:{height:"300px","background-size":"cover","background-position":"center","background-image":"url('https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}})])],-1);function mt(e,r,i,n,s,a){const u=$("CheckoutCard");return c(),l("div",ht,[t("div",_t,[pt,k(u)])])}const xt=w(ut,[["render",mt]]);export{xt as default};

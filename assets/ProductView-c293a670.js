import{I as C}from"./InformationCard-dceec65d.js";import{c as x}from"./cartStore-f8bcf08a.js";import{p as k,f as w}from"./productsStore-86fa70e7.js";import{s as S}from"./statusStore-91626f2f.js";import{T as D}from"./Toast-e166d8ae.js";import{R as E,m as g,f as v,_ as L,r as p,o as i,c,b as _,a as t,w as R,d as f,t as n,n as P,x as I,F as a,s as b,e as l,l as U,y as A}from"./index-db72fb11.js";const{VITE_API:M,VITE_PATH:N}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},q={data(){return{id:"",product:{},relativeProduct:[],qty:1,isProcessing:!1,isLoading:!1}},components:{RouterLink:E,InformationCard:C},methods:{...g(k,["getProducts"]),...g(x,["addToCart"]),...g(w,["getFollows","toggleFollow"]),getProduct(){this.isLoading=!0,this.$http.get(`${M}/api/${N}/product/${this.id}`).then(e=>{this.isLoading=!1;const{product:r}=e.data;this.product=r,this.getRelative()}).catch(e=>{var d,u;const r=((u=(d=e.response)==null?void 0:d.data)==null?void 0:u.message)||"資料錯誤";this.isLoading=!1,D.fire({title:`${r}`,icon:"error"})})},getRelative(){const{category:e,id:r}=this.product;this.relativeProduct=this.products.filter(d=>d.category===e&&d.id!==r)},toggleId(e){this.$router.push(`/product/${e}`),this.id=e,this.getProduct()}},computed:{...v(S,["loadingItem"]),...v(k,["products"]),...v(w,["followIds"])},created(){const{id:e}=this.$route.params;this.id=e,this.getProducts()},mounted(){this.getProduct()}},F={key:0},B={"aria-label":"breadcrumb"},H={class:"breadcrumb"},z={class:"breadcrumb-item"},O={class:"breadcrumb-item active","aria-current":"page"},j={class:"my-4"},G={class:"row justify-content-center pb-6"},J={class:"col-lg-10"},K={class:"row"},Q={class:"col-sm-6"},W={key:0,class:"bi bi-heart text-danger shadow-sm p-1 bg-secondary"},X={key:1,class:"bi bi-heart-fill text-danger shadow-sm p-1 bg-secondary"},Y={key:0,class:"row"},Z={class:"col-3"},$=["src","alt"],tt={class:"col-sm-6"},ot={class:"d-flex flex-column justify-content-between h-100"},st={class:"badge bg-primary rounded-pill fw-normal mt-md-0 mt-5"},et={class:"mt-mb-0 mt-3"},rt={key:0},it=t("br",null,null,-1),ct=["innerHTML"],nt={key:1},dt=t("li",null,"熟豆重量：227g ± 2g",-1),lt=t("li",null,"保存期限：30 天",-1),at={class:"text-end fw-bolder"},ut={class:"fs-5"},pt={class:"input-group"},_t=["value"],ht={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},mt=t("hr",null,null,-1),gt={class:"py-6"},vt=t("hr",null,null,-1),ft={key:1,class:"py-6"},bt=t("h3",{class:"mb-5"},"相關商品",-1),yt={class:"row mb-5"},kt={class:"card h-100"},wt=["onClick"],Pt={class:"card-body"},It={class:"card-title"},Lt={class:"text-end pr-2"};function Tt(e,r,d,u,o,y){const h=p("VueLoading"),T=p("RouterLink"),V=p("InformationCard");return i(),c(a,null,[_(h,{active:o.isLoading,"onUpdate:active":r[0]||(r[0]=s=>o.isLoading=s)},null,8,["active"]),o.product.imageUrl?(i(),c("div",F,[t("nav",B,[t("ol",H,[t("li",z,[_(T,{to:"/products"},{default:R(()=>[f("全部商品")]),_:1})]),t("li",O,n(o.product.title),1)])]),t("h2",j,n(o.product.title),1),t("div",G,[t("div",J,[t("div",K,[t("div",Q,[t("div",{class:"position-absolute heart-icon mt-1 ps-1",style:{cursor:"pointer"},onClick:r[1]||(r[1]=P(s=>e.toggleFollow(o.product.id),["prevent"]))},[e.followIds.indexOf(o.product.id)===-1?(i(),c("i",W)):(i(),c("i",X))]),t("div",{style:I([{"min-height":"350px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${o.product.imageUrl})`}])},null,4),(i(!0),c(a,null,b(o.product.imagesUrl,(s,m)=>(i(),c(a,{key:m+"img"},[s?(i(),c("div",Y,[t("div",Z,[t("img",{src:s,alt:m+"img",class:"card-image mt-2 w-100"},null,8,$)])])):l("",!0)],64))),128))]),t("div",tt,[t("div",ot,[t("div",null,[t("span",st,n(o.product.category),1)]),t("p",et,n(o.product.category==="周邊商品"?"":"咖啡風味：")+n(o.product.description),1),o.product.content?(i(),c("div",rt,[f(" 【 商品說明 】"),it,t("p",{class:"ms-2",innerHTML:o.product.content},null,8,ct)])):l("",!0),o.product.category!=="周邊商品"?(i(),c("ul",nt,[t("li",null,"產地："+n(o.product.country),1),t("li",null,"產區："+n(o.product.area),1),t("li",null,"處理方法："+n(o.product.production),1),dt,lt])):l("",!0),t("div",at,[t("p",ut," NT$ "+n(e.$filters.currency(o.product.price))+" 元 / "+n(o.product.unit),1)]),t("div",pt,[U(t("select",{class:"form-select",name:"qty","onUpdate:modelValue":r[2]||(r[2]=s=>o.qty=s)},[(i(),c(a,null,b(5,s=>t("option",{value:s,key:s+"num"},n(s),9,_t)),64))],512),[[A,o.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-dark",onClick:r[3]||(r[3]=s=>e.addToCart(o.product.id,o.qty))},[o.product.id===e.loadingItem?(i(),c("span",ht)):l("",!0),f(" 加入購物車 ")])])])])])])])])):l("",!0),mt,t("div",gt,[_(V)]),vt,o.relativeProduct.length?(i(),c("div",ft,[bt,t("div",yt,[(i(!0),c(a,null,b(o.relativeProduct,s=>(i(),c("div",{key:s.id,class:"col-lg-3 col-md-6 mb-0 mb-2"},[t("div",kt,[t("div",{style:I([{"min-height":"200px","background-size":"cover","background-position":"center",cursor:"pointer"},{backgroundImage:`url(${s.imageUrl})`}]),onClick:P(m=>y.toggleId(s.id),["prevent"])},null,12,wt),t("div",Pt,[t("h6",It,n(s.title),1),t("div",Lt,"NT$ "+n(s.price)+" 元",1)])])]))),128))])])):l("",!0)],64)}const Vt=L(q,[["render",Tt]]),Ct={data(){return{}},components:{ProductDetail:Vt}},xt={class:"container py-6"};function St(e,r,d,u,o,y){const h=p("ProductDetail");return i(),c("div",xt,[_(h)])}const Nt=L(Ct,[["render",St]]);export{Nt as default};
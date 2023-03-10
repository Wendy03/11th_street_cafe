import{I as C}from"./InformationCard-663216ea.js";import{c as S}from"./cartStore-eac6a5e2.js";import{p as k,f as w}from"./productsStore-32246cae.js";import{s as D}from"./statusStore-235641b3.js";import{T as E}from"./Toast-87810d29.js";import{R,m as g,f as v,_ as L,r as p,o as i,c,b as _,a as t,w as U,d as b,t as n,l as P,s as I,F as d,p as f,e as a,k as x,u as A}from"./index-f76f9e83.js";const{VITE_API:M,VITE_PATH:q}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},F={data(){return{id:"",product:{},relativeProduct:[],qty:1,isProcessing:!1,isLoading:!1}},components:{RouterLink:R,InformationCard:C},methods:{...g(k,["getProducts"]),...g(S,["addToCart"]),...g(w,["getFollows","toggleFollow"]),getProduct(){this.isLoading=!0,this.$http.get(`${M}/api/${q}/product/${this.id}`).then(e=>{this.isLoading=!1;const{product:r}=e.data;this.product=r,this.getRelative()}).catch(e=>{var l,u;const r=((u=(l=e.response)==null?void 0:l.data)==null?void 0:u.message)||"資料錯誤";this.isLoading=!1,E.fire({title:`${r}`,icon:"error"})})},getRelative(){const{category:e,id:r}=this.product;this.relativeProduct=this.products.filter(l=>l.category===e&&l.id!==r)},toggleId(e){this.$router.push(`/product/${e}`),this.id=e,this.getProduct()}},computed:{...v(D,["loadingItem"]),...v(k,["products"]),...v(w,["followIds"])},created(){const{id:e}=this.$route.params;this.id=e,this.getProducts()},mounted(){this.getProduct()}},B={key:0,class:"pb-9"},H={"aria-label":"breadcrumb mt-5"},N={class:"breadcrumb"},z={class:"breadcrumb-item"},O={class:"breadcrumb-item active","aria-current":"page"},j={class:"mb-4"},G={class:"row justify-content-center"},J={class:"col-lg-10"},K={class:"row"},Q={class:"col-sm-5"},W={key:0,class:"bi bi-heart text-danger shadow-sm p-1 bg-secondary"},X={key:1,class:"bi bi-heart-fill text-danger shadow-sm p-1 bg-secondary"},Y={key:0,class:"row"},Z={class:"col-3"},$=["src","alt"],tt={class:"col-sm-7"},ot={class:"badge bg-primary rounded-pill mt-md-0 mt-5"},st={class:"mt-mb-0 mt-3"},et={key:0},rt=t("br",null,null,-1),it=["innerHTML"],ct={key:1},nt=t("li",null,"熟豆重量：227g ± 2g",-1),lt=t("li",null,"保存期限：30 天",-1),dt={class:"mb-3"},at={class:"fs-5"},ut={class:"input-group mt-5 w-75"},pt=["value"],_t={key:0,class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"},ht=t("hr",null,null,-1),mt={class:"my-7"},gt=t("hr",null,null,-1),vt=t("h3",{class:"my-7"},"相關商品",-1),bt={class:"row"},ft={class:"card h-100"},yt=["onClick"],kt={class:"card-body"},wt={class:"card-title"},Pt={class:"text-right pr-2"};function It(e,r,l,u,o,y){const h=p("VueLoading"),T=p("RouterLink"),V=p("InformationCard");return i(),c(d,null,[_(h,{active:o.isLoading,"onUpdate:active":r[0]||(r[0]=s=>o.isLoading=s)},null,8,["active"]),o.product.imageUrl?(i(),c("div",B,[t("nav",H,[t("ol",N,[t("li",z,[_(T,{to:"/products"},{default:U(()=>[b("全部商品")]),_:1})]),t("li",O,n(o.product.title),1)])]),t("h2",j,n(o.product.title),1),t("div",G,[t("div",J,[t("div",K,[t("div",Q,[t("div",{class:"position-absolute heart-icon mt-1 ps-1",style:{cursor:"pointer"},onClick:r[1]||(r[1]=P(s=>e.toggleFollow(o.product.id),["prevent"]))},[e.followIds.indexOf(o.product.id)===-1?(i(),c("i",W)):(i(),c("i",X))]),t("div",{style:I([{"min-height":"50vh","background-size":"cover","background-position":"center"},{backgroundImage:`url(${o.product.imageUrl})`}])},null,4),(i(!0),c(d,null,f(o.product.imagesUrl,(s,m)=>(i(),c(d,{key:m+"img"},[s?(i(),c("div",Y,[t("div",Z,[t("img",{src:s,alt:m+"img",class:"card-image mt-2 w-100"},null,8,$)])])):a("",!0)],64))),128))]),t("div",tt,[t("span",ot,n(o.product.category),1),t("p",st,n(o.product.category==="周邊商品"?"":"咖啡風味：")+n(o.product.description),1),o.product.content?(i(),c("div",et,[b(" 【 商品說明 】"),rt,t("p",{class:"ms-2",innerHTML:o.product.content},null,8,it)])):a("",!0),o.product.category!=="周邊商品"?(i(),c("ul",ct,[t("li",null,"產地："+n(o.product.country),1),t("li",null,"產區："+n(o.product.area),1),t("li",null,"處理方法："+n(o.product.production),1),nt,lt])):a("",!0),t("div",dt,[t("p",at,n(e.$filters.currency(o.product.price))+" 元 / "+n(o.product.unit),1)]),t("div",ut,[x(t("select",{class:"form-select",name:"qty","onUpdate:modelValue":r[2]||(r[2]=s=>o.qty=s)},[(i(),c(d,null,f(5,s=>t("option",{value:s,key:s+"num"},n(s),9,pt)),64))],512),[[A,o.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-dark",onClick:r[3]||(r[3]=s=>e.addToCart(o.product.id,o.qty))},[o.product.id===e.loadingItem?(i(),c("span",_t)):a("",!0),b(" 加入購物車 ")])])])])])])])):a("",!0),ht,t("div",mt,[_(V)]),gt,o.relativeProduct.length?(i(),c(d,{key:1},[vt,t("div",bt,[(i(!0),c(d,null,f(o.relativeProduct,s=>(i(),c("div",{key:s.id,class:"col-lg-3 col-md-6 mb-0 mb-2"},[t("div",ft,[t("div",{style:I([{"min-height":"200px","background-size":"cover","background-position":"center",cursor:"pointer"},{backgroundImage:`url(${s.imageUrl})`}]),onClick:P(m=>y.toggleId(s.id),["prevent"])},null,12,yt),t("div",kt,[t("h6",wt,n(s.title),1),t("div",Pt,n(s.price)+" 元",1)])])]))),128))])],64)):a("",!0)],64)}const Lt=L(F,[["render",It]]),Tt={data(){return{}},components:{ProductDetail:Lt}},Vt={class:"container my-13"};function Ct(e,r,l,u,o,y){const h=p("ProductDetail");return i(),c("div",Vt,[_(h)])}const At=L(Tt,[["render",Ct]]);export{At as default};

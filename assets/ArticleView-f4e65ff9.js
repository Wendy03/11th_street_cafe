import{T as g}from"./Toast-8cca48e2.js";import{_ as d,R as L,r as n,o as u,c as m,b as l,a as t,w as v,d as _,t as r}from"./index-cdfc31b9.js";const{VITE_API:b,VITE_PATH:A}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{article:{},isLoading:!1}},components:{RouterLink:L},methods:{getArticle(){this.isLoading=!0;const{id:i}=this.$route.params;this.$http.get(`${b}/api/${A}/article/${i}`).then(s=>{this.isLoading=!1;const{article:o}=s.data;this.article=o}).catch(s=>{var c,e;const o=((e=(c=s.response)==null?void 0:c.data)==null?void 0:e.message)||"資料錯誤";this.isLoading=!1,g.fire({title:`${o}`,icon:"error"})})}},mounted(){this.getArticle()}},V={class:"row justify-content-center"},$={class:"col-lg-8"},x={"aria-label":"breadcrumb"},E={class:"breadcrumb"},I={class:"breadcrumb-item"},R={class:"breadcrumb-item active","aria-current":"page"},k={class:"mt-5"},C={class:"py-5"},P={class:"text-muted"},w={class:"text-muted"},y=["src"],B=["innerHTML"];function D(i,s,o,c,e,p){const a=n("VueLoading"),h=n("RouterLink");return u(),m("div",null,[l(a,{active:e.isLoading,"onUpdate:active":s[0]||(s[0]=f=>e.isLoading=f)},null,8,["active"]),t("div",V,[t("div",$,[t("nav",x,[t("ol",E,[t("li",I,[l(h,{to:"/articles"},{default:v(()=>[_("咖啡專欄")]),_:1})]),t("li",R,r(e.article.title),1)])]),t("h2",k,r(e.article.title),1),t("article",C,[t("p",null,[t("small",P,r(i.$filters.date(e.article.create_at)),1),_(" - "),t("small",w,"作者："+r(e.article.author),1)]),t("img",{src:e.article.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,y),t("div",{innerHTML:e.article.content},null,8,B)])])])])}const H=d(T,[["render",D]]),M={data(){return{}},components:{ArticleCard:H}},N={class:"container py-6"};function U(i,s,o,c,e,p){const a=n("ArticleCard");return u(),m("div",N,[l(a)])}const j=d(M,[["render",U]]);export{j as default};

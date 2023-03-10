import{m as w,A as T}from"./modalMixin-4066d2fc.js";import{_ as M,o as u,c as m,a as t,d as V,t as p,r as b,k as n,v as a,F as x,p as k,e as U,b as f,z as E,q as A}from"./index-f76f9e83.js";import{T as h}from"./Toast-87810d29.js";import{C as I}from"./ckeditor-e06af751.js";const L={props:{product:{type:Object,default(){return{}}},isProcessing:{type:Boolean,default:!1}},data(){return{modal:{}}},mixins:[w]},D={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},$={class:"modal-dialog"},N={class:"modal-content border-0"},F=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),B={class:"modal-body"},O={class:"text-danger"},H={class:"modal-footer"},R=t("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1),S=["disabled"];function j(l,o,i,r,e,d){return u(),m("div",D,[t("div",$,[t("div",N,[F,t("div",B,[V(" 是否刪除 "),t("strong",O,p(i.product.title),1),V(" 商品(刪除後將無法恢復)。 ")]),t("div",H,[R,t("button",{type:"button",class:"btn btn-danger",disabled:i.isProcessing,onClick:o[0]||(o[0]=g=>l.$emit("del-product"))}," 確認刪除 ",8,S)])])])],512)}const z=M(L,[["render",j]]),{VITE_API:q,VITE_PATH:G}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},J={props:{product:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1},isProcessing:{type:Boolean,default:!1}},data(){return{modal:{},tempProduct:{},editor:I,editorConfig:{toolbar:{items:["heading","bold","italic","link","undo","redo","|"]}}}},mixins:[w],watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile(){const l=this.$refs.files.files[0],o=new FormData;o.append("file-to-upload",l),this.$http.post(`${q}/api/${G}/admin/upload`,o).then(i=>{this.tempProduct.imageUrl=i.data.imageUrl,this.$refs.files.value=""}).catch(()=>{h.fire({title:"檔案格式不符",icon:"error"})})}}},K={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Q={class:"modal-dialog modal-xl"},W={class:"modal-content border-0"},X={class:"modal-header bg-black text-white"},Y={id:"productModalLabel",class:"modal-title"},Z=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),tt={class:"modal-body"},et={class:"row"},ot={class:"col-sm-4"},st={class:"mb-2"},lt={class:"mb-3"},it=t("label",{for:"imageUrl",class:"form-label h4"},"輸入主圖網址",-1),dt=["src","alt"],nt={class:"form-group"},rt=t("label",{for:"customFile"},"或 上傳圖片 ",-1),ct=t("hr",null,null,-1),at=t("p",{class:"mb-3 h4 pt-4"},"多圖新增",-1),ut={key:0,class:"mt-5"},mt=["onUpdate:modelValue"],pt=["src"],_t=["onClick"],ht={key:0},bt={class:"col-sm-8"},ft={class:"mb-3"},gt=t("label",{for:"title",class:"form-label"},"標題",-1),Pt={class:"row"},vt={class:"mb-3 col-md-6"},yt=t("label",{for:"category",class:"form-label"},"分類",-1),Ut={class:"mb-3 col-md-6"},Vt=t("label",{for:"price",class:"form-label"},"單位",-1),Mt={class:"row"},wt={class:"mb-3 col-md-6"},xt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),kt={class:"mb-3 col-md-6"},Ct=t("label",{for:"price",class:"form-label"},"售價",-1),Tt=t("hr",null,null,-1),Et={class:"mb-3"},At=t("label",{for:"description",class:"form-label"},"產品描述",-1),It={class:"mb-3"},Lt=t("p",null,"說明內容",-1),Dt=t("hr",null,null,-1),$t={class:"row"},Nt={class:"mb-3 col-md-6"},Ft=t("label",{for:"category",class:"form-label"},"國家",-1),Bt={class:"mb-3 col-md-6"},Ot=t("label",{for:"price",class:"form-label"},"產區",-1),Ht={class:"row"},Rt={class:"mb-3 col-md-6"},St=t("label",{for:"category",class:"form-label"},"處理方法",-1),jt={class:"mb-3 col-md-6"},zt=t("label",{for:"price",class:"form-label"},"烘焙度",-1),qt={class:"mb-3"},Gt={class:"form-check"},Jt={class:"form-check-label",for:"is_enabled"},Kt={class:"modal-footer"},Qt=t("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1),Wt=["disabled"],Xt={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"};function Yt(l,o,i,r,e,d){const g=b("ckeditor");return u(),m("div",K,[t("div",Q,[t("div",W,[t("div",X,[t("h5",Y,[t("span",null,p(i.isNew?"新增":"編輯")+"產品",1)]),Z]),t("div",tt,[t("div",et,[t("div",ot,[t("div",st,[t("div",lt,[it,n(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[a,e.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:e.tempProduct.title},null,8,dt),t("div",nt,[rt,t("input",{type:"file",id:"customFile",class:"form-control",ref:"files",onChange:o[1]||(o[1]=(...s)=>d.uploadFile&&d.uploadFile(...s))},null,544)])]),ct,at,e.tempProduct.imagesUrl?(u(),m("div",ut,[(u(!0),m(x,null,k(e.tempProduct.imagesUrl,(s,_)=>(u(),m("div",{class:"mb-3",key:_},[n(t("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":P=>e.tempProduct.imagesUrl[_]=P,placeholder:"請輸入連結"},null,8,mt),[[a,e.tempProduct.imagesUrl[_]]]),t("div",null,[t("img",{class:"img-fluid",src:s},null,8,pt)]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:P=>e.tempProduct.imagesUrl.splice(_,1)}," 移除 ",8,_t)]))),128)),e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]||!e.tempProduct.imagesUrl.length?(u(),m("div",ht,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):U("",!0)])):U("",!0)]),t("div",bt,[t("div",ft,[gt,n(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.title=s)},null,512),[[a,e.tempProduct.title]])]),t("div",Pt,[t("div",vt,[yt,n(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category=s)},null,512),[[a,e.tempProduct.category]])]),t("div",Ut,[Vt,n(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.unit=s)},null,512),[[a,e.tempProduct.unit]])])]),t("div",Mt,[t("div",wt,[xt,n(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.origin_price=s)},null,512),[[a,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",kt,[Ct,n(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.price=s)},null,512),[[a,e.tempProduct.price,void 0,{number:!0}]])])]),Tt,t("div",Et,[At,n(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.description=s)},`
                `,512),[[a,e.tempProduct.description]])]),t("div",It,[Lt,f(g,{editor:e.editor,config:e.editorConfig,modelValue:e.tempProduct.content,"onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.content=s)},null,8,["editor","config","modelValue"])]),Dt,t("div",$t,[t("div",Nt,[Ft,n(t("input",{id:"country",type:"text",class:"form-control",placeholder:"請輸入國家","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.country=s)},null,512),[[a,e.tempProduct.country]])]),t("div",Bt,[Ot,n(t("input",{id:"area",type:"text",class:"form-control",placeholder:"請輸入產區","onUpdate:modelValue":o[11]||(o[11]=s=>e.tempProduct.area=s)},null,512),[[a,e.tempProduct.area]])])]),t("div",Ht,[t("div",Rt,[St,n(t("input",{id:"production",type:"text",class:"form-control",placeholder:"請輸入處理方法","onUpdate:modelValue":o[12]||(o[12]=s=>e.tempProduct.production=s)},null,512),[[a,e.tempProduct.production]])]),t("div",jt,[zt,n(t("input",{id:"roast",type:"text",class:"form-control",placeholder:"請輸入烘焙程度","onUpdate:modelValue":o[13]||(o[13]=s=>e.tempProduct.roast=s)},null,512),[[a,e.tempProduct.roast,void 0,{number:!0}]])])]),t("div",qt,[t("div",Gt,[n(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[14]||(o[14]=s=>e.tempProduct.is_enabled=s),"true-value":1,"false-value":0},null,512),[[E,e.tempProduct.is_enabled]]),t("label",Jt,p(e.tempProduct.is_enabled?"啟用":"未啟用"),1)])])])])]),t("div",Kt,[Qt,t("button",{type:"button",class:"btn btn-dark",disabled:i.isProcessing,onClick:o[15]||(o[15]=s=>l.$emit("update-product",e.tempProduct))},[i.isProcessing?(u(),m("span",Xt)):U("",!0),V(" "+p(i.isNew?"新增產品":"更新產品"),1)],8,Wt)])])])],512)}const Zt=M(J,[["render",Yt]]),{VITE_API:v,VITE_PATH:y}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},te={data(){return{products:[],tempProduct:{imagesUrl:[]},pagination:{},isNew:!1,isLoading:!1,isProcessing:!1}},components:{AdminPagination:T,ProductModal:Zt,DelProductModalVue:z},methods:{getProducts(l=1){this.isLoading=!0,this.$http.get(`${v}/api/${y}/admin/products?page=${l}`).then(o=>{const{products:i,pagination:r}=o.data;this.isLoading=!1,this.products=i,this.pagination=r}).catch(o=>{var r,e;const i=((e=(r=o.response)==null?void 0:r.data)==null?void 0:e.message)||"資料錯誤";this.isLoading=!1,h.fire({title:`${i}`,icon:"error"})})},openModal(l,o){l==="new"?(this.isNew=!0,this.tempProduct={imagesUrl:[]},this.$refs.productModal.showModal()):l==="edit"?(this.tempProduct={...o},this.isNew=!1,this.$refs.productModal.showModal()):l==="del"&&(this.tempProduct={...o},this.$refs.delProductModal.showModal())},updateProduct(){let l="post",o=`${v}/api/${y}/admin/product`;this.isNew||(l="put",o=`${v}/api/${y}/admin/product/${this.tempProduct.id}`),this.isProcessing=!0,this.loadingItem="",this.$http[l](o,{data:this.tempProduct}).then(i=>{h.fire({title:`${i.data.message}`,icon:"success"}),this.isProcessing=!1,this.$refs.productModal.hideModal(),this.getProducts()}).catch(i=>{var e,d;this.isProcessing=!1;const r=((d=(e=i.response)==null?void 0:e.data)==null?void 0:d.message)||"資料錯誤";h.fire({title:`${r}`,icon:"error"})})},delProduct(){this.isProcessing=!0,this.$http.delete(`${v}/api/${y}/admin/product/${this.tempProduct.id}`).then(l=>{h.fire({title:`${l.data.message}`,icon:"success"}),this.$refs.delProductModal.hideModal(),this.isProcessing=!1,this.getProducts()}).catch(l=>{var i,r;this.isProcessing=!1;const o=((r=(i=l.response)==null?void 0:i.data)==null?void 0:r.message)||"資料錯誤";h.fire({title:`${o}`,icon:"error"})})}},mounted(){this.getProducts()}},ee={class:"mt-2"},oe={class:"text-end mt-4"},se={class:"table-responsive-lg"},le={class:"table mt-4"},ie=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),de={class:"text-center"},ne={class:"text-center"},re={class:"btn-group"},ce=["onClick"],ae=["onClick"];function ue(l,o,i,r,e,d){const g=b("VueLoading"),s=b("AdminPagination"),_=b("ProductModal"),P=b("DelProductModalVue");return u(),m("div",ee,[f(g,{active:e.isLoading,"onUpdate:active":o[0]||(o[0]=c=>e.isLoading=c)},null,8,["active"]),t("div",null,[t("div",oe,[t("button",{class:"btn btn-dark",onClick:o[1]||(o[1]=c=>d.openModal("new"))}," 建立新的產品 ")]),t("div",se,[t("table",le,[ie,t("tbody",null,[(u(!0),m(x,null,k(e.products,c=>(u(),m("tr",{key:c.id},[t("td",null,p(c.category),1),t("td",null,p(c.title),1),t("td",de,p(l.$filters.currency(c.origin_price)),1),t("td",ne,p(l.$filters.currency(c.price)),1),t("td",null,[t("span",{class:A({"text-success":c.is_enabled})},p(c.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",re,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:C=>d.openModal("edit",c)}," 編輯 ",8,ce),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:C=>d.openModal("del",c)}," 刪除 ",8,ae)])])]))),128))])])]),f(s,{pages:e.pagination,onChangePage:d.getProducts},null,8,["pages","onChangePage"]),f(_,{ref:"productModal",onUpdateProduct:d.updateProduct,product:e.tempProduct,"is-processing":e.isProcessing,"is-new":e.isNew},null,8,["onUpdateProduct","product","is-processing","is-new"]),f(P,{ref:"delProductModal",onDelProduct:d.delProduct,"is-processing":e.isProcessing,product:e.tempProduct},null,8,["onDelProduct","is-processing","product"])])])}const be=M(te,[["render",ue]]);export{be as default};

import{m as V,A as T}from"./modalMixin-6e222bc3.js";import{_ as M,o as u,c as m,a as t,d as U,t as p,j as d,v as r,F as w,n as x,f as y,H as A,r as f,b as g,p as E}from"./index-dfe46513.js";import{T as h}from"./Toast-81c1f1d0.js";const I={props:{product:{type:Object,default(){return{}}},isProcessing:{type:Boolean,default:!1}},data(){return{modal:{}}},mixins:[V]},L={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},D={class:"modal-dialog"},$={class:"modal-content border-0"},N=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),F={class:"modal-body"},B={class:"text-danger"},H={class:"modal-footer"},O=t("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1),R=["disabled"];function j(l,o,i,c,e,n){return u(),m("div",L,[t("div",D,[t("div",$,[N,t("div",F,[U(" 是否刪除 "),t("strong",B,p(i.product.title),1),U(" 商品(刪除後將無法恢復)。 ")]),t("div",H,[O,t("button",{type:"button",class:"btn btn-danger",disabled:i.isProcessing,onClick:o[0]||(o[0]=s=>l.$emit("del-product"))}," 確認刪除 ",8,R)])])])],512)}const S=M(I,[["render",j]]),{VITE_API:z,VITE_PATH:q}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},G={props:{product:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1},isProcessing:{type:Boolean,default:!1}},data(){return{modal:{},tempProduct:{}}},mixins:[V],watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile(){const l=this.$refs.files.files[0],o=new FormData;o.append("file-to-upload",l),this.$http.post(`${z}/api/${q}/admin/upload`,o).then(i=>{this.tempProduct.imageUrl=i.data.imageUrl,this.$refs.files.value=""}).catch(()=>{h.fire({title:"檔案格式不符",icon:"error"})})}}},J={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},K={class:"modal-dialog modal-xl"},Q={class:"modal-content border-0"},W={class:"modal-header bg-dark text-white"},X={id:"productModalLabel",class:"modal-title"},Y=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Z={class:"modal-body"},tt={class:"row"},et={class:"col-sm-4"},ot={class:"mb-2"},st={class:"mb-3"},lt=t("label",{for:"imageUrl",class:"form-label h4"},"輸入主圖網址",-1),it=["src","alt"],dt={class:"form-group"},nt=t("label",{for:"customFile"},"或 上傳圖片 ",-1),rt=t("hr",null,null,-1),ct=t("p",{class:"mb-3 h4 pt-4"},"多圖新增",-1),at={key:0,class:"mt-5"},ut=["onUpdate:modelValue"],mt=["src"],pt=["onClick"],_t={key:0},ht={class:"col-sm-8"},bt={class:"mb-3"},ft=t("label",{for:"title",class:"form-label"},"標題",-1),gt={class:"row"},Pt={class:"mb-3 col-md-6"},vt=t("label",{for:"category",class:"form-label"},"分類",-1),yt={class:"mb-3 col-md-6"},Ut=t("label",{for:"price",class:"form-label"},"單位",-1),Mt={class:"row"},Vt={class:"mb-3 col-md-6"},wt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),xt={class:"mb-3 col-md-6"},kt=t("label",{for:"price",class:"form-label"},"售價",-1),Ct=t("hr",null,null,-1),Tt={class:"mb-3"},At=t("label",{for:"description",class:"form-label"},"產品描述",-1),Et={class:"mb-3"},It=t("label",{for:"content",class:"form-label"},"說明內容",-1),Lt=t("hr",null,null,-1),Dt={class:"row"},$t={class:"mb-3 col-md-6"},Nt=t("label",{for:"category",class:"form-label"},"國家",-1),Ft={class:"mb-3 col-md-6"},Bt=t("label",{for:"price",class:"form-label"},"產區",-1),Ht={class:"row"},Ot={class:"mb-3 col-md-6"},Rt=t("label",{for:"category",class:"form-label"},"處理方法",-1),jt={class:"mb-3 col-md-6"},St=t("label",{for:"price",class:"form-label"},"烘焙度",-1),zt={class:"mb-3"},qt={class:"form-check"},Gt={class:"form-check-label",for:"is_enabled"},Jt={class:"modal-footer"},Kt=t("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1),Qt=["disabled"],Wt={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"};function Xt(l,o,i,c,e,n){return u(),m("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("h5",X,[t("span",null,p(i.isNew?"新增":"編輯")+"產品",1)]),Y]),t("div",Z,[t("div",tt,[t("div",et,[t("div",ot,[t("div",st,[lt,d(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[r,e.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:e.tempProduct.title},null,8,it),t("div",dt,[nt,t("input",{type:"file",id:"customFile",class:"form-control",ref:"files",onChange:o[1]||(o[1]=(...s)=>n.uploadFile&&n.uploadFile(...s))},null,544)])]),rt,ct,e.tempProduct.imagesUrl?(u(),m("div",at,[(u(!0),m(w,null,x(e.tempProduct.imagesUrl,(s,_)=>(u(),m("div",{class:"mb-3",key:_},[d(t("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":b=>e.tempProduct.imagesUrl[_]=b,placeholder:"請輸入連結"},null,8,ut),[[r,e.tempProduct.imagesUrl[_]]]),t("div",null,[t("img",{class:"img-fluid",src:s},null,8,mt)]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:b=>e.tempProduct.imagesUrl.splice(_,1)}," 移除 ",8,pt)]))),128)),e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]||!e.tempProduct.imagesUrl.length?(u(),m("div",_t,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):y("",!0)])):y("",!0)]),t("div",ht,[t("div",bt,[ft,d(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.title=s)},null,512),[[r,e.tempProduct.title]])]),t("div",gt,[t("div",Pt,[vt,d(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category=s)},null,512),[[r,e.tempProduct.category]])]),t("div",yt,[Ut,d(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.unit=s)},null,512),[[r,e.tempProduct.unit]])])]),t("div",Mt,[t("div",Vt,[wt,d(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.origin_price=s)},null,512),[[r,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",xt,[kt,d(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.price=s)},null,512),[[r,e.tempProduct.price,void 0,{number:!0}]])])]),Ct,t("div",Tt,[At,d(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.description=s)},`
                `,512),[[r,e.tempProduct.description]])]),t("div",Et,[It,d(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.content=s)},`
                `,512),[[r,e.tempProduct.content]])]),Lt,t("div",Dt,[t("div",$t,[Nt,d(t("input",{id:"country",type:"text",class:"form-control",placeholder:"請輸入國家","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.country=s)},null,512),[[r,e.tempProduct.country]])]),t("div",Ft,[Bt,d(t("input",{id:"area",type:"text",class:"form-control",placeholder:"請輸入產區","onUpdate:modelValue":o[11]||(o[11]=s=>e.tempProduct.area=s)},null,512),[[r,e.tempProduct.area]])])]),t("div",Ht,[t("div",Ot,[Rt,d(t("input",{id:"production",type:"text",class:"form-control",placeholder:"請輸入處理方法","onUpdate:modelValue":o[12]||(o[12]=s=>e.tempProduct.production=s)},null,512),[[r,e.tempProduct.production]])]),t("div",jt,[St,d(t("input",{id:"roast",type:"text",class:"form-control",placeholder:"請輸入烘焙程度","onUpdate:modelValue":o[13]||(o[13]=s=>e.tempProduct.roast=s)},null,512),[[r,e.tempProduct.roast,void 0,{number:!0}]])])]),t("div",zt,[t("div",qt,[d(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[14]||(o[14]=s=>e.tempProduct.is_enabled=s),"true-value":1,"false-value":0},null,512),[[A,e.tempProduct.is_enabled]]),t("label",Gt,p(e.tempProduct.is_enabled?"啟用":"未啟用"),1)])])])])]),t("div",Jt,[Kt,t("button",{type:"button",class:"btn btn-primary",disabled:i.isProcessing,onClick:o[15]||(o[15]=s=>l.$emit("update-product",e.tempProduct))},[i.isProcessing?(u(),m("span",Wt)):y("",!0),U(" "+p(i.isNew?"新增產品":"更新產品"),1)],8,Qt)])])])],512)}const Yt=M(G,[["render",Xt]]),{VITE_API:P,VITE_PATH:v}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},Zt={data(){return{products:[],tempProduct:{imagesUrl:[]},pagination:{},isNew:!1,isLoading:!1,isProcessing:!1}},components:{AdminPagination:T,ProductModal:Yt,DelProductModalVue:S},methods:{getProducts(l=1){this.isLoading=!0,this.$http.get(`${P}/api/${v}/admin/products?page=${l}`).then(o=>{const{products:i,pagination:c}=o.data;this.isLoading=!1,this.products=i,this.pagination=c}).catch(o=>{var c,e;const i=((e=(c=o.response)==null?void 0:c.data)==null?void 0:e.message)||"資料錯誤";this.isLoading=!1,h.fire({title:`${i}`,icon:"error"})})},openModal(l,o){l==="new"?(this.isNew=!0,this.tempProduct={imagesUrl:[]},this.$refs.productModal.showModal()):l==="edit"?(this.tempProduct={...o},this.isNew=!1,this.$refs.productModal.showModal()):l==="del"&&(this.tempProduct={...o},this.$refs.delProductModal.showModal())},updateProduct(){let l="post",o=`${P}/api/${v}/admin/product`;this.isNew||(l="put",o=`${P}/api/${v}/admin/product/${this.tempProduct.id}`),this.isProcessing=!0,this.loadingItem="",this.$http[l](o,{data:this.tempProduct}).then(i=>{h.fire({title:`${i.data.message}`,icon:"success"}),this.isProcessing=!1,this.$refs.productModal.hideModal(),this.getProducts()}).catch(i=>{var e,n;this.isProcessing=!1;const c=((n=(e=i.response)==null?void 0:e.data)==null?void 0:n.message)||"資料錯誤";h.fire({title:`${c}`,icon:"error"})})},delProduct(){this.isProcessing=!0,this.$http.delete(`${P}/api/${v}/admin/product/${this.tempProduct.id}`).then(l=>{h.fire({title:`${l.data.message}`,icon:"success"}),this.$refs.delProductModal.hideModal(),this.isProcessing=!1,this.getProducts()}).catch(l=>{var i,c;this.isProcessing=!1;const o=((c=(i=l.response)==null?void 0:i.data)==null?void 0:c.message)||"資料錯誤";h.fire({title:`${o}`,icon:"error"})})}},mounted(){this.getProducts()}},te={class:"mt-2"},ee={class:"text-end mt-4"},oe={class:"table-responsive"},se={class:"table mt-4"},le=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),ie={class:"text-center"},de={class:"text-center"},ne={class:"btn-group"},re=["onClick"],ce=["onClick"];function ae(l,o,i,c,e,n){const s=f("VueLoading"),_=f("AdminPagination"),b=f("ProductModal"),k=f("DelProductModalVue");return u(),m("div",te,[g(s,{active:e.isLoading,"onUpdate:active":o[0]||(o[0]=a=>e.isLoading=a)},null,8,["active"]),t("div",null,[t("div",ee,[t("button",{class:"btn btn-primary",onClick:o[1]||(o[1]=a=>n.openModal("new"))}," 建立新的產品 ")]),t("div",oe,[t("table",se,[le,t("tbody",null,[(u(!0),m(w,null,x(e.products,a=>(u(),m("tr",{key:a.id},[t("td",null,p(a.category),1),t("td",null,p(a.title),1),t("td",ie,p(l.$filters.currency(a.origin_price)),1),t("td",de,p(l.$filters.currency(a.price)),1),t("td",null,[t("span",{class:E({"text-success":a.is_enabled})},p(a.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",ne,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:C=>n.openModal("edit",a)}," 編輯 ",8,re),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:C=>n.openModal("del",a)}," 刪除 ",8,ce)])])]))),128))])])]),g(_,{pages:e.pagination,onChangePage:n.getProducts},null,8,["pages","onChangePage"]),g(b,{ref:"productModal",onUpdateProduct:n.updateProduct,product:e.tempProduct,"is-processing":e.isProcessing,"is-new":e.isNew},null,8,["onUpdateProduct","product","is-processing","is-new"]),g(k,{ref:"delProductModal",onDelProduct:n.delProduct,"is-processing":e.isProcessing,product:e.tempProduct},null,8,["onDelProduct","is-processing","product"])])])}const _e=M(Zt,[["render",ae]]);export{_e as default};

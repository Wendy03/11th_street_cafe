import{m as E,A as I}from"./modalMixin-954fc986.js";import{_ as k,o as a,c as u,a as e,d as x,t as m,r as h,b as n,w as L,l as _,v as f,F as T,s as A,e as w,u as g,B as D}from"./index-92808453.js";import{T as P}from"./Toast-e4ab6f56.js";import{C as F}from"./ckeditor-0f8724a4.js";const $={props:{product:{type:Object,default(){return{}}},isProcessing:{type:Boolean,default:!1}},data(){return{modal:{}}},mixins:[E]},N={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},B={class:"modal-dialog"},O={class:"modal-content border-0"},q=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delProductModalLabel",class:"modal-title"},[e("span",null,"刪除產品")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),H={class:"modal-body"},R={class:"text-danger"},S={class:"modal-footer"},j=e("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1),z=["disabled"];function G(l,o,i,c,t,r){return a(),u("div",N,[e("div",B,[e("div",O,[q,e("div",H,[x(" 是否刪除 "),e("strong",R,m(i.product.title),1),x(" 商品(刪除後將無法恢復)。 ")]),e("div",S,[j,e("button",{type:"button",class:"btn btn-danger",disabled:i.isProcessing,onClick:o[0]||(o[0]=p=>l.$emit("del-product"))}," 確認刪除 ",8,z)])])])],512)}const J=k($,[["render",G]]),{VITE_API:K,VITE_PATH:Q}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},W={props:{product:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1},isProcessing:{type:Boolean,default:!1}},data(){return{modal:{},tempProduct:{},editor:F,editorConfig:{toolbar:{items:["heading","bold","italic","link","undo","redo","|"]}}}},mixins:[E],watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile(){const l=this.$refs.files.files[0],o=new FormData;o.append("file-to-upload",l),this.$http.post(`${K}/api/${Q}/admin/upload`,o).then(i=>{this.tempProduct.imageUrl=i.data.imageUrl,this.$refs.files.value=""}).catch(()=>{P.fire({title:"檔案格式不符",icon:"error"})})}}},X={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Y={class:"modal-dialog modal-xl"},Z={class:"modal-content border-0"},ee={class:"modal-header bg-black text-white"},te={id:"productModalLabel",class:"modal-title"},oe=e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),se={class:"modal-body"},le={class:"row"},ie={class:"col-sm-4"},de={class:"mb-2"},ne={class:"mb-3"},re=e("label",{for:"imageUrl",class:"form-label h4"},"輸入主圖網址",-1),ce=["src","alt"],ae={class:"form-group"},ue=e("label",{for:"customFile"},"或 上傳圖片 ",-1),me=e("hr",null,null,-1),pe=e("p",{class:"mb-3 h4 pt-4"},"多圖新增",-1),_e={key:0,class:"mt-5"},he=["onUpdate:modelValue"],be=["src"],fe=["onClick"],ge={key:0},Pe={class:"col-sm-8"},ve={class:"mb-3"},Ve=e("label",{for:"title",class:"form-label"},"標題",-1),ye={class:"row"},Me={class:"mb-3 col-md-6"},Ue=e("label",{for:"category",class:"form-label"},"分類",-1),we={class:"mb-3 col-md-6"},xe=e("label",{for:"price",class:"form-label"},"單位",-1),ke={class:"row"},Ce={class:"mb-3 col-md-6"},Ee=e("label",{for:"origin_price",class:"form-label"},"原價",-1),Te={class:"mb-3 col-md-6"},Ae=e("label",{for:"price",class:"form-label"},"售價",-1),Ie=e("hr",null,null,-1),Le={class:"mb-3"},De=e("label",{for:"description",class:"form-label"},"產品描述",-1),Fe={class:"mb-3"},$e=e("p",null,"說明內容",-1),Ne=e("hr",null,null,-1),Be={class:"row"},Oe={class:"mb-3 col-md-6"},qe=e("label",{for:"category",class:"form-label"},"國家",-1),He={class:"mb-3 col-md-6"},Re=e("label",{for:"price",class:"form-label"},"產區",-1),Se={class:"row"},je={class:"mb-3 col-md-6"},ze=e("label",{for:"category",class:"form-label"},"處理方法",-1),Ge={class:"mb-3 col-md-6"},Je=e("label",{for:"price",class:"form-label"},"烘焙度",-1),Ke={class:"mb-3"},Qe={class:"form-check"},We={class:"form-check-label",for:"is_enabled"},Xe={class:"modal-footer"},Ye=e("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1),Ze=["disabled"],et={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"};function tt(l,o,i,c,t,r){const p=h("VField"),b=h("ErrorMessage"),M=h("ckeditor"),U=h("VForm");return a(),u("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("h5",te,[e("span",null,m(i.isNew?"新增":"編輯")+"產品",1)]),oe]),n(U,{ref:"form",onSubmit:o[15]||(o[15]=d=>l.$emit("update-product",t.tempProduct))},{default:L(({errors:d})=>[e("div",se,[e("div",le,[e("div",ie,[e("div",de,[e("div",ne,[re,_(e("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>t.tempProduct.imageUrl=s),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[f,t.tempProduct.imageUrl]])]),e("img",{class:"img-fluid",src:t.tempProduct.imageUrl,alt:t.tempProduct.title},null,8,ce),e("div",ae,[ue,e("input",{type:"file",id:"customFile",class:"form-control",ref:"files",onChange:o[1]||(o[1]=(...s)=>r.uploadFile&&r.uploadFile(...s))},null,544)])]),me,pe,t.tempProduct.imagesUrl?(a(),u("div",_e,[(a(!0),u(T,null,A(t.tempProduct.imagesUrl,(s,v)=>(a(),u("div",{class:"mb-3",key:v},[_(e("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":C=>t.tempProduct.imagesUrl[v]=C,placeholder:"請輸入連結"},null,8,he),[[f,t.tempProduct.imagesUrl[v]]]),e("div",null,[e("img",{class:"img-fluid",src:s},null,8,be)]),e("button",{type:"button",class:"btn btn-outline-danger",onClick:C=>t.tempProduct.imagesUrl.splice(v,1)}," 移除 ",8,fe)]))),128)),t.tempProduct.imagesUrl[t.tempProduct.imagesUrl.length-1]||!t.tempProduct.imagesUrl.length?(a(),u("div",ge,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>t.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):w("",!0)])):w("",!0)]),e("div",Pe,[e("div",ve,[Ve,n(p,{id:"title",name:"標題",type:"text",class:g(["form-control",{"is-invalid":d.標題}]),placeholder:"請輸入標題",modelValue:t.tempProduct.title,"onUpdate:modelValue":o[3]||(o[3]=s=>t.tempProduct.title=s),rules:"required"},null,8,["modelValue","class"]),n(b,{name:"標題",class:"invalid-feedback"})]),e("div",ye,[e("div",Me,[Ue,n(p,{id:"category",name:"分類",type:"text",class:g(["form-control",{"is-invalid":d.分類}]),placeholder:"請輸入分類",modelValue:t.tempProduct.category,"onUpdate:modelValue":o[4]||(o[4]=s=>t.tempProduct.category=s),rules:"required"},null,8,["modelValue","class"]),n(b,{name:"分類",class:"invalid-feedback"})]),e("div",we,[xe,n(p,{id:"unit",name:"單位",type:"text",class:g(["form-control",{"is-invalid":d.單位}]),placeholder:"請輸入單位",modelValue:t.tempProduct.unit,"onUpdate:modelValue":o[5]||(o[5]=s=>t.tempProduct.unit=s),rules:"required"},null,8,["modelValue","class"]),n(b,{name:"單位",class:"invalid-feedback"})])]),e("div",ke,[e("div",Ce,[Ee,n(p,{id:"origin_price",type:"number",name:"原價",min:"0",class:g(["form-control",{"is-invalid":d.原價}]),placeholder:"請輸入原價",modelValue:t.tempProduct.origin_price,"onUpdate:modelValue":o[6]||(o[6]=s=>t.tempProduct.origin_price=s),modelModifiers:{number:!0},rules:"required|min_value:0|numeric"},null,8,["modelValue","class"]),n(b,{name:"原價",class:"invalid-feedback"})]),e("div",Te,[Ae,n(p,{id:"price",type:"number",name:"售價",min:"0",class:g(["form-control",{"is-invalid":d.售價}]),placeholder:"請輸入售價",modelValue:t.tempProduct.price,"onUpdate:modelValue":o[7]||(o[7]=s=>t.tempProduct.price=s),modelModifiers:{number:!0},rules:"required|min_value:0|numeric"},null,8,["modelValue","class"]),n(b,{name:"售價",class:"invalid-feedback"})])]),Ie,e("div",Le,[De,_(e("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[8]||(o[8]=s=>t.tempProduct.description=s)},`
                  `,512),[[f,t.tempProduct.description]])]),e("div",Fe,[$e,n(M,{editor:t.editor,config:t.editorConfig,modelValue:t.tempProduct.content,"onUpdate:modelValue":o[9]||(o[9]=s=>t.tempProduct.content=s)},null,8,["editor","config","modelValue"])]),Ne,e("div",Be,[e("div",Oe,[qe,_(e("input",{id:"country",type:"text",class:"form-control",placeholder:"請輸入國家","onUpdate:modelValue":o[10]||(o[10]=s=>t.tempProduct.country=s)},null,512),[[f,t.tempProduct.country]])]),e("div",He,[Re,_(e("input",{id:"area",type:"text",class:"form-control",placeholder:"請輸入產區","onUpdate:modelValue":o[11]||(o[11]=s=>t.tempProduct.area=s)},null,512),[[f,t.tempProduct.area]])])]),e("div",Se,[e("div",je,[ze,_(e("input",{id:"production",type:"text",class:"form-control",placeholder:"請輸入處理方法","onUpdate:modelValue":o[12]||(o[12]=s=>t.tempProduct.production=s)},null,512),[[f,t.tempProduct.production]])]),e("div",Ge,[Je,_(e("input",{id:"roast",type:"text",class:"form-control",placeholder:"請輸入烘焙程度","onUpdate:modelValue":o[13]||(o[13]=s=>t.tempProduct.roast=s)},null,512),[[f,t.tempProduct.roast,void 0,{number:!0}]])])]),e("div",Ke,[e("div",Qe,[_(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[14]||(o[14]=s=>t.tempProduct.is_enabled=s),"true-value":1,"false-value":0},null,512),[[D,t.tempProduct.is_enabled]]),e("label",We,m(t.tempProduct.is_enabled?"啟用":"未啟用"),1)])])])])]),e("div",Xe,[Ye,e("button",{type:"submit",class:"btn btn-dark",disabled:i.isProcessing},[i.isProcessing?(a(),u("span",et)):w("",!0),x(" "+m(i.isNew?"新增產品":"更新產品"),1)],8,Ze)])]),_:1},512)])])],512)}const ot=k(W,[["render",tt]]),{VITE_API:V,VITE_PATH:y}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},st={data(){return{products:[],tempProduct:{imagesUrl:[]},pagination:{},isNew:!1,isLoading:!1,isProcessing:!1}},components:{AdminPagination:I,ProductModal:ot,DelProductModalVue:J},methods:{getProducts(l=1){this.isLoading=!0,this.$http.get(`${V}/api/${y}/admin/products?page=${l}`).then(o=>{const{products:i,pagination:c}=o.data;this.isLoading=!1,this.products=i,this.pagination=c}).catch(o=>{var c,t;const i=((t=(c=o.response)==null?void 0:c.data)==null?void 0:t.message)||"資料錯誤";this.isLoading=!1,P.fire({title:`${i}`,icon:"error"})})},openModal(l,o){l==="new"?(this.isNew=!0,this.tempProduct={imagesUrl:[]},this.$refs.productModal.showModal()):l==="edit"?(this.tempProduct={...o},this.isNew=!1,this.$refs.productModal.showModal()):l==="del"&&(this.tempProduct={...o},this.$refs.delProductModal.showModal())},updateProduct(){let l="post",o=`${V}/api/${y}/admin/product`;this.isNew||(l="put",o=`${V}/api/${y}/admin/product/${this.tempProduct.id}`),this.isProcessing=!0,this.loadingItem="",this.$http[l](o,{data:this.tempProduct}).then(i=>{P.fire({title:`${i.data.message}`,icon:"success"}),this.isProcessing=!1,this.$refs.productModal.hideModal(),this.getProducts()}).catch(i=>{var t,r;this.isProcessing=!1;const c=((r=(t=i.response)==null?void 0:t.data)==null?void 0:r.message)||"資料錯誤";P.fire({title:`${c}`,icon:"error"})})},delProduct(){this.isProcessing=!0,this.$http.delete(`${V}/api/${y}/admin/product/${this.tempProduct.id}`).then(l=>{P.fire({title:`${l.data.message}`,icon:"success"}),this.$refs.delProductModal.hideModal(),this.isProcessing=!1,this.getProducts()}).catch(l=>{var i,c;this.isProcessing=!1;const o=((c=(i=l.response)==null?void 0:i.data)==null?void 0:c.message)||"資料錯誤";P.fire({title:`${o}`,icon:"error"})})}},mounted(){this.getProducts()}},lt={class:"mt-2"},it={class:"text-end mt-4"},dt={class:"table-responsive-lg"},nt={class:"table mt-4"},rt=e("thead",null,[e("tr",null,[e("th",{width:"120"},"分類"),e("th",null,"產品名稱"),e("th",{width:"120"},"原價"),e("th",{width:"120"},"售價"),e("th",{width:"100"},"是否啟用"),e("th",{width:"120"},"編輯")])],-1),ct={class:"text-center"},at={class:"text-center"},ut={class:"btn-group"},mt=["onClick"],pt=["onClick"];function _t(l,o,i,c,t,r){const p=h("VueLoading"),b=h("AdminPagination"),M=h("ProductModal"),U=h("DelProductModalVue");return a(),u("div",lt,[n(p,{active:t.isLoading,"onUpdate:active":o[0]||(o[0]=d=>t.isLoading=d)},null,8,["active"]),e("div",null,[e("div",it,[e("button",{class:"btn btn-dark",onClick:o[1]||(o[1]=d=>r.openModal("new"))}," 建立新的產品 ")]),e("div",dt,[e("table",nt,[rt,e("tbody",null,[(a(!0),u(T,null,A(t.products,d=>(a(),u("tr",{key:d.id},[e("td",null,m(d.category),1),e("td",null,m(d.title),1),e("td",ct,m(l.$filters.currency(d.origin_price)),1),e("td",at,m(l.$filters.currency(d.price)),1),e("td",null,[e("span",{class:g({"text-success":d.is_enabled})},m(d.is_enabled?"啟用":"未啟用"),3)]),e("td",null,[e("div",ut,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:s=>r.openModal("edit",d)}," 編輯 ",8,mt),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:s=>r.openModal("del",d)}," 刪除 ",8,pt)])])]))),128))])])]),n(b,{pages:t.pagination,onChangePage:r.getProducts},null,8,["pages","onChangePage"]),n(M,{ref:"productModal",onUpdateProduct:r.updateProduct,product:t.tempProduct,"is-processing":t.isProcessing,"is-new":t.isNew},null,8,["onUpdateProduct","product","is-processing","is-new"]),n(U,{ref:"delProductModal",onDelProduct:r.delProduct,"is-processing":t.isProcessing,product:t.tempProduct},null,8,["onDelProduct","is-processing","product"])])])}const Pt=k(st,[["render",_t]]);export{Pt as default};
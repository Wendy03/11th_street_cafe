import{m as C,A as V}from"./modalMixin-538e6ada.js";import{_ as x,o as i,c as r,a as e,d as y,t as o,F as p,s as v,u as P,l as w,B as L,e as $,r as f,b as O}from"./index-ff8ae3b9.js";import{T as h}from"./Toast-3d07b7ec.js";import"./base-component-0116f244.js";const A={props:{order:{type:Object,default(){return{}}},isProcessing:{type:Boolean,default:!1}},data(){return{modal:{}}},mixins:[C]},D={id:"delProductModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},E={class:"modal-dialog"},T={class:"modal-content border-0"},B=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delProductModalLabel",class:"modal-title"},[e("span",null,"刪除訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},I={class:"text-danger mb-3"},N=e("h5",null,"選購商品",-1),j={class:"table-responsive"},q={class:"table"},F=e("thead",null,[e("tr")],-1),H={class:"text-end"},R={class:"modal-footer"},S=e("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1),z=["disabled"];function G(l,d,n,a,t,c){return i(),r("div",D,[e("div",E,[e("div",T,[B,e("div",U,[y(" 是否刪除 "),e("strong",I,o(n.order.id),1),y(" 訂單 "),N,e("div",j,[e("table",q,[F,e("tbody",null,[(i(!0),r(p,null,v(n.order.products,u=>(i(),r("tr",{key:u.id},[e("th",null,o(u.product.title),1),e("td",null,o(u.qty)+" / "+o(u.product.unit),1),e("td",H,o(l.$filters.currency(u.final_total)),1)]))),128))])])]),y(" (刪除後將無法恢復)。 ")]),e("div",R,[S,e("button",{type:"button",class:"btn btn-danger",disabled:n.isProcessing,onClick:d[0]||(d[0]=u=>l.$emit("del-order"))}," 確認刪除 ",8,z)])])])],512)}const J=x(A,[["render",G]]),K={props:{order:{type:Object,default(){return{}}},isProcessing:{type:Boolean,default:!1}},data(){return{modal:{},tempOrder:{}}},mixins:[C],watch:{order(){this.tempOrder=this.order}}},Q={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},W={class:"modal-dialog modal-xl",role:"document"},X={class:"modal-content border-0"},Y=e("div",{class:"modal-header bg-black text-white"},[e("h5",{class:"modal-title",id:"exampleModalLabel"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Z={class:"modal-body"},ee={class:"row"},te={class:"col-md-4"},se=e("h3",null,"用戶資料",-1),oe={class:"table"},le=e("th",{style:{width:"100px"}},"姓名",-1),de=e("th",null,"Email",-1),ne=e("th",null,"電話",-1),ie=e("th",null,"地址",-1),re={class:"col-md-8"},ae=e("h3",null,"訂單細節",-1),ce={class:"table"},ue=e("th",{style:{width:"100px"}},"訂單編號",-1),_e=e("th",null,"下單時間",-1),he=e("th",null,"付款狀態",-1),pe=e("th",null,"總金額",-1),me=e("h3",null,"選購商品",-1),be={class:"table"},ge=e("thead",null,[e("tr")],-1),fe={class:"text-end"},Oe={class:"d-flex justify-content-end"},ye={class:"form-check"},$e=["id"],ve=["for"],Me={class:"modal-footer"},ke=e("button",{type:"button",class:"btn btn-outline-gray","data-bs-dismiss":"modal"}," 取消 ",-1),Pe=["disabled"],xe={key:0,class:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"};function Ce(l,d,n,a,t,c){var u,m,b,g;return i(),r("div",Q,[e("div",W,[e("div",X,[Y,e("div",Z,[e("div",ee,[e("div",te,[se,e("table",oe,[e("tbody",null,[e("tr",null,[le,e("td",null,o((u=t.tempOrder.user)==null?void 0:u.name),1)]),e("tr",null,[de,e("td",null,o((m=t.tempOrder.user)==null?void 0:m.email),1)]),e("tr",null,[ne,e("td",null,o((b=t.tempOrder.user)==null?void 0:b.tel),1)]),e("tr",null,[ie,e("td",null,o((g=t.tempOrder.user)==null?void 0:g.address),1)])])])]),e("div",re,[ae,e("table",ce,[e("tbody",null,[e("tr",null,[ue,e("td",null,o(t.tempOrder.id),1)]),e("tr",null,[_e,e("td",null,o(l.$filters.date(t.tempOrder.create_at)),1)]),e("tr",null,[he,e("td",null,[e("p",{class:P({"text-success":t.tempOrder.is_paid})},o(t.tempOrder.is_paid?"已付款":"尚未付款"),3)])]),e("tr",null,[pe,e("td",null,o(l.$filters.currency(t.tempOrder.total)),1)])])]),me,e("table",be,[ge,e("tbody",null,[(i(!0),r(p,null,v(t.tempOrder.products,s=>(i(),r("tr",{key:s.id},[e("th",null,o(s.product.title),1),e("td",null,o(s.qty)+" / "+o(s.product.unit),1),e("td",fe,o(l.$filters.currency(s.final_total)),1)]))),128))])]),e("div",Oe,[e("div",ye,[w(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"{tempOrder.id}","onUpdate:modelValue":d[0]||(d[0]=s=>t.tempOrder.is_paid=s)},null,8,$e),[[L,t.tempOrder.is_paid]]),e("label",{class:"form-check-label",for:"{tempOrder.id}"},[e("span",null,o(t.tempOrder.is_paid?"已付款":"未付款"),1)],8,ve)])])])])]),e("div",Me,[ke,e("button",{type:"button",class:"btn btn-dark",disabled:n.isProcessing,onClick:d[1]||(d[1]=s=>l.$emit("update-order",t.tempOrder))},[n.isProcessing?(i(),r("span",xe)):$("",!0),y(" 修改付款狀態 ")],8,Pe)])])])],512)}const we=x(K,[["render",Ce]]),{VITE_API:M,VITE_PATH:k}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},Le={data(){return{orders:[],tempOrder:{},pagination:{},isLoading:!1,isProcessing:!1}},components:{AdminPagination:V,OrderModal:we,DelOrderModal:J},methods:{getOrders(l=1){this.isLoading=!0,this.$http.get(`${M}/api/${k}/admin/orders?page=${l}`).then(d=>{const{orders:n,pagination:a}=d.data;this.isLoading=!1,this.orders=n,this.pagination=a}).catch(d=>{var a,t;const n=((t=(a=d.response)==null?void 0:a.data)==null?void 0:t.message)||"資料錯誤";this.isLoading=!1,h.fire({title:`${n}`,icon:"error"})})},openModal(l,d){l==="edit"?(this.tempOrder={...d},this.$refs.orderModal.showModal()):l==="del"&&(this.tempOrder={...d},this.$refs.delOrderModal.showModal())},updateOrder(l){const d={is_paid:l.is_paid};this.isProcessing=!0,this.$http.put(`${M}/api/${k}/admin/order/${l.id}`,{data:d}).then(n=>{h.fire({title:`${n.data.message}`,icon:"success"}),this.$refs.orderModal.hideModal(),this.isProcessing=!1,this.getOrders()}).catch(n=>{var t,c;this.isProcessing=!1;const a=((c=(t=n.response)==null?void 0:t.data)==null?void 0:c.message)||"資料錯誤";h.fire({title:`${a}`,icon:"error"})})},delOrder(){this.isProcessing=!0,this.$http.delete(`${M}/api/${k}/admin/order/${this.tempOrder.id}`).then(l=>{h.fire({title:`${l.data.message}`,icon:"success"}),this.$refs.delOrderModal.hideModal(),this.isProcessing=!1,this.getOrders()}).catch(l=>{var n,a;this.isProcessing=!1;const d=((a=(n=l.response)==null?void 0:n.data)==null?void 0:a.message)||"資料錯誤";h.fire({title:`${d}`,icon:"error"})})}},mounted(){this.getOrders()}},Ve={class:"table-responsive-lg"},Ae={class:"table mt-4"},De=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),Ee=["textContent"],Te={class:"list-unstyled"},Be={class:"text-right"},Ue={class:"form-check form-switch"},Ie=["id","onUpdate:modelValue","onChange"],Ne=["for"],je={class:"btn-group"},qe=["onClick"],Fe=["onClick"];function He(l,d,n,a,t,c){const u=f("VueLoading"),m=f("AdminPagination"),b=f("OrderModal"),g=f("DelOrderModal");return i(),r("div",null,[O(u,{active:t.isLoading,"onUpdate:active":d[0]||(d[0]=s=>t.isLoading=s)},null,8,["active"]),e("div",Ve,[e("table",Ae,[De,e("tbody",null,[(i(!0),r(p,null,v(t.orders,s=>(i(),r(p,{key:s.id},[t.orders.length?(i(),r("tr",{key:0,class:P({"text-gray":!s.is_paid})},[e("td",null,o(l.$filters.date(s.create_at)),1),e("td",null,[s.user?(i(),r("span",{key:0,textContent:o(s.user.email)},null,8,Ee)):$("",!0)]),e("td",null,[e("ul",Te,[(i(!0),r(p,null,v(s.products,_=>(i(),r("li",{key:_.id},o(_.product.title)+" 數量："+o(_.qty)+" "+o(_.product.unit),1))),128))])]),e("td",Be,o(l.$filters.currency(s.total)),1),e("td",null,[e("div",Ue,[w(e("input",{id:s.id,"onUpdate:modelValue":_=>s.is_paid=_,type:"checkbox",role:"switch",class:"form-check-input",onChange:_=>c.updateOrder(s)},null,40,Ie),[[L,s.is_paid]]),e("label",{class:"form-check-label",for:s.id},[s.is_paid?(i(),r("span",{key:0,class:P({"text-success":s.is_paid,"font-weight-bold":s.is_paid})},o(s.is_paid?"已付款":"尚未付款"),3)):$("",!0)],8,Ne)])]),e("td",null,[e("div",je,[e("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:_=>c.openModal("edit",s)}," 檢視 ",8,qe),e("button",{class:"btn btn-outline-danger btn-sm",onClick:_=>c.openModal("del",s),type:"button"}," 刪除 ",8,Fe)])])],2)):$("",!0)],64))),128))])])]),O(m,{pages:t.pagination,onChangePage:c.getOrders},null,8,["pages","onChangePage"]),O(b,{ref:"orderModal",onUpdateOrder:c.updateOrder,order:t.tempOrder,"is-processing":t.isProcessing},null,8,["onUpdateOrder","order","is-processing"]),O(g,{ref:"delOrderModal",onDelOrder:c.delOrder,"is-processing":t.isProcessing,order:t.tempOrder},null,8,["onDelOrder","is-processing","order"])])}const Je=x(Le,[["render",He]]);export{Je as default};

import{c as g}from"./cartStore-62e4ae02.js";import{m as T,e as w,x as O,_ as $,o as c,c as m,a as e,F as P,p as C,t as d,k as y,v as k,R as E,r as n,b as r,w as V,q as f,d as L}from"./index-26d26e98.js";import{T as x}from"./Toast-37648567.js";import{s as U}from"./statusStore-d8eb7628.js";const D={data(){return{}},methods:{...T(g,["getCarts","addCouponCode"])},computed:{...w(g,["cart"]),...O(g,["coupon_code"])},mounted(){this.getCarts()}},S={class:"col-lg-4"},A={class:"border p-4 mb-4 bg-light"},I=["src","alt"],q={class:"w-100"},F={class:"d-flex justify-content-between"},N={class:"mb-0 fw-bold"},R={class:"mb-0"},j={class:"mb-0 fw-bold"},B={class:"table mt-4 border-top border-bottom text-muted"},H=e("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 小計 ",-1),M={class:"text-end border-0 px-0 pt-4"},z=e("tr",null,[e("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 付款方式 "),e("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"ApplePay")],-1),W={class:"input-group mb-3 input-group-sm"},G={class:"input-group-append"},J={class:"d-flex justify-content-between mt-4"},K=e("p",{class:"mb-0 h4 fw-bold"},"總計",-1),Q={class:"mb-0 h4 fw-bold"};function X(t,s,u,p,l,b){return c(),m("div",S,[e("div",A,[(c(!0),m(P,null,C(t.cart.carts,o=>(c(),m("div",{key:o.id,class:"d-flex mb-2"},[e("img",{src:o.product.imageUrl,alt:o.product.title,class:"me-2",style:{width:"48px",height:"48px","object-fit":"cover"}},null,8,I),e("div",q,[e("div",F,[e("p",N,d(o.product.title),1),e("p",R,"NT$ "+d(o.product.price),1)]),e("p",j,"x "+d(o.qty),1)])]))),128)),e("table",B,[e("tbody",null,[e("tr",null,[H,e("td",M,"NT$"+d(t.cart.total),1)]),z])]),e("div",W,[y(e("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>t.coupon_code=o),placeholder:"請輸入優惠碼"},null,512),[[k,t.coupon_code]]),e("div",G,[e("button",{class:"btn btn-outline-primary",type:"button",onClick:s[1]||(s[1]=o=>t.addCouponCode(t.coupon_code))}," 套用優惠碼 ")])]),e("div",J,[K,e("p",Q,"NT$"+d(t.cart.final_total),1)])])])}const Y=$(D,[["render",X]]),{VITE_API:Z,VITE_PATH:ee}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"coffee11",BASE_URL:"/11th_street_cafe/",MODE:"production",DEV:!1,PROD:!0},se={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},isProcessing:!1}},components:{RouterLink:E},methods:{createOrder(){this.isProcessing=!0;const t=this.form;this.$http.post(`${Z}/api/${ee}/order`,{data:t}).then(s=>{const{message:u,orderId:p}=s.data;this.isProcessing=!1,this.$refs.form.resetForm(),x.fire({title:`${u}`,icon:"success"}),this.$router.push(`/checkout/${p}`)}).catch(()=>{this.isProcessing=!1,x.fire({title:"無法新增資料，稍後再試",icon:"error"})})}}},oe={class:"col-lg-6"},te=e("h3",{class:"mb-3"},"客戶資訊",-1),le={class:"mb-3"},re=e("label",{for:"email",class:"form-label"},"Email",-1),ae={class:"mb-3"},ne=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),ie={class:"mb-3"},de=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),ce={class:"mb-3"},me=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ue={class:"mb-3"},pe=e("label",{for:"message",class:"form-label"},"留言",-1),_e={class:"d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100"},fe=e("i",{class:"fas fa-chevron-left me-2"},null,-1),be={class:"text-end"},he=["disabled"];function ve(t,s,u,p,l,b){const o=n("v-field"),i=n("error-message"),h=n("RouterLink"),v=n("v-form");return c(),m("div",oe,[te,r(v,{ref:"form",onSubmit:b.createOrder},{default:V(({errors:_})=>[e("div",le,[re,r(o,{id:"email",name:"email",type:"email",class:f(["form-control",{"is-invalid":_.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=a=>l.form.user.email=a)},null,8,["class","modelValue"]),r(i,{name:"email",class:"invalid-feedback"})]),e("div",ae,[ne,r(o,{id:"name",name:"姓名",type:"text",class:f(["form-control",{"is-invalid":_.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=a=>l.form.user.name=a)},null,8,["class","modelValue"]),r(i,{name:"姓名",class:"invalid-feedback"})]),e("div",ie,[de,r(o,{id:"tel",name:"電話",type:"tel",class:f(["form-control",{"is-invalid":_.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10|numeric",modelValue:l.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=a=>l.form.user.tel=a)},null,8,["class","modelValue"]),r(i,{name:"電話",class:"invalid-feedback"})]),e("div",ce,[me,r(o,{id:"address",name:"地址",type:"text",class:f(["form-control",{"is-invalid":_.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>l.form.user.address=a)},null,8,["class","modelValue"]),r(i,{name:"地址",class:"invalid-feedback"})]),e("div",ue,[pe,y(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=a=>l.form.message=a)},null,512),[[k,l.form.message]])]),e("div",_e,[e("div",null,[r(h,{to:"/cart",class:"text-dark mt-6"},{default:V(()=>[fe,L(" 回購物車 ")]),_:1})]),e("div",be,[e("button",{type:"submit",class:"btn btn-primary",disabled:l.isProcessing}," 送出訂單 ",8,he)])])]),_:1},8,["onSubmit"])])}const ge=$(se,[["render",ve]]),$e={data(){return{}},components:{OrderForm:ge,OrderDetail:Y},computed:{...w(U,["isLoading"])}},Ve={class:"container my-12"},xe={class:"row flex-row-reverse justify-content-center py-7"};function we(t,s,u,p,l,b){const o=n("VueLoading"),i=n("OrderDetail"),h=n("OrderForm");return c(),m("div",Ve,[r(o,{active:t.isLoading,"onUpdate:active":s[0]||(s[0]=v=>t.isLoading=v)},null,8,["active"]),e("div",xe,[r(i),r(h)])])}const Pe=$($e,[["render",we]]);export{Pe as default};

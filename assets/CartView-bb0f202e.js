import{H as $}from"./HomeCategory-12e1506d.js";import{c as u}from"./cartStore-a5eb01d7.js";import{s as N}from"./statusStore-f57763db.js";import{m as j,e as h,_ as g,r as l,o,c as n,a as t,k as c,F as b,n as q,t as a,b as i,w as f,d as y,f as V}from"./index-dfe46513.js";import"./productsStore-2a2fec59.js";import"./Toast-81c1f1d0.js";const A={data(){return{}},components:{HomeCategory:$},methods:{...j(u,["getCarts","updateCart","removeCartItem","deleteAllCarts"])},computed:{...h(u,["cart"]),...h(N,["isProcessing"])},mounted(){this.getCarts()}},H={class:"col-md-6"},L={key:0},S={class:"d-flex justify-content-between mb-5"},T=t("h2",{class:"mt-2 text-brown font-weight-bold"},"購物車",-1),B=t("i",{class:"bi bi-x-lg"},null,-1),P=[B],E=["src","alt"],F={class:"w-100 p-3 position-relative"},I=["onClick"],z=t("i",{class:"bi bi-x-lg"},null,-1),D=[z],M={class:"mb-0 fw-bold"},U={class:"d-md-block d-none mb-1 text-muted",style:{"font-size":"14px"}},G={class:"d-flex flex-md-row flex-column justify-content-md-between align-items-md-center w-100"},J={class:"input-group align-items-center"},K={class:"input-group-prepend pe-1"},O=["onClick","disabled"],Q=t("i",{class:"bi bi-dash-lg"},null,-1),R=[Q],W=["value"],X={class:"input-group-append ps-1"},Y=["onClick","disabled"],Z=t("i",{class:"bi bi-plus"},null,-1),tt=[Z],st={class:"mb-0 text-end ms-md-6"},et={class:"table mt-4 text-muted"},ot=t("th",{scope:"row",class:"border-0 px-0 pt-0 font-weight-normal"}," 小計 ",-1),nt={class:"text-end border-0 px-0 pt-0"},at={class:"d-flex justify-content-between mt-4"},rt=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),ct={class:"mb-0 h4 fw-bold"},it={key:1},dt=t("h2",{class:"mt-5 fs-2"},"購物車目前是空的，快來挑選商品吧！",-1),lt=t("i",{class:"bi bi-cart"},null,-1),_t={key:0,class:"mt-5"};function pt(e,d,v,C,w,x){var _,p;const r=l("router-link"),k=l("HomeCategory");return o(),n(b,null,[t("div",H,[(_=e.cart.carts)!=null&&_.length?(o(),n("div",L,[t("div",S,[T,t("a",{href:"#",class:"fs-3",onClick:d[0]||(d[0]=c((...s)=>e.deleteAllCarts&&e.deleteAllCarts(...s),["prevent"]))},P)]),(o(!0),n(b,null,q(e.cart.carts,s=>(o(),n("div",{key:s.id,class:"d-flex mt-4 bg-light"},[t("img",{src:s.product.imageUrl,alt:s.product.title,class:"img-fluid",style:{width:"120px",height:"120px","object-fit":"cover"}},null,8,E),t("div",F,[t("a",{href:"#",onClick:c(m=>e.removeCartItem(s.id),["prevent"]),class:"position-absolute",style:{top:"16px",right:"16px"}},D,8,I),t("p",M,a(s.product.title),1),t("p",U,a(s.product.description),1),t("div",G,[t("div",J,[t("div",K,[t("button",{class:"btn btn-primary btn-sm",onClick:c(m=>e.updateCart(s,s.qty-1),["prevent"]),disabled:e.isProcessing||s.qty===1},R,8,O)]),t("input",{type:"text",class:"form-control form-control-sm border-0 text-center my-auto shadow-none bg-secondary px-0",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",readonly:"",value:s.qty},null,8,W),t("div",X,[t("button",{class:"btn btn-primary btn-sm",onClick:c(m=>e.updateCart(s,s.qty+1),["prevent"]),disabled:e.isProcessing||s.qty===5},tt,8,Y)])]),t("p",st,"NT$"+a(s.total),1)])])]))),128)),t("table",et,[t("tbody",null,[t("tr",null,[ot,t("td",nt,"NT$"+a(e.cart.total),1)])])]),t("div",at,[rt,t("p",ct,"NT$"+a(e.cart.final_total),1)]),i(r,{to:"/order",class:"btn btn-primary btn-block mt-4 rounded-0 py-3"},{default:f(()=>[y("確認訂單")]),_:1})])):(o(),n("div",it,[dt,i(r,{class:"btn btn-primary mt-3 text-end",to:"/products"},{default:f(()=>[lt,y(" 選購去 ")]),_:1})]))]),(p=e.cart.carts)!=null&&p.length?V("",!0):(o(),n("div",_t,[i(k)]))],64)}const mt=g(A,[["render",pt]]),ut={data(){return{}},components:{CartList:mt}},ht={class:"container my-5"},bt={class:"row justify-content-center py-5"};function ft(e,d,v,C,w,x){const r=l("CartList");return o(),n("div",ht,[t("div",bt,[i(r)])])}const kt=g(ut,[["render",ft]]);export{kt as default};

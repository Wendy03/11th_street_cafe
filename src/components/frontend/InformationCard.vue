<template>
  <div>
    <h3 class="mb-5">常見問題</h3>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Q1. 到貨時間
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              我們會在收到您的訂單後盡快處理並安排寄送。一般來說，
              我們會在1-2個工作日內安排運送。運送時間可能因地區而異，
              但通常在訂單發出後的2-5個工作天內送達。
              如果您需要更快的送達時間，我們也提供優先運送選項，
              讓您能夠在1-2個工作天內收到您的咖啡豆。
            </p>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Q2. 運送規定
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>
                <strong>送貨方式： </strong>
                透過宅配送達。除網頁另有特別標示外，均為常溫配送。
              </li>
              <li>
                <strong>送貨範圍： </strong>
                限台灣本島與離島地區
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Q3. 退貨原則
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>
                上購物的消費者，都可以依照消費者保護法的規定，
                享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，
                請留意，您所退回的商品必須回復原狀
              </li>
              <li>
                咖啡豆由於考量食品衛生安全，除了商品本身瑕疵、損壞、
                作業疏失或運送過程而造成的損毀，才能申請退換貨。
                一經個人拆封、食用、失溫及保存不良等情形而導致商品變質，恕無法處理您的退換貨申請。
              </li>
              <li>周邊商品退貨包裝完整</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Q4. 咖啡豆保存
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul>
              <li>保存日期參考包裝</li>
              <li>保存於室內陰涼乾燥處</li>
              <li>使用密封、非透明容器</li>
              <li>沖泡前再磨成粉</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Q5. 發票相關資訊
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>因應政府推動電子發票之落行，目前提供的發票開立類型：</p>
            <ul>
              <li>捐贈給慈善公益團體（財團法人中華民國兒童癌症基金會）</li>
              <li>
                電子發票（可至訂單查詢中檢視，系統會為您自動對獎，中獎將信件通知並開立紙本發票掛號寄出至原訂單地址給您）
              </li>
              <li>電子發票（使用手機條碼索取，須持有手機載具）</li>
              <li>
                公司戶發票（電子發票): 請您填寫統編，我們會在您付款後 3 天內以
                email 方式將發票 pdf 檔寄送給您，不會再另外寄送紙本發票！
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

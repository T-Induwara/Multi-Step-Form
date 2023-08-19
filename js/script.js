console.log("Script loaded");

//Tab number section variables
var tab1 = document.getElementById("num-1");
var tab2 = document.getElementById("num-2");
var tab3 = document.getElementById("num-3");
var tab4 = document.getElementById("num-4");

tab2.classList.add("active-num-col");

//Form container variables
var frmName = document.getElementById("frm-name").value;
var frmNameError = document.getElementById("err-name");

var frmEmail = document.getElementById("frm-mail").value;
var frmMailError = document.getElementById("err-email");

var frmPhone = document.getElementById("frm-phone").value;
var frmPhError = document.getElementById("err-phone");

var frmNextBtn = document.getElementById("frm-next-btn");

frmNextBtn.addEventListener("click",function(){
    if(frmName == "" || frmName == null){
        frmNameError.classList.remove("hide");
    }
})

//Plan container variables
var plan = 0;
var duration;
//Plan1
var plan1 = document.getElementById("plan-1");
//Plan2
var plan2 = document.getElementById("plan-2");
//Plan2
var plan3 = document.getElementById("plan-3");

var planDuBtn = document.getElementById("duration-btn");
planDuBtn.onclick = function(){
    console.log("dur btn clicked");
    planDuBtn.classList.toggle("select-btn-yr")
}

var planBackBtn = document.getElementById("plan-back-btn");
var planNextBtn = document.getElementById("plan-next-btn");

//Addons container variables

//Addon1
var addon1 = document.getElementById("addon-1");
var addon1Check = document.getElementById("addon1-checkbox");

//Addon2
var addon2 = document.getElementById("addon-2");
var addon2Check = document.getElementById("addon2-checkbox");

//Addon3
var addon3 = document.getElementById("addon-3");
var addon3Check = document.getElementById("addon3-checkbox");

var addBackBtn = document.getElementById("addons-back-btn");
var addNextBtn = document.getElementById("addons-next-btn");

//Summary  container variables
var summaryPlan = document.getElementById("s-top-plan");
var summaryDuration = document.getElementById("s-top-plantime");

var planChange = document.getElementById("s-top-plan-change");

var sumPlanPrice = document.getElementById("s-top-price");
var sumPlanDuration = document.getElementById("s-top-time");

//Summary addon1
var sumAddon1 = document.getElementById("summary-addon-1");
var sumAddon1Price = document.getElementById("sum-addon1-price");
var sumAddon1Dur = document.getElementById("sum-addon1-time");

//Summary addon2
var sumAddon2 = document.getElementById("summary-addon-2");
var sumAddon2Price = document.getElementById("sum-addon2-price");
var sumAddon2Dur = document.getElementById("sum-addon2-price");

//Summary addon3
var sumAddon3 = document.getElementById("summary-addon-3");
var sumAddon3Price = document.getElementById("sum-addon3-price");
var sumAddon3Dur = document.getElementById("sum-addon3-price");

var sumTotTime = document.getElementById("sum-bottom-time");
var sumTotPrice = document.getElementById("sum-total-price");
var sumTotDur = document.getElementById("sum-total-time");

var sumBackBtn = document.getElementById("sumamry-back-btn");
var sumNextBtn = document.getElementById("summary-confirm-btn");




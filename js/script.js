console.log("Script loaded");

//Tab number section variables
var tab1 = document.getElementById("num-1");
var tab2 = document.getElementById("num-2");
var tab3 = document.getElementById("num-3");
var tab4 = document.getElementById("num-4");

//Main containers
var formContainer = document.getElementById("form-container");
var planContainer = document.getElementById("plan-container");
var addsContainer = document.getElementById("adds-container");
var summContainer = document.getElementById("summary-container");
var thanksContainer = document.getElementById("thnx-container");

//Form container variables
var formProgress = 3;//Form container counter

var frmNameError = document.getElementById("err-name");
var frmMailError = document.getElementById("err-email");
var frmPhError = document.getElementById("err-phone");

var frmNextBtn = document.getElementById("frm-next-btn");

frmNextBtn.addEventListener("click",function(){
    formProgress = 3;
    //Reset form error messages
    frmNameError.classList.add("hide");
    frmMailError.classList.add("hide");
    frmPhError.classList.add("hide");

    //Assign form field values to js variables
    var frmName = document.getElementById("frm-name").value;
    var frmEmail = document.getElementById("frm-mail").value;
    var frmPhone = document.getElementById("frm-phone").value;

    //Checking if the form name field is empty
    if(frmName == "" || frmName == null){
        frmNameError.classList.remove("hide");
        formProgress = formProgress - 1;
    }

    //Checking if the form email field is empty
    if(frmEmail == "" || frmEmail == null ){
        frmMailError.classList.remove("hide");
        formProgress = formProgress - 1;
    }

    //Checking if the form phone field is empty
    if(frmPhone == "" | frmPhone == null){
        frmPhError.classList.remove("hide");
        formProgress = formProgress - 1;
    }

    if(formProgress == 3){
        console.log("Next page please. The count is " +formProgress);
        tab1.classList.remove("active-num-col");
        formContainer.classList.add("hide");
        tab2.classList.add("active-num-col");
        planContainer.classList.remove("hide");
    }
})

//Plan container variables
var plan = 0;
var planProgress = 2;
var planPrice = 0
var duration = 0;//If the duration is 1 = Monthly, If the duration is 2 = Yearly

//Plan1
var plan1 = document.getElementById("plan-1");
var plan1Price = document.getElementById("plan1-p").innerHTML;
//Plan2
var plan2 = document.getElementById("plan-2");
var plan2Price = document.getElementById("plan2-p").innerHTML;
//Plan2
var plan3 = document.getElementById("plan-3");
var plan3Price = document.getElementById("plan3-p").innerHTML;

const planPriceDu = document.querySelectorAll(".plan-d");
const priceDurations = Array.from(planPriceDu).slice(0,3);

var p1YrPrice;
var p2YrPrice;
var p3YrPrice;
//function to multiple monthly value by 10
function calcPlanPrice(p1Value,p2Value,p3Value){
    p1YrPrice = p1Value * 10;
    plan1Price = p1YrPrice;

    p2YrPrice = p2Value * 10;
    plan2Price = p2YrPrice;

    p3YrPrice = p3Value * 10;
    plan3Price = p3YrPrice;
}

plan1.addEventListener("click",function(){
    plan1.classList.add("plan-selected");
    plan2.classList.remove("plan-selected");
    plan3.classList.remove("plan-selected");
    plan = 1;
})
plan2.addEventListener("click",function(){
    plan2.classList.add("plan-selected");
    plan1.classList.remove("plan-selected");
    plan3.classList.remove("plan-selected");
    plan = 2;
})
plan3.addEventListener("click",function(){
    plan3.classList.add("plan-selected");
    plan1.classList.remove("plan-selected");
    plan2.classList.remove("plan-selected");
    plan = 3;
})

var planDuBtn = document.getElementById("duration-btn");
var planMonthly = document.getElementById("monthly");
var planYearly = document.getElementById("yearly");
var freeMonTxt1 = document.getElementById("plan1-free-txt");
var freeMonTxt2 = document.getElementById("plan2-free-txt");
var freeMonTxt3 = document.getElementById("plan3-free-txt");

planDuBtn.addEventListener("click",function(){
    console.log("dur btn clicked");
    planDuBtn.classList.toggle("select-btn-yr")
    if(planDuBtn.classList.contains("select-btn-yr")){//Check wheather the plan duration button was clicked or not
        planMonthly.classList.remove("mon-active");
        planYearly.classList.add("mon-active");
        freeMonTxt1.classList.remove("hide");//error
        freeMonTxt2.classList.remove("hide");
        freeMonTxt3.classList.remove("hide");

        priceDurations.forEach(element => {//To change /mo text to /yr text in each plan div
            element.innerHTML = "/yr";
        })
        calcPlanPrice(plan1Price,plan2Price,plan3Price);

        duration = 1;//1= Monthly
    }
    else{
        planMonthly.classList.add("mon-active");
        planYearly.classList.remove("mon-active");
        freeMonTxt1.classList.add("hide");//error
        freeMonTxt2.classList.add("hide");
        freeMonTxt3.classList.add("hide");

        priceDurations.forEach(element => {//To change /yr text to /mo text in each plan div
            element.innerHTML = "/mo";
        })

        duration = 2;//2 = Yearly
    }
})

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




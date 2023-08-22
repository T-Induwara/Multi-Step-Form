

//Tab number section variables
var tab1 = document.getElementById("num-1");
var tab2 = document.getElementById("num-2");
var tab3 = document.getElementById("num-3");
var tab4 = document.getElementById("num-4");

//---------------------------------------------------

//Main containers
var formContainer = document.getElementById("form-container");
var planContainer = document.getElementById("plan-container");
var addsContainer = document.getElementById("adds-container");
var summContainer = document.getElementById("summary-container");
var thanksContainer = document.getElementById("thnx-container");

//---------------------------------------------------

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
        tab1.classList.remove("active-num-col");
        formContainer.classList.add("hide");
        tab2.classList.add("active-num-col");
        planContainer.classList.remove("hide");
    }
})

//---------------------------------------------------

//Plan container variables
var plan = 0;
var planProgress = 1;
var planPrice = 0
//The by default duration sets to monthly value. Which is 2
var duration = 2;//If the duration is 1 = Yearly, If the duration is 2 = Monthly

//Plan1
var plan1 = document.getElementById("plan-1");
var plan1Price = document.getElementById("plan1-p");
//Plan2
var plan2 = document.getElementById("plan-2");
var plan2Price = document.getElementById("plan2-p");
//Plan2
var plan3 = document.getElementById("plan-3");
var plan3Price = document.getElementById("plan3-p");

const planPriceDu = document.querySelectorAll(".plan-d");
const priceDurations = Array.from(planPriceDu).slice(0,11);//This line responsible for changing all /mo into /yr and viseversa

//function to multiple monthly values by 10
function calcPlanPrice(p1Value,p2Value,p3Value){
    plan1Price.innerHTML = (p1Value * 10);
    plan2Price.innerHTML = (p2Value * 10);
    plan3Price.innerHTML = (p3Value * 10);
}

plan1.addEventListener("click",function(){
    plan1.classList.add("plan-selected");
    plan2.classList.remove("plan-selected");
    plan3.classList.remove("plan-selected");
    plan = 1;

    if(duration == 1){
        planPrice = 90;
    }
    else{
        planPrice = 9;
    }
})
plan2.addEventListener("click",function(){
    plan2.classList.add("plan-selected");
    plan1.classList.remove("plan-selected");
    plan3.classList.remove("plan-selected");
    plan = 2;

    if(duration == 1){
        planPrice = 120;
    }
    else{
        planPrice = 12;
    }
})
plan3.addEventListener("click",function(){
    plan3.classList.add("plan-selected");
    plan1.classList.remove("plan-selected");
    plan2.classList.remove("plan-selected");
    plan = 3;

    if(duration == 1){
        planPrice = 150;
    }
    else{
        planPrice = 15;
    }
})

var planDuBtn = document.getElementById("duration-btn");
var planMonthly = document.getElementById("monthly");
var planYearly = document.getElementById("yearly");
var freeMonTxt1 = document.getElementById("plan1-free-txt");
var freeMonTxt2 = document.getElementById("plan2-free-txt");
var freeMonTxt3 = document.getElementById("plan3-free-txt");

planDuBtn.addEventListener("click",function(){
    plan1.classList.remove("plan-selected");
    plan2.classList.remove("plan-selected");
    plan3.classList.remove("plan-selected");
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
        plan1Price.innerHTML = 9;
        plan2Price.innerHTML = 12;
        plan3Price.innerHTML = 15;
        
        calcPlanPrice(plan1Price.innerHTML,plan2Price.innerHTML,plan3Price.innerHTML);
        calcAddonPrice(addon1Price.innerHTML,addon2Price.innerHTML,addon3Price.innerHTML);

        duration = 1;//1= Yearly
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

        plan1Price.innerHTML = 9;
        plan2Price.innerHTML = 12;
        plan3Price.innerHTML = 15;

        addon1Price.innerHTML = 1;
        addon2Price.innerHTML = 2;
        addon3Price.innerHTML = 2;

        duration = 2;//2 = Monthly
    }
})

var planBackBtn = document.getElementById("plan-back-btn");
var planNextBtn = document.getElementById("plan-next-btn");

//JS part for back button on plans container
planBackBtn.addEventListener("click",function(){
    tab1.classList.add("active-num-col");
    formContainer.classList.remove("hide");
    tab2.classList.remove("active-num-col");
    planContainer.classList.add("hide");
});
planNextBtn.addEventListener("click",function(){
    if(plan1.classList.contains("plan-selected") || plan2.classList.contains("plan-selected") || plan3.classList.contains("plan-selected") ){
        tab2.classList.remove("active-num-col");
        planContainer.classList.add("hide");
        tab3.classList.add("active-num-col");
        addsContainer.classList.remove("hide");
    }
    else{
        alert("Please select a plan before go to the next step!");
    }
});

//---------------------------------------------------

//Addons container variables
var addon1Selected = 0;//1 = to selected and 0 = to not selected
var addon2Selected = 0;
var addon3Selected = 0;

var totAddonCount = 0;

//Addon1
var addon1 = document.getElementById("addon-1");
var addon1Check = document.getElementById("addon1-checkbox");
var addon1Price = document.getElementById("addon1-price");

//Addon2
var addon2 = document.getElementById("addon-2");
var addon2Check = document.getElementById("addon2-checkbox");
var addon2Price = document.getElementById("addon2-price");

//Addon3
var addon3 = document.getElementById("addon-3");
var addon3Check = document.getElementById("addon3-checkbox");
var addon3Price = document.getElementById("addon3-price");

function calcAddonPrice(a1Value,a2Value,a3Value){
    addon1Price.innerHTML = (a1Value * 10);
    addon2Price.innerHTML = (a2Value * 10);
    addon3Price.innerHTML = (a3Value * 10);
}

// Get all the div elements with the class "checkbox-container"
const checkboxContainers = document.querySelectorAll('.addons');

// Loop through each div and add a click event listener
checkboxContainers.forEach(container => {
    // Get the checkbox element inside the current div
    const checkbox = container.querySelector('input[type="checkbox"]');
    
    // Add a click event listener to the div
    container.addEventListener('click', () => {
        // Toggle the "checked" property of the checkbox
        checkbox.checked = !checkbox.checked;
        container.classList.toggle("addons-selected",checkbox.checked);
    });
});

var addBackBtn = document.getElementById("addons-back-btn");
var addNextBtn = document.getElementById("addons-next-btn");

//JS part for back button on addons container
addBackBtn.addEventListener("click",function(){
    tab2.classList.add("active-num-col");
    planContainer.classList.remove("hide");
    tab3.classList.remove("active-num-col");
    addsContainer.classList.add("hide");
});
addNextBtn.addEventListener("click",function(){
    if(addon1Check.checked == true){
        addon1Selected = 1;
    }else{
        addon1Selected = 0;
    }
    
    if(addon2Check.checked == true){
        addon2Selected = 1;
    }else{
        addon2Selected = 0;
    }
    
    if(addon3Check.checked == true){
        addon3Selected = 1;
    }else{
        addon3Selected = 0;
    }
    totAddonCount = addon1Selected + addon2Selected + addon3Selected;

    tab3.classList.remove("active-num-col");
    addsContainer.classList.add("hide");
    tab4.classList.add("active-num-col");
    summContainer.classList.remove("hide");
    finalizeSummary();
});

//---------------------------------------------------

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

var sumBottomTotDur = document.getElementById("sum-bottom-time");

var sumTotTime = document.getElementById("sum-bottom-time");
var sumTotPrice = document.getElementById("sum-total-price");
var sumTotDur = document.getElementById("sum-total-time");

function finalizeSummary(){
    //Sumamry heading plan type update
    if(plan == 1){
        summaryPlan.innerHTML = "Arcade";
    }
    else if(plan == 2){
        summaryPlan.innerHTML = "Advanced";
    }
    else if(plan == 3){
        summaryPlan.innerHTML = "Pro";
    }

    //Sumamry heading plan duration update
    if(duration == 1){
        summaryDuration.innerHTML = "Yearly";
    }
    else if(duration == 2){
        summaryDuration.innerHTML = "Monthly";
    }

    //Sumamry heading plan price update
    sumPlanPrice.innerHTML = planPrice;

    //Sumamry selected addons update
    if(addon1Selected == 1){
        sumAddon1.classList.remove("hide");
    }else{
        sumAddon1.classList.add("hide");
    }

    if(addon2Selected == 1){
        sumAddon2.classList.remove("hide");
    }else{
        sumAddon2.classList.add("hide");
    }

    if(addon3Selected == 1){
        sumAddon3.classList.remove("hide");
    }else{
        sumAddon3.classList.add("hide");
    }

    var sumAd1 = 1;
    var sumAd2 = 2;
    var sumAd3 = 2;

    //Summary addons price update
    if(duration == 1){
        sumAddon1Price.innerHTML = sumAd1 * 10;
        sumAddon2Price.innerHTML = sumAd2 * 10;
        sumAddon3Price.innerHTML = sumAd3 * 10;
        sumBottomTotDur.innerHTML = "per yearly)";
    }else{
        sumAddon1Price.innerHTML = sumAd1;
        sumAddon2Price.innerHTML = sumAd2;
        sumAddon3Price.innerHTML = sumAd3;
        sumBottomTotDur.innerHTML = "per monthly)";
    }

    //Summary total value update
    var sumTotal = 0;
    var sumadTotal = 0;
    if(addon1Selected == 1){
        sumadTotal = sumadTotal + parseInt(sumAddon1Price.innerHTML);
    }
    if(addon2Selected == 1){
        sumadTotal = sumadTotal + parseInt(sumAddon2Price.innerHTML);
    }
    if(addon3Selected == 1){
        sumadTotal = sumadTotal + parseInt(sumAddon3Price.innerHTML);
    }
    sumTotal = sumadTotal + parseInt(sumPlanPrice.innerHTML);

    sumTotPrice.innerHTML = sumTotal;
}

//JS part for change button on summary container
planChange.addEventListener("click",function(){
    tab2.classList.add("active-num-col");
    planContainer.classList.remove("hide");
    tab4.classList.remove("active-num-col");
    summContainer.classList.add("hide");
});

var sumBackBtn = document.getElementById("summary-back-btn");
var sumNextBtn = document.getElementById("summary-confirm-btn");

//JS part for back button on summary container
sumBackBtn.addEventListener("click",function(){
    tab3.classList.add("active-num-col");
    addsContainer.classList.remove("hide");
    tab4.classList.remove("active-num-col");
    summContainer.classList.add("hide");
});
sumNextBtn.addEventListener("click",function(){
    summContainer.classList.add("hide");
    thanksContainer.classList.remove("hide");
})
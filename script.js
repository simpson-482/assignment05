
// query selectors

let eightAM = $("#row1");
let eightAMtext = $("#text1");

let nineAM = $("#row2");
let nineAMtext = $("#text2");

let tenAM = $("#row3");
let tenAMtext = $("#text3");

let elevenAM = $("#row4");
let elevenAMtext = $("#text4");

let twelvePM = $("#row5");
let twelvePMtext = $("#text5");

let onePM = $("#row6");
let onePMtext = $("#text6");

let twoPM = $("#row7");
let twoPMtext = $("#text7");

let threePM = $("#row8");
let threePMtext = $("#text8");

let fourPM = $("#row9");
let fourPMtext = $("#text9");

let fivePM = $("#row10");
let fivePMtext = $("#text10");

let sixPM = $("#row11");
let sixPMtext = $("#text11");

// add 11 PM to 5 PM

// example here is hardcodee
// this is where you have the 10 localStorage.getItem calls
// eightAMtext.val('hi jared how are you - it is 8AM');

eightAMtext.val(localStorage.getItem("eightAMevent"));
nineAMtext.val(localStorage.getItem("nineAMevent"));
tenAMtext.val(localStorage.getItem("tenAMevent"));
elevenAMtext.val(localStorage.getItem("elevenAMevent"));
twelvePMtext.val(localStorage.getItem("twelvePMevent"));
onePMtext.val(localStorage.getItem("onePMevent"));
twoPMtext.val(localStorage.getItem("twoAMevent"));
threePMtext.val(localStorage.getItem("threeAMevent"));
fourPMtext.val(localStorage.getItem("fourAMevent"));
fivePMtext.val(localStorage.getItem("fiveAMevent"));
sixPMtext.val(localStorage.getItem("sixAMevent"));


//  eightAMtext.val(localStorage.getItem(xxx,yyy));



let intervalId = null;
let hour = '';

function saveLocalStorage(event) {
    console.log('Event: ' +  event.target.id);

    // this is where we do localStorage.setItem(on the item that was clicked)
    // look at the console tab in the dev tools
    // localStorage.setItem(xxx,yyy)
    localStorage.setItem("eightAMevent", eightAMtext.val());
    localStorage.setItem("nineAMevent", nineAMtext.val());
    localStorage.setItem("tenAMevent", tenAMtext.val());
    localStorage.setItem("elevenAMevent", elevenAMtext.val());
    localStorage.setItem("twelvePMevent", twelvePMtext.val());
    localStorage.setItem("onePMevent", onePMtext.val());
    localStorage.setItem("twoPMevent", twoPMtext.val());
    localStorage.setItem("threePMevent", threePMtext.val());
    localStorage.setItem("fourPMevent", fourPMtext.val());
    localStorage.setItem("fivePMevent", fivePMtext.val());
    localStorage.setItem("sixPMevent", sixPMtext.val());

}

function updateTime() {

    $('#currentDay').html(moment().format('LLL LTS'));

    hour = moment().get('hour');
    console.log(hour);

    // hour = 9;  // put here for testing
    // this is whre you set the colors for the 10 rows

    if (hour == 8) {
        eightAM.css("background-color", '#ff6961');
        nineAM.css("background-color", '#77dd77');
        tenAM.css("background-color", '#77dd77');
        elevenAM.css("background-color", '#77dd77');
        twelvePM.css("background-color", '#77dd77');
        onePM.css("background-color", '#77dd77');
        twoPM.css("background-color", '#77dd77');
        threePM.css("background-color", '#77dd77');
        fourPM.css("background-color", '#77dd77');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
    }

    if (hour == 9) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#ff6961');
        tenAM.css("background-color", '#77dd77');
        elevenAM.css("background-color", '#77dd77');
        twelvePM.css("background-color", '#77dd77');
        onePM.css("background-color", '#77dd77');
        twoPM.css("background-color", '#77dd77');
        threePM.css("background-color", '#77dd77');
        fourPM.css("background-color", '#77dd77');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
    }

    if (hour == 10) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#ff6961');
        elevenAM.css("background-color", '#77dd77');
        twelvePM.css("background-color", '#77dd77');
        onePM.css("background-color", '#77dd77');
        twoPM.css("background-color", '#77dd77');
        threePM.css("background-color", '#77dd77');
        fourPM.css("background-color", '#77dd77');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
    }

    if (hour == 11) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#d3d3d3');
        elevenAM.css("background-color", '#ff6961');
        twelvePM.css("background-color", '#77dd77');
        onePM.css("background-color", '#77dd77');
        twoPM.css("background-color", '#77dd77');
        threePM.css("background-color", '#77dd77');
        fourPM.css("background-color", '#77dd77');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
      }
  
      if (hour == 12) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#d3d3d3');
        elevenAM.css("background-color", '#d3d3d3');
        twelvePM.css("background-color", '#ff6961');
        onePM.css("background-color", '#77dd77');
        twoPM.css("background-color", '#77dd77');
        threePM.css("background-color", '#77dd77');
        fourPM.css("background-color", '#77dd77');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
      }
  
      if (hour == 13) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#d3d3d3');
        elevenAM.css("background-color", '#d3d3d3');
        twelvePM.css("background-color", '#d3d3d3');
        onePM.css("background-color", '#ff6961');
        twoPM.css("background-color", '#77dd77');
        threePM.css("background-color", '#77dd77');
        fourPM.css("background-color", '#77dd77');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
      }

      if (hour == 14) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#d3d3d3');
        elevenAM.css("background-color", '#d3d3d3');
        twelvePM.css("background-color", '#d3d3d3');
        onePM.css("background-color", '#d3d3d3');
        twoPM.css("background-color", '#ff6961');
        threePM.css("background-color", '#77dd77');
        fourPM.css("background-color", '#77dd77');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
      }
  
      if (hour == 15) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#d3d3d3');
        elevenAM.css("background-color", '#d3d3d3');
        twelvePM.css("background-color", '#d3d3d3');
        onePM.css("background-color", '#d3d3d3');
        twoPM.css("background-color", '#d3d3d3');
        threePM.css("background-color", '#ff6961');
        fourPM.css("background-color", '#77dd77');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
      }
  
      if (hour == 16) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#d3d3d3');
        elevenAM.css("background-color", '#d3d3d3');
        twelvePM.css("background-color", '#d3d3d3');
        onePM.css("background-color", '#d3d3d3');
        twoPM.css("background-color", '#d3d3d3');
        threePM.css("background-color", '#d3d3d3');
        fourPM.css("background-color", '#ff6961');
        fivePM.css("background-color", '#77dd77');
        sixPM.css("background-color", '#77dd77');
      }

      if (hour == 17) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#d3d3d3');
        elevenAM.css("background-color", '#d3d3d3');
        twelvePM.css("background-color", '#d3d3d3');
        onePM.css("background-color", '#d3d3d3');
        twoPM.css("background-color", '#d3d3d3');
        threePM.css("background-color", '#d3d3d3');
        fourPM.css("background-color", '#d3d3d3');
        fivePM.css("background-color", '#ff6961');
        sixPM.css("background-color", '#77dd77');
      }

      if (hour == 18) {
        eightAM.css("background-color", '#d3d3d3');
        nineAM.css("background-color", '#d3d3d3');
        tenAM.css("background-color", '#d3d3d3');
        elevenAM.css("background-color", '#d3d3d3');
        twelvePM.css("background-color", '#d3d3d3');
        onePM.css("background-color", '#d3d3d3');
        twoPM.css("background-color", '#d3d3d3');
        threePM.css("background-color", '#d3d3d3');
        fourPM.css("background-color", '#d3d3d3');
        fivePM.css("background-color", '#d3d3d3');
        sixPM.css("background-color", '#ff6961');
      }

    if (hour <= 7 || hour >= 18) {
        clearInterval(intervalId);
    }
};

updateTime();

intervalId = setInterval(updateTime, 60000); 

$(".fa-save").on("click", saveLocalStorage);

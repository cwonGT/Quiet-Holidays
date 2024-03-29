//GLOBALS
let toHide = 'page1';
let monthSelected = "Jan";
let regionSelected = "Auckland";
let regions = ['Bay of Plenty', 'Auckland', 'Otago', 'Manawatu-Wanganui']
let cities = ['Auckland city', 'Waiheke Island', 'Manukau', 'North Shore']

function changeViewablePage(currentPage) {
    if(currentPage == toHide) {return;}
    document.getElementById(currentPage).style.display = "block";
    document.getElementById(toHide).style.display = "none"
    toHide = currentPage;
}

function testClick(){
    console.log("hello")
}

function setMonthSelected(month){
  monthSelected = month;
}

function setRegionSelected(region){
  regionSelected = region;
}

function getMonthSelected(){
  return monthSelected;
}

function displayPage2(){
  changeViewablePage('page2');
  document.getElementById('monthSelected').innerHTML = monthSelected;
  document.getElementById('choose').innerHTML = "CHOOSE A REGION";
  document.getElementById('popularList').innerHTML = "These are the most popular regions to visit during " + monthSelected;
}

function displayPage3(){
  changeViewablePage('page3');
  document.getElementById('MonthPage3').innerHTML = monthSelected;
  document.getElementById('RegionPage3').innerHTML = regionSelected;
}

function displayPage4(){
  changeViewablePage('page4');
  document.getElementById('MonthPage4').innerHTML = monthSelected;
  document.getElementById('RegionPage4').innerHTML = regionSelected;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function TimeOfyearDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
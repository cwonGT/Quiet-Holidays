//GLOBALS
let toHide = 'page1';
let monthSelected = "Jan";

function changeViewablePage(currentPage) {
    if(currentPage == toHide) {return;}
    document.getElementById(currentPage).style.display = "block";
    document.getElementById(toHide).style.display = "none"
    toHide = currentPage;
}

function testClick(e){
    console.log("hello", e)
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
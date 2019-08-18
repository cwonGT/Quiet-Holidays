//GLOBALS
let toHide = 'page1';
let monthSelected = "Jan";
let regionSelected = "Auckland";

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


/////******/////

///////////////////////////////
////////SORT THE REGIONS///////
///////////////////////////////


//Dataset 
const data = [ {
  "Month": "2018M01",
  "Northland": 56.21,
  "Auckland": 69.02,
  "Waikato": 52.77,
  "Bay of Plenty": 56.54,
  "Hawke's Bay, Gisborne": 66.16,
  "Taranaki, Manawatu, Wanganui": 40.44,
  "Wellington": 58.48,
  "Nelson, Marlborough, Tasman": 61.28,
  "Canterbury": 51.7,
  "West Coast": 62.24,
  "Otago": 68.59,
  "Southland": 60.34
},
{
  "Month": "2018M02",
  "Northland": 43.05,
  "Auckland": 74.6,
  "Waikato": 47.06,
  "Bay of Plenty": 47.68,
  "Hawke's Bay, Gisborne": 55.59,
  "Taranaki, Manawatu, Wanganui": 41.23,
  "Wellington": 66.67,
  "Nelson, Marlborough, Tasman": 56.96,
  "Canterbury": 52.29,
  "West Coast": 66.59,
  "Otago": 68.6,
  "Southland": 66.04
},
{
  "Month": "2018M03",
  "Northland": 37.11,
  "Auckland": 72.89,
  "Waikato": 44.97,
  "Bay of Plenty": 47.28,
  "Hawke's Bay, Gisborne": 51.26,
  "Taranaki, Manawatu, Wanganui": 41.95,
  "Wellington": 66.48,
  "Nelson, Marlborough, Tasman": 52.39,
  "Canterbury": 49.25,
  "West Coast": 61.95,
  "Otago": 63.8,
  "Southland": 61.98
},
{
  "Month": "2018M04",
  "Northland": 27.46,
  "Auckland": 63.08,
  "Waikato": 35.45,
  "Bay of Plenty": 41.01,
  "Hawke's Bay, Gisborne": 44.67,
  "Taranaki, Manawatu, Wanganui": 33.87,
  "Wellington": 59.04,
  "Nelson, Marlborough, Tasman": 39.39,
  "Canterbury": 42.12,
  "West Coast": 45.5,
  "Otago": 55.9,
  "Southland": 47.91
},
{
  "Month": "2018M05",
  "Northland": 21.81,
  "Auckland": 60.33,
  "Waikato": 27.56,
  "Bay of Plenty": 33.57,
  "Hawke's Bay, Gisborne": 37.32,
  "Taranaki, Manawatu, Wanganui": 30.4,
  "Wellington": 53.32,
  "Nelson, Marlborough, Tasman": 26.54,
  "Canterbury": 34.81,
  "West Coast": 27.95,
  "Otago": 40.56,
  "Southland": 30.43
},
{
  "Month": "2018M06",
  "Northland": 17.69,
  "Auckland": 54.31,
  "Waikato": 26.8,
  "Bay of Plenty": 31.22,
  "Hawke's Bay, Gisborne": 35.6,
  "Taranaki, Manawatu, Wanganui": 28.59,
  "Wellington": 50.38,
  "Nelson, Marlborough, Tasman": 23.28,
  "Canterbury": 30.85,
  "West Coast": 21.18,
  "Otago": 38.56,
  "Southland": 22.49
},
{
  "Month": "2018M07",
  "Northland": 17.73,
  "Auckland": 57.07,
  "Waikato": 26.45,
  "Bay of Plenty": 30.51,
  "Hawke's Bay, Gisborne": 35.9,
  "Taranaki, Manawatu, Wanganui": 33.56,
  "Wellington": 52.06,
  "Nelson, Marlborough, Tasman": 24.43,
  "Canterbury": 34.59,
  "West Coast": 21.01,
  "Otago": 47.96,
  "Southland": 24.29
},
{
  "Month": "2018M08",
  "Northland": 18.28,
  "Auckland": 60.65,
  "Waikato": 26.02,
  "Bay of Plenty": 29.64,
  "Hawke's Bay, Gisborne": 33.2,
  "Taranaki, Manawatu, Wanganui": 32.64,
  "Wellington": 50.76,
  "Nelson, Marlborough, Tasman": 23.1,
  "Canterbury": 33.29,
  "West Coast": 20.73,
  "Otago": 46.12,
  "Southland": 22.08
},
{
  "Month": "2018M09",
  "Northland": 20.63,
  "Auckland": 64.85,
  "Waikato": 29.16,
  "Bay of Plenty": 33.87,
  "Hawke's Bay, Gisborne": 38.93,
  "Taranaki, Manawatu, Wanganui": 34.33,
  "Wellington": 54.77,
  "Nelson, Marlborough, Tasman": 26.45,
  "Canterbury": 32.39,
  "West Coast": 25.16,
  "Otago": 44.29,
  "Southland": 27.33
},
{
  "Month": "2018M10",
  "Northland": 26.78,
  "Auckland": 66.38,
  "Waikato": 34.36,
  "Bay of Plenty": 38.51,
  "Hawke's Bay, Gisborne": 44.32,
  "Taranaki, Manawatu, Wanganui": 35.83,
  "Wellington": 57.85,
  "Nelson, Marlborough, Tasman": 34.58,
  "Canterbury": 38.22,
  "West Coast": 34.18,
  "Otago": 47.05,
  "Southland": 35.68
},
{
  "Month": "2018M11",
  "Northland": 31.1,
  "Auckland": 74.91,
  "Waikato": 39.03,
  "Bay of Plenty": 42.39,
  "Hawke's Bay, Gisborne": 47.84,
  "Taranaki, Manawatu, Wanganui": 37.53,
  "Wellington": 62.75,
  "Nelson, Marlborough, Tasman": 37.76,
  "Canterbury": 43.52,
  "West Coast": 48.21,
  "Otago": 57.11,
  "Southland": 50.66
},
{
  "Month": "2018M12",
  "Northland": 41.01,
  "Auckland": 64.63,
  "Waikato": 43.49,
  "Bay of Plenty": 44.98,
  "Hawke's Bay, Gisborne": 50.85,
  "Taranaki, Manawatu, Wanganui": 36.92,
  "Wellington": 54.51,
  "Nelson, Marlborough, Tasman": 46.06,
  "Canterbury": 44.03,
  "West Coast": 50.53,
  "Otago": 59.46,
  "Southland": 52.92
} ]

// Sort the regions
// *******NEEDS THE MONTH VARIABLE

var list = data.filter((region)=> region.Month.includes(monthSelected));
//console.log(list[0])

// keysSorted is the regions list

keysSorted = Object.keys(list[0]).sort(function(a,b){return list[0][b] - list[0][a]})
keysSorted.shift()
console.log(keysSorted);



///////////////////////////////
//////SORT THE BoP CITIES//////
///////////////////////////////

//DATASET
const whak = [{
  "Month": "18-Jan",
  "Number of establishments": 33,
  "Daily capacity (stay-units available)": "1,833",
  "Monthly capacity \n(stay-unit nights available)": "56,823",
  "Stay-unit nights (occupancy)": "23,829",
  "Guest nights": "66,196",
  "Guest arrivals": "17,925",
  "Average length \nof stay (days)": 3.69,
  "Occupancy rate \n%": 41.94,
  "Guests per stay-unit night": 2.78,
  "Stay-units per establishment": 55.55,
  "Guest night % of January guest nights": 100
},
{
  "Month": "18-Feb",
  "Number of establishments": 34,
  "Daily capacity (stay-units available)": "1,836",
  "Monthly capacity \n(stay-unit nights available)": "51,408",
  "Stay-unit nights (occupancy)": "11,829",
  "Guest nights": "23,962",
  "Guest arrivals": "10,728",
  "Average length \nof stay (days)": 2.23,
  "Occupancy rate \n%": 23.01,
  "Guests per stay-unit night": 2.03,
  "Stay-units per establishment": 54,
  "Guest night % of January guest nights": 36
},
{
  "Month": "18-Mar",
  "Number of establishments": 34,
  "Daily capacity (stay-units available)": "1,836",
  "Monthly capacity \n(stay-unit nights available)": "56,916",
  "Stay-unit nights (occupancy)": "13,850",
  "Guest nights": "30,115",
  "Guest arrivals": "12,787",
  "Average length \nof stay (days)": 2.36,
  "Occupancy rate \n%": 24.33,
  "Guests per stay-unit night": 2.17,
  "Stay-units per establishment": 54,
  "Guest night % of January guest nights": 45
},
{
  "Month": "18-Apr",
  "Number of establishments": 34,
  "Daily capacity (stay-units available)": "1,836",
  "Monthly capacity \n(stay-unit nights available)": "55,080",
  "Stay-unit nights (occupancy)": "9,319",
  "Guest nights": "20,200",
  "Guest arrivals": "8,603",
  "Average length \nof stay (days)": 2.35,
  "Occupancy rate \n%": 16.92,
  "Guests per stay-unit night": 2.17,
  "Stay-units per establishment": 54,
  "Guest night % of January guest nights": 31
},
{
  "Month": "18-May",
  "Number of establishments": 34,
  "Daily capacity (stay-units available)": "1,836",
  "Monthly capacity \n(stay-unit nights available)": "56,916",
  "Stay-unit nights (occupancy)": "7,422",
  "Guest nights": "13,455",
  "Guest arrivals": "6,271",
  "Average length \nof stay (days)": 2.15,
  "Occupancy rate \n%": 13.04,
  "Guests per stay-unit night": 1.81,
  "Stay-units per establishment": 54,
  "Guest night % of January guest nights": 20
},
{
  "Month": "18-Jun",
  "Number of establishments": 33,
  "Daily capacity (stay-units available)": "1,707",
  "Monthly capacity \n(stay-unit nights available)": "51,210",
  "Stay-unit nights (occupancy)": "6,581",
  "Guest nights": "12,504",
  "Guest arrivals": "5,616",
  "Average length \nof stay (days)": 2.23,
  "Occupancy rate \n%": 12.85,
  "Guests per stay-unit night": 1.9,
  "Stay-units per establishment": 51.73,
  "Guest night % of January guest nights": 19
},
{
  "Month": "18-Jul",
  "Number of establishments": 32,
  "Daily capacity (stay-units available)": "1,704",
  "Monthly capacity \n(stay-unit nights available)": "52,824",
  "Stay-unit nights (occupancy)": "8,064",
  "Guest nights": "14,111",
  "Guest arrivals": "7,293",
  "Average length \nof stay (days)": 1.93,
  "Occupancy rate \n%": 15.27,
  "Guests per stay-unit night": 1.75,
  "Stay-units per establishment": 53.25,
  "Guest night % of January guest nights": 21
},
{
  "Month": "18-Aug",
  "Number of establishments": 32,
  "Daily capacity (stay-units available)": "1,677",
  "Monthly capacity \n(stay-unit nights available)": "51,987",
  "Stay-unit nights (occupancy)": "6,533",
  "Guest nights": "11,606",
  "Guest arrivals": "5,542",
  "Average length \nof stay (days)": 2.09,
  "Occupancy rate \n%": 12.57,
  "Guests per stay-unit night": 1.78,
  "Stay-units per establishment": 52.41,
  "Guest night % of January guest nights": 18
},
{
  "Month": "18-Sep",
  "Number of establishments": 33,
  "Daily capacity (stay-units available)": "1,677",
  "Monthly capacity \n(stay-unit nights available)": "50,310",
  "Stay-unit nights (occupancy)": "8,432",
  "Guest nights": "15,052",
  "Guest arrivals": "7,301",
  "Average length \nof stay (days)": 2.06,
  "Occupancy rate \n%": 16.76,
  "Guests per stay-unit night": 1.79,
  "Stay-units per establishment": 50.82,
  "Guest night % of January guest nights": 23
},
{
  "Month": "18-Oct",
  "Number of establishments": 32,
  "Daily capacity (stay-units available)": "1,799",
  "Monthly capacity \n(stay-unit nights available)": "55,769",
  "Stay-unit nights (occupancy)": "11,352",
  "Guest nights": "22,484",
  "Guest arrivals": "10,175",
  "Average length \nof stay (days)": 2.21,
  "Occupancy rate \n%": 20.36,
  "Guests per stay-unit night": 1.98,
  "Stay-units per establishment": 56.22,
  "Guest night % of January guest nights": 34
},
{
  "Month": "18-Nov",
  "Number of establishments": 33,
  "Daily capacity (stay-units available)": "1,806",
  "Monthly capacity \n(stay-unit nights available)": "54,180",
  "Stay-unit nights (occupancy)": "11,148",
  "Guest nights": "21,057",
  "Guest arrivals": "10,498",
  "Average length \nof stay (days)": 2.01,
  "Occupancy rate \n%": 20.58,
  "Guests per stay-unit night": 1.89,
  "Stay-units per establishment": 54.73,
  "Guest night % of January guest nights": 32
},
{
  "Month": "18-Dec",
  "Number of establishments": 33,
  "Daily capacity (stay-units available)": "1,806",
  "Monthly capacity \n(stay-unit nights available)": "55,986",
  "Stay-unit nights (occupancy)": "15,224",
  "Guest nights": "37,661",
  "Guest arrivals": "12,840",
  "Average length \nof stay (days)": 2.93,
  "Occupancy rate \n%": 27.19,
  "Guests per stay-unit night": 2.47,
  "Stay-units per establishment": 54.73,
  "Guest night % of January guest nights": 57
}
]

const tau = [
{
  "Month": "18-Jan",
  "Number of establishments": 69,
  "Daily capacity (stay-units available)": "2,778",
  "Monthly capacity \n(stay-unit nights available)": "86,118",
  "Stay-unit nights (occupancy)": "60,028",
  "Guest nights": "123,022",
  "Guest arrivals": "39,728",
  "Average length \nof stay (days)": 3.1,
  "Occupancy rate \n%": 69.7,
  "Guests per stay-unit night": 2.05,
  "Stay-units per establishment": 40.26,
  "Guest night % of January guest nights": 100
},
{
  "Month": "18-Feb",
  "Number of establishments": 67,
  "Daily capacity (stay-units available)": "2,763",
  "Monthly capacity \n(stay-unit nights available)": "77,364",
  "Stay-unit nights (occupancy)": "46,545",
  "Guest nights": "80,682",
  "Guest arrivals": "32,109",
  "Average length \nof stay (days)": 2.51,
  "Occupancy rate \n%": 60.16,
  "Guests per stay-unit night": 1.73,
  "Stay-units per establishment": 41.24,
  "Guest night % of January guest nights": 66
},
{
  "Month": "18-Mar",
  "Number of establishments": 67,
  "Daily capacity (stay-units available)": "2,755",
  "Monthly capacity \n(stay-unit nights available)": "85,405",
  "Stay-unit nights (occupancy)": "51,354",
  "Guest nights": "88,277",
  "Guest arrivals": "34,975",
  "Average length \nof stay (days)": 2.52,
  "Occupancy rate \n%": 60.13,
  "Guests per stay-unit night": 1.72,
  "Stay-units per establishment": 41.12,
  "Guest night % of January guest nights": 72
},
{
  "Month": "18-Apr",
  "Number of establishments": 68,
  "Daily capacity (stay-units available)": "2,775",
  "Monthly capacity \n(stay-unit nights available)": "83,250",
  "Stay-unit nights (occupancy)": "45,286",
  "Guest nights": "76,032",
  "Guest arrivals": "30,762",
  "Average length \nof stay (days)": 2.47,
  "Occupancy rate \n%": 54.4,
  "Guests per stay-unit night": 1.68,
  "Stay-units per establishment": 40.81,
  "Guest night % of January guest nights": 62
},
{
  "Month": "18-May",
  "Number of establishments": 68,
  "Daily capacity (stay-units available)": "2,775",
  "Monthly capacity \n(stay-unit nights available)": "86,025",
  "Stay-unit nights (occupancy)": "43,140",
  "Guest nights": "63,903",
  "Guest arrivals": "25,699",
  "Average length \nof stay (days)": 2.49,
  "Occupancy rate \n%": 50.15,
  "Guests per stay-unit night": 1.48,
  "Stay-units per establishment": 40.81,
  "Guest night % of January guest nights": 52
},
{
  "Month": "18-Jun",
  "Number of establishments": 66,
  "Daily capacity (stay-units available)": "2,731",
  "Monthly capacity \n(stay-unit nights available)": "81,930",
  "Stay-unit nights (occupancy)": "35,635",
  "Guest nights": "55,489",
  "Guest arrivals": "23,707",
  "Average length \nof stay (days)": 2.34,
  "Occupancy rate \n%": 43.49,
  "Guests per stay-unit night": 1.56,
  "Stay-units per establishment": 41.38,
  "Guest night % of January guest nights": 45
},
{
  "Month": "18-Jul",
  "Number of establishments": 65,
  "Daily capacity (stay-units available)": "2,730",
  "Monthly capacity \n(stay-unit nights available)": "84,630",
  "Stay-unit nights (occupancy)": "35,959",
  "Guest nights": "59,755",
  "Guest arrivals": "24,315",
  "Average length \nof stay (days)": 2.46,
  "Occupancy rate \n%": 42.49,
  "Guests per stay-unit night": 1.66,
  "Stay-units per establishment": 42,
  "Guest night % of January guest nights": 49
},
{
  "Month": "18-Aug",
  "Number of establishments": 64,
  "Daily capacity (stay-units available)": "2,705",
  "Monthly capacity \n(stay-unit nights available)": "83,855",
  "Stay-unit nights (occupancy)": "37,027",
  "Guest nights": "58,465",
  "Guest arrivals": "23,633",
  "Average length \nof stay (days)": 2.47,
  "Occupancy rate \n%": 44.16,
  "Guests per stay-unit night": 1.58,
  "Stay-units per establishment": 42.27,
  "Guest night % of January guest nights": 48
},
{
  "Month": "18-Sep",
  "Number of establishments": 64,
  "Daily capacity (stay-units available)": "2,705",
  "Monthly capacity \n(stay-unit nights available)": "81,150",
  "Stay-unit nights (occupancy)": "42,139",
  "Guest nights": "75,806",
  "Guest arrivals": "26,631",
  "Average length \nof stay (days)": 2.85,
  "Occupancy rate \n%": 51.93,
  "Guests per stay-unit night": 1.8,
  "Stay-units per establishment": 42.27,
  "Guest night % of January guest nights": 62
},
{
  "Month": "18-Oct",
  "Number of establishments": 65,
  "Daily capacity (stay-units available)": "2,730",
  "Monthly capacity \n(stay-unit nights available)": "84,630",
  "Stay-unit nights (occupancy)": "46,059",
  "Guest nights": "80,063",
  "Guest arrivals": "30,418",
  "Average length \nof stay (days)": 2.63,
  "Occupancy rate \n%": 54.42,
  "Guests per stay-unit night": 1.74,
  "Stay-units per establishment": 42,
  "Guest night % of January guest nights": 65
},
{
  "Month": "18-Nov",
  "Number of establishments": 65,
  "Daily capacity (stay-units available)": "2,727",
  "Monthly capacity \n(stay-unit nights available)": "81,810",
  "Stay-unit nights (occupancy)": "46,182",
  "Guest nights": "73,154",
  "Guest arrivals": "28,627",
  "Average length \nof stay (days)": 2.56,
  "Occupancy rate \n%": 56.45,
  "Guests per stay-unit night": 1.58,
  "Stay-units per establishment": 41.95,
  "Guest night % of January guest nights": 59
},
{
  "Month": "18-Dec",
  "Number of establishments": 64,
  "Daily capacity (stay-units available)": "2,674",
  "Monthly capacity \n(stay-unit nights available)": "82,894",
  "Stay-unit nights (occupancy)": "50,122",
  "Guest nights": "94,769",
  "Guest arrivals": "33,054",
  "Average length \nof stay (days)": 2.87,
  "Occupancy rate \n%": 60.47,
  "Guests per stay-unit night": 1.89,
  "Stay-units per establishment": 41.78,
  "Guest night % of January guest nights": 77
}
]

const rot = [{
"Month": "18-Jan",
"Number of establishments": 120,
"Daily capacity (stay-units available)": "6,843",
"Monthly capacity \n(stay-unit nights available)": "212,133",
"Stay-unit nights (occupancy)": "137,593",
"Guest nights": "280,780",
"Guest arrivals": "145,303",
"Average length \nof stay (days)": 1.93,
"Occupancy rate \n%": 64.86,
"Guests per stay-unit night": 2.04,
"Stay-units per establishment": 57.03,
"Guest night % of January guest nights": 100
},
{
"Month": "18-Feb",
"Number of establishments": 120,
"Daily capacity (stay-units available)": "6,852",
"Monthly capacity \n(stay-unit nights available)": "191,856",
"Stay-unit nights (occupancy)": "117,255",
"Guest nights": "225,324",
"Guest arrivals": "123,592",
"Average length \nof stay (days)": 1.82,
"Occupancy rate \n%": 61.12,
"Guests per stay-unit night": 1.92,
"Stay-units per establishment": 57.1,
"Guest night % of January guest nights": 80
},
{
"Month": "18-Mar",
"Number of establishments": 120,
"Daily capacity (stay-units available)": "6,852",
"Monthly capacity \n(stay-unit nights available)": "212,412",
"Stay-unit nights (occupancy)": "124,928",
"Guest nights": "236,955",
"Guest arrivals": "130,857",
"Average length \nof stay (days)": 1.81,
"Occupancy rate \n%": 58.81,
"Guests per stay-unit night": 1.9,
"Stay-units per establishment": 57.1,
"Guest night % of January guest nights": 84
},
{
"Month": "18-Apr",
"Number of establishments": 119,
"Daily capacity (stay-units available)": "6,540",
"Monthly capacity \n(stay-unit nights available)": "196,200",
"Stay-unit nights (occupancy)": "103,691",
"Guest nights": "202,568",
"Guest arrivals": "111,762",
"Average length \nof stay (days)": 1.81,
"Occupancy rate \n%": 52.85,
"Guests per stay-unit night": 1.95,
"Stay-units per establishment": 54.96,
"Guest night % of January guest nights": 72
},
{
"Month": "18-May",
"Number of establishments": 118,
"Daily capacity (stay-units available)": "6,532",
"Monthly capacity \n(stay-unit nights available)": "202,492",
"Stay-unit nights (occupancy)": "82,793",
"Guest nights": "149,276",
"Guest arrivals": "82,887",
"Average length \nof stay (days)": 1.8,
"Occupancy rate \n%": 40.89,
"Guests per stay-unit night": 1.8,
"Stay-units per establishment": 55.36,
"Guest night % of January guest nights": 53
},
{
"Month": "18-Jun",
"Number of establishments": 117,
"Daily capacity (stay-units available)": "6,503",
"Monthly capacity \n(stay-unit nights available)": "195,090",
"Stay-unit nights (occupancy)": "76,190",
"Guest nights": "148,716",
"Guest arrivals": "76,611",
"Average length \nof stay (days)": 1.94,
"Occupancy rate \n%": 39.05,
"Guests per stay-unit night": 1.95,
"Stay-units per establishment": 55.58,
"Guest night % of January guest nights": 53
},
{
"Month": "18-Jul",
"Number of establishments": 117,
"Daily capacity (stay-units available)": "6,462",
"Monthly capacity \n(stay-unit nights available)": "200,322",
"Stay-unit nights (occupancy)": "77,401",
"Guest nights": "160,624",
"Guest arrivals": "84,612",
"Average length \nof stay (days)": 1.9,
"Occupancy rate \n%": 38.64,
"Guests per stay-unit night": 2.08,
"Stay-units per establishment": 55.23,
"Guest night % of January guest nights": 57
},
{
"Month": "18-Aug",
"Number of establishments": 117,
"Daily capacity (stay-units available)": "6,518",
"Monthly capacity \n(stay-unit nights available)": "202,058",
"Stay-unit nights (occupancy)": "75,483",
"Guest nights": "139,435",
"Guest arrivals": "75,551",
"Average length \nof stay (days)": 1.85,
"Occupancy rate \n%": 37.36,
"Guests per stay-unit night": 1.85,
"Stay-units per establishment": 55.71,
"Guest night % of January guest nights": 50
},
{
"Month": "18-Sep",
"Number of establishments": 119,
"Daily capacity (stay-units available)": "6,549",
"Monthly capacity \n(stay-unit nights available)": "196,470",
"Stay-unit nights (occupancy)": "79,808",
"Guest nights": "152,579",
"Guest arrivals": "80,889",
"Average length \nof stay (days)": 1.89,
"Occupancy rate \n%": 40.62,
"Guests per stay-unit night": 1.91,
"Stay-units per establishment": 55.03,
"Guest night % of January guest nights": 54
},
{
"Month": "18-Oct",
"Number of establishments": 120,
"Daily capacity (stay-units available)": "6,557",
"Monthly capacity \n(stay-unit nights available)": "203,267",
"Stay-unit nights (occupancy)": "98,525",
"Guest nights": "192,212",
"Guest arrivals": "99,871",
"Average length \nof stay (days)": 1.92,
"Occupancy rate \n%": 48.47,
"Guests per stay-unit night": 1.95,
"Stay-units per establishment": 54.64,
"Guest night % of January guest nights": 68
},
{
"Month": "18-Nov",
"Number of establishments": 120,
"Daily capacity (stay-units available)": "6,558",
"Monthly capacity \n(stay-unit nights available)": "196,740",
"Stay-unit nights (occupancy)": "109,862",
"Guest nights": "204,371",
"Guest arrivals": "112,680",
"Average length \nof stay (days)": 1.81,
"Occupancy rate \n%": 55.84,
"Guests per stay-unit night": 1.86,
"Stay-units per establishment": 54.65,
"Guest night % of January guest nights": 73
},
{
"Month": "18-Dec",
"Number of establishments": 118,
"Daily capacity (stay-units available)": "6,508",
"Monthly capacity \n(stay-unit nights available)": "201,748",
"Stay-unit nights (occupancy)": "109,157",
"Guest nights": "225,338",
"Guest arrivals": "119,989",
"Average length \nof stay (days)": 1.88,
"Occupancy rate \n%": 54.11,
"Guests per stay-unit night": 2.06,
"Stay-units per establishment": 55.15,
"Guest night % of January guest nights": 80
}]

const opo = [{
"Month": "18-Jan",
"Number of establishments": 17,
"Daily capacity (stay-units available)": "1,145",
"Monthly capacity \n(stay-unit nights available)": "35,495",
"Stay-unit nights (occupancy)": "11,331",
"Guest nights": "29,315",
"Guest arrivals": "11,282",
"Average length \nof stay (days)": 2.6,
"Occupancy rate \n%": 31.92,
"Guests per stay-unit night": 2.59,
"Stay-units per establishment": 67.35,
"Guest night % of January guest nights": 100
},
{
"Month": "18-Feb",
"Number of establishments": 17,
"Daily capacity (stay-units available)": "1,145",
"Monthly capacity \n(stay-unit nights available)": "32,060",
"Stay-unit nights (occupancy)": "4,290",
"Guest nights": "9,074",
"Guest arrivals": "3,560",
"Average length \nof stay (days)": 2.55,
"Occupancy rate \n%": 13.38,
"Guests per stay-unit night": 2.12,
"Stay-units per establishment": 67.35,
"Guest night % of January guest nights": 31
},
{
"Month": "18-Mar",
"Number of establishments": 17,
"Daily capacity (stay-units available)": "1,145",
"Monthly capacity \n(stay-unit nights available)": "35,495",
"Stay-unit nights (occupancy)": "5,642",
"Guest nights": "12,466",
"Guest arrivals": "4,555",
"Average length \nof stay (days)": 2.74,
"Occupancy rate \n%": 15.9,
"Guests per stay-unit night": 2.21,
"Stay-units per establishment": 67.35,
"Guest night % of January guest nights": 43
},
{
"Month": "18-Apr",
"Number of establishments": 16,
"Daily capacity (stay-units available)": "1,136",
"Monthly capacity \n(stay-unit nights available)": "34,080",
"Stay-unit nights (occupancy)": "4,513",
"Guest nights": "11,066",
"Guest arrivals": "3,255",
"Average length \nof stay (days)": 3.4,
"Occupancy rate \n%": 13.24,
"Guests per stay-unit night": 2.45,
"Stay-units per establishment": 71,
"Guest night % of January guest nights": 38
},
{
"Month": "18-May",
"Number of establishments": 15,
"Daily capacity (stay-units available)": "1,044",
"Monthly capacity \n(stay-unit nights available)": "32,364",
"Stay-unit nights (occupancy)": "3,513",
"Guest nights": "8,579",
"Guest arrivals": "2,152",
"Average length \nof stay (days)": 3.99,
"Occupancy rate \n%": 10.85,
"Guests per stay-unit night": 2.44,
"Stay-units per establishment": 69.6,
"Guest night % of January guest nights": 29
},
{
"Month": "18-Jun",
"Number of establishments": 15,
"Daily capacity (stay-units available)": 999,
"Monthly capacity \n(stay-unit nights available)": "29,970",
"Stay-unit nights (occupancy)": "3,606",
"Guest nights": "7,128",
"Guest arrivals": "2,019",
"Average length \nof stay (days)": 3.53,
"Occupancy rate \n%": 12.03,
"Guests per stay-unit night": 1.98,
"Stay-units per establishment": 66.6,
"Guest night % of January guest nights": 24
},
{
"Month": "18-Jul",
"Number of establishments": 15,
"Daily capacity (stay-units available)": 999,
"Monthly capacity \n(stay-unit nights available)": "30,969",
"Stay-unit nights (occupancy)": "2,950",
"Guest nights": "7,030",
"Guest arrivals": "2,053",
"Average length \nof stay (days)": 3.42,
"Occupancy rate \n%": 9.53,
"Guests per stay-unit night": 2.38,
"Stay-units per establishment": 66.6,
"Guest night % of January guest nights": 24
},
{
"Month": "18-Aug",
"Number of establishments": 14,
"Daily capacity (stay-units available)": 969,
"Monthly capacity \n(stay-unit nights available)": "30,039",
"Stay-unit nights (occupancy)": "2,256",
"Guest nights": "5,531",
"Guest arrivals": "1,592",
"Average length \nof stay (days)": 3.47,
"Occupancy rate \n%": 7.51,
"Guests per stay-unit night": 2.45,
"Stay-units per establishment": 69.21,
"Guest night % of January guest nights": 19
},
{
"Month": "18-Sep",
"Number of establishments": 16,
"Daily capacity (stay-units available)": "1,099",
"Monthly capacity \n(stay-unit nights available)": "32,970",
"Stay-unit nights (occupancy)": "3,319",
"Guest nights": "7,614",
"Guest arrivals": "2,466",
"Average length \nof stay (days)": 3.09,
"Occupancy rate \n%": 10.07,
"Guests per stay-unit night": 2.29,
"Stay-units per establishment": 68.69,
"Guest night % of January guest nights": 26
},
{
"Month": "18-Oct",
"Number of establishments": 16,
"Daily capacity (stay-units available)": "1,099",
"Monthly capacity \n(stay-unit nights available)": "34,069",
"Stay-unit nights (occupancy)": "3,548",
"Guest nights": "7,510",
"Guest arrivals": "3,012",
"Average length \nof stay (days)": 2.49,
"Occupancy rate \n%": 10.41,
"Guests per stay-unit night": 2.12,
"Stay-units per establishment": 68.69,
"Guest night % of January guest nights": 26
},
{
"Month": "18-Nov",
"Number of establishments": 16,
"Daily capacity (stay-units available)": "1,099",
"Monthly capacity \n(stay-unit nights available)": "32,970",
"Stay-unit nights (occupancy)": "2,979",
"Guest nights": "5,504",
"Guest arrivals": "2,287",
"Average length \nof stay (days)": 2.41,
"Occupancy rate \n%": 9.04,
"Guests per stay-unit night": 1.85,
"Stay-units per establishment": 68.69,
"Guest night % of January guest nights": 19
},
{
"Month": "18-Dec",
"Number of establishments": 16,
"Daily capacity (stay-units available)": "1,115",
"Monthly capacity \n(stay-unit nights available)": "34,565",
"Stay-unit nights (occupancy)": "6,426",
"Guest nights": "16,979",
"Guest arrivals": "5,444",
"Average length \nof stay (days)": 3.12,
"Occupancy rate \n%": 18.59,
"Guests per stay-unit night": 2.64,
"Stay-units per establishment": 69.69,
"Guest night % of January guest nights": 58
}]

//VARIABLES REQUIRED
var bop = [{"whak":whak}, {"tau":tau}, {"rot":rot}, {"opo":opo}]
var bopmon = [{"Occupancy Rate":0, "City":"whak"}, {"Occupancy Rate":0, "City":"tau"}, {"Occupancy Rate":0, "City":"rot"}, {"Occupancy Rate":0, "City":"opo"}]
var city = ["whak", "tau", "rot", "opo"]

//CREATE SORTABLE LIST

//******NEEDS TO TAKE MONTH VARIABLE********//
for (i = 0; i < bop.length; i++){
  bopmon[i]["Occupancy Rate"] = bop[i][city[i]][5]["Occupancy rate \n%"]
}

//console.log(bopmon)

//SORTING FUNCTION IN DESCENDING ORDER
bopmon.sort(function(a, b) {
return b["Occupancy Rate"] - a["Occupancy Rate"] 
})

//console.log(bopmon)

//GET TEXT LIST OF CITIES - array
var array = []
for (i = 0; i < bop.length; i++) {
var temp = array.push(bopmon[i]["City"])
}
console.log('arra', array)
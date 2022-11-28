var spans = document.querySelectorAll(".boxes span:first-child");
var date;
var arrayDate;
var year = "";
var month = "";
var day = "";
function getDate() {
    date = String(document.querySelector("#date").value);
}
function generate() {
    arrayDate = date.split("");
    year += arrayDate[0];
    year += arrayDate[1];
    year += arrayDate[2];
    year += arrayDate[3];
    day += arrayDate[8],
        day += arrayDate[9];
    month += arrayDate[5];
    month += arrayDate[6];
    calculate();
}
function calculate() {
    var d = new Date();
    var nyear = d.getFullYear();
    var nmonth = d.getMonth() + 1;
    var nday = d.getDate();
    var cyear = nyear - year;
    var cmonth = nmonth - month;
    var cday = nday - day;
    if (year > nyear) {
        window.alert("Can't be greater in today's history");
    }
    else {

        if (cmonth < 0) {
            cmonth += 12;
            cyear -= 1;
        }
        if (cday < 0) {
            cday += 30;
            cmonth -= 1;
        }
        spans[0].innerHTML = `${cyear}`;
        spans[1].innerHTML = `${cmonth}`;
        spans[2].innerHTML = `${cday}`;
        document.querySelector(".btn").classList.add("eventsNone");
    }
}

var year, month, day
var pyear, pmonth, pday
var cyear, cmonth, cday
var principle, rate
var a, day1, b, c, d, e, f, i, ci, abcd
//day1=total day

function abc() {
    principle = parseInt(document.getElementById("principle").value);
    rate = parseFloat(document.getElementById("rate").value);
    pyear = parseInt(document.getElementById("pyear").value);
    pmonth = parseInt(document.getElementById("pmonth").value);
    pday = parseInt(document.getElementById("pday").value);
    cyear = parseInt(document.getElementById("cyear").value);
    cmonth = parseInt(document.getElementById("cmonth").value);
    cday = parseInt(document.getElementById("cday").value);

    if (pyear == null || pyear == "" || cyear == null || cyear == "") {
        document.getElementById("all").innerHTML = ("YEAR EMPTY");
    }
    else if (pmonth == null || pmonth == "" || cmonth == null || cmonth == "") {
        document.getElementById("all").innerHTML = ("MONTH EMPTY");
    }
    else if (pday == null || pday == "" || cday == null || cday == "") {
        document.getElementById("all").innerHTML = ("DAY EMPTY");
    }
    else if (pyear > cyear || pmonth > 12 || cmonth > 12 || pday > 32 || cday > 32) {
        document.getElementById("all").innerHTML = ("INPUT INVILID");
    }
    else {
        if (cyear > pyear) {
            year = cyear - pyear;
        }
        else if (cyear == pyear) {
            year = 0;
        }
        if (cday > pday) {
            day = cday - pday;
            month = cmonth - pmonth;
            if (cmonth > pmonth) {
                month = cmonth - pmonth;
                year = cyear - pyear;
            }
            else if (pmonth > cmonth) {
                month = (cmonth - pmonth) + 12;
                year = (cyear - pyear) - 1;
            }
        }
        else if (cday == pday) {
            day = 0;
            if (cmonth > pmonth) {
                month = cmonth - pmonth;
            }
            else if (cmonth < pmonth) {
                month = (cmonth - pmonth) + 12;
                year = (cyear - pyear);
            }
            else if (cmonth == pmonth) {
                month = 0;
                year = (cyear - pyear)
            }
        }
        else if (cday < pday) {
            day = (cday - pday) + 30;
            month = cmonth - 1;
            if (month > pmonth) {
                month = month - pmonth;
                year = cyear - pyear;
            }
            else if (month < pmonth) {
                month = (month - pmonth) + 12;
                year = (cyear - pyear) - 1;
            }
            else if (month == pmonth) {
                month = 0;
                year = cyear - pyear;
            }
            else {
                year = cyear - pyear;
            }
        }
    }
    
    // day1=total day of the year 
    //1 month=30 day 12 month=12*30 1year=360day
    day1 = year * 360 + month * 30 + day;
    document.getElementById("day1").innerHTML = (day1 + " day ")
    //a=1 day of interest for 1 year
    //a=(principle*(rate/100))/30;

    //start
    if (day1 <= 360) {
        d = day1;
        ci = ((principle * (rate / 100)) / 30) * d + principle;
        document.getElementById("rate1").innerHTML = (ci + " total money ")
    }
    else if (day1 > 360) {
        for (i = 1; i <= year; i++) {
            //d=(day1-(i*360));
            if (day1 => 360) {
                c = day1 - (360 * i);
                d = 360;
            }
            ci = ((principle * (rate / 100)) / 30) * d + principle;
            principle = ci;
        }
        for (i = 1; i <= year; i++) {
            e = day1 - (360 * i);
            ci = abcd;
        }
        abcd = ((principle * (rate / 100)) / 30) * e + principle;
        document.getElementById("rate1").innerHTML = (abcd + " total money ")
    }
    else {
        alert("please! fill this**")
    }
    //end

    if (year < 10) {
        year = "0" + year
    }
    if (day < 10) {
        day = "0" + day
    }
    if (month < 10) {
        month = "0" + month
    }
    document.getElementById("all").innerHTML = (year + " year " + month + " month " + day + " day ")
}
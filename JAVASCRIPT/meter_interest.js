// instalization all the variable 

//c=current date
var cyear, cmonth, cday;

//p=previous date
var pyear, pmonth, pday;

//for present age
var year, month, day;

//for principle and rate
var principle, rate;

function abc(){
    pyear = parseInt(document.getElementById("pyear").value);
    pmonth = parseInt(document.getElementById("pmonth").value);
    pday = parseInt(document.getElementById("pday").value);
    cyear = parseInt(document.getElementById("cyear").value);
    cmonth = parseInt(document.getElementById("cmonth").value);
    cday = parseInt(document.getElementById("cday").value);
    principle = parseFloat(document.getElementById("principle").value);
    rate = parseFloat(document.getElementById("rate").value);



    if (pyear == null || pyear == "" || cyear == null || cyear == "") {
        alert("year is empty");
    }
    else if (pmonth == null || pmonth == "" || cmonth == null || cmonth == "") {
        alert("monthis empty");
    }
    else if (pday == null || pday == "" || cday == null || cday == "") {
        alert("day is empty");
    }
    else if (principle == null || principle == "" || rate == null || rate == "") {
        alert("day is empty");
    }
    else if (pyear > cyear || pmonth > 12 || cmonth > 12 || pday > 32 || cday > 32) {
        alert("You Enter Invalid Date");
    }
    else {
        //condation start when current day is bigger than previous day
        if (cday > pday) {
            day = cday - pday;
            //condation start when current month is bigger than previous month and day
            if (cmonth > pmonth) {
                month = cmonth - pmonth;

                if (cyear > pyear) {
                    year = cyear - pyear;
                }
                else if (cyear < pyear) {
                    alert("invalid input")
                }
                else if (cyear == pyear) {
                    year = 0;
                }
            }
            ////condation end when current month is bigger than previous month and day

            //condation start when current month is smaller than previous month and day
            else if (cmonth < pmonth) {
                month = 12 + cmonth - pmonth;
                cyear = cyear - 1;

                if (cyear > pyear) {
                    year = cyear - pyear;
                }
                else if (cyear < pyear) {
                    alert("invalid input")
                }
                else if (cyear == pyear) {
                    year = 0;
                }
            }
            //condation end when current month is smaller than previous month and day

            //condation start when current month is equal to previous month and day
            else if (cmonth == pmonth) {
                month = 0;
                year = cyear - pyear;
            }
            //condation end when current month is equal to previous month and day
        }
        ////condation end current day is bigger than previous day

        //condation start when current day is smaller than previous day
        else if (cday < pday) {
            day = 30 + cday - pday;
            cmonth = cmonth - 1;
            if (cmonth > pmonth) {
                month = cmonth - pmonth;

                if (cyear > pyear) {
                    year = cyear - pyear;
                }
                else if (cyear < pyear) {
                    alert("invalid input")
                }
                else if (cyear == pyear) {
                    year = 0;
                }
            }
            ////condation end when current month is bigger than previous month and day

            //condation start when current month is smaller than previous month and day
            else if (cmonth < pmonth) {
                month = 12 + cmonth - pmonth;
                cyear = cyear - 1;

                if (cyear > pyear) {
                    year = cyear - pyear;
                }
                else if (cyear < pyear) {
                    alert("invalid input")
                }
                else if (cyear == pyear) {
                    year = 0;
                }
            }
            //condation end when current month is smaller than previous month and day

            //condation start when current month is equal to previous month and day
            else if (cmonth == pmonth) {
                month = 0;
                year = cyear - pyear;
            }
            //condation end when current month is equal to previous month and day
        }
        //condation end when current day is smaller than previous day
        else if (cday == pday) {
            day = 0;
            if (cmonth > pmonth) {
                month = cmonth - pmonth;

                if (cyear > pyear) {
                    year = cyear - pyear;
                }
                else if (cyear < pyear) {
                    alert("invalid input")
                }
                else if (cyear == pyear) {
                    year = 0;
                }
            }
            ////condation end when current month is bigger than previous month and day

            //condation start when current month is smaller than previous month and day
            else if (cmonth < pmonth) {
                month = 12 + cmonth - pmonth;
                cyear = cyear - 1;

                if (cyear > pyear) {
                    year = cyear - pyear;
                }
                else if (cyear < pyear) {
                    alert("invalid input")
                }
                else if (cyear == pyear) {
                    year = 0;
                }
            }
            //condation end when current month is smaller than previous month and day

            //condation start when current month is equal to previous month and day
            else if (cmonth == pmonth) {
                month = 0;
                year = cyear - pyear;
            }
        }}
            // condation end when current month is equal to previous month and day



            var c, d, e, f;

            principle1 = principle;

            var d = day + month * 30 + year * 12 * 30;
            if (d <= 360) {
                interest = ((principle * (rate / 100)) / 30) * d;
                total = interest + principle;
                document.getElementById("interest").innerHTML = (interest);
                document.getElementById("total").innerHTML = (total);
            }

            //for debug
            else if (d > 360) {
                for (i = 1; i <= year; i++) {    //e= 1 year
                    if (d > 360) {
                        f = d - (360 * i)
                        e = 360;
                        interest = ((principle * (rate / 100)) / 30) * e;
                        //c=total
                        c = interest + principle;
                        principle = c;

                        if (f < 360) {
                            interest = ((principle * (rate / 100)) / 30) * f;

                        }
                    }

                    total = c + interest;
                    interest = total - principle1;

                }

               
                var num1 = total.toFixed(3);
                var num2 = interest.toFixed(3);

                document.getElementById("interest").innerHTML = (num2);
                document.getElementById("total").innerHTML = (num1);

            }

          //debug end





            if (year < 10) {
                year = "0" + year
            }
            if (day < 10) {
                day = "0" + day
            }
            if (month < 10) {
                month = "0" + month
            }
            document.getElementById("year").innerHTML = (year);
            document.getElementById("month").innerHTML = (month);
            document.getElementById("day").innerHTML = (day);
        }
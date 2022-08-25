const talkingCalendar = function(date) {
  let day = "";
  let nth = "";
  let month = "";
  let year = "";
  
  //get month name based on "/MM" given
   
  //if month's first digit is "1"
  if (date[5] === "1") {
    if (date[6] === "0") {
      month = "October";
    } else if (date[6] === "1") {
      month = "November";
    } else if (date[6] === "2") {
      month = "December";
    }

  //single digit months
  } else {
    if (date[6] === "1") {
      month = "January";
    } else if (date[6] === "2") {
      month = "February";
    } else if (date[6] === "3") {
      month = "March";
    } else if (date[6] === "4") {
      month = "April";
    } else if (date[6] === "5") {
      month = "May";
    } else if (date[6] === "6") {
      month = "June";
    } else if (date[6] === "7") {
      month = "July";
    } else if (date[6] === "8") {
      month = "August";
    } else if (date[6] === "9") {
      month = "September";
    }
  }

  //parsing day into single or double digit number
  if (date[8] === "0") {
    day = date[9];
  } else {
    day = date[8] + date[9];
  }

  //finding correct day number ending
  if (day === "1") {
    nth = "rst";
  } else if (day === "2") {
    nth = "nd";
  } else if (day === "3") {
    nth = "rd";
  } else {
    nth = "th";
  }

  //create year string from input
  year = date[0] + date[1] + date[2] + date[3];

  //return string based on input turned into preferred syntax
  return month + " " + day + nth + ", " + year;
};



console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
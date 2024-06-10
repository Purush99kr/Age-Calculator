document.addEventListener("DOMContentLoaded", function() {
  let userDate = document.getElementById("date");
  userDate.max = new Date().toISOString().split("T")[0];
});

function calculateAge() {
  let userAge = document.getElementById("age");
  userAge.innerHTML = "";

  let birthDate = document.getElementById("date").value;
  let userError = document.getElementById("error");
  userError.innerHTML = "";

  if (!birthDate) {
    userError.innerHTML = "Please enter a valid date*";
    return;
  }

  birthDate = new Date(birthDate);
  if (isNaN(birthDate.getTime())) {
    userError.innerHTML = "Oops!...Invalid Date*";
    return;
  }

  let userDay = birthDate.getDate();
  let userMonth = birthDate.getMonth() + 1;
  let userYear = birthDate.getFullYear();

  let todayDate = new Date();
  let todayDay = todayDate.getDate();
  let todayMonth = todayDate.getMonth() + 1;
  let todayYear = todayDate.getFullYear();

  // calculating age
  let ageDay, ageMonth, ageYear;
  ageYear = todayYear - userYear;

  if (todayMonth >= userMonth) {
    ageMonth = todayMonth - userMonth;
  } else {
    ageYear--;
    ageMonth = 12 + todayMonth - userMonth;
  }

  if (todayDay >= userDay) {
    ageDay = todayDay - userDay;
  } else {
    ageMonth--;
    let lastMonthDate = new Date(todayYear, todayMonth - 1, 0);
    ageDay = lastMonthDate.getDate() + todayDay - userDay;

    if (ageMonth < 0) {
      ageMonth = 11;
      ageYear--;
    }
  }

  userAge.innerHTML = `Your age is: <span>${ageYear}</span> years <span>${ageMonth}</span> months <span>${ageDay}</span> days`;

  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
}

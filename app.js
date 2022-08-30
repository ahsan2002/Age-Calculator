var d = new Date();

var date = d.getDate();

var month = d.getMonth();

var year = d.getFullYear();

function Age() {
  var age1 = document.getElementById("age");
  var date1 = document.getElementById("d_ate").value;
  var month1 = document.getElementById("m_onth").value;
  var year1 = document.getElementById("y_ear").value;

  var new_date = date - date1;
  var new_month = month - month1;
  var new_year = year - year1;
  var n_age = `You are ${new_year} Years,${new_month} Months And ${new_date} Days Old!`;
  age1.innerText = n_age;
}

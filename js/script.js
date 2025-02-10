/* ------------Header------------ */

const SectionMain = document.querySelector("#main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const hamburger = document.querySelector(".burger");
const navmenu = document.querySelector(".links");
const move_top = document.querySelector(".move_top");
const circle = document.querySelectorAll(".number");
const bookToday = document.querySelector(".book");

/* ------------Payment------------ */

const form_pay = document.querySelector(".payment");
const close_form = document.querySelector(".close");
const card = document.querySelector(".card");
const upi = document.querySelector(".upi");
const wallet = document.querySelector(".wallets");
const scan = document.querySelector(".scan");
const card_arrow = document.querySelector(".a1");
const upi_arrow = document.querySelector(".a2");
const wallet_arrow = document.querySelector(".a3");
const scan_arrow = document.querySelector(".a4");

/* ---------Tickets Scetion--------- */

const ticketMain = document.querySelector("#ticket_main");
const weekdays = document.querySelector(".weekdays");
const weekends = document.querySelector(".weekends");
const wednesday = document.querySelector(".wednesday");
const main_section = document.querySelector(".ticket_book_content");
const booking_section = document.querySelector("#booking");
const form_1 = document.querySelector(".form_1");
const form_2 = document.querySelector(".form_2");
const form_3 = document.querySelector(".form_3");
const form_4 = document.querySelector(".form_4");
const track_1 = document.querySelector(".track1after");
const track_2 = document.querySelector(".track2after");
const track_3 = document.querySelector(".track3after");
const form1_cancel = document.querySelector(".form_1_prev");
const form1_submit = document.querySelector(".form_1_next");
const form2_cancel = document.querySelector(".form_2_prev");
const form2_submit = document.querySelector(".form_2_next");
const form3_cancel = document.querySelector(".form_3_prev");
const form3_submit = document.querySelector(".form_3_next");
const form4_cancel = document.querySelector(".form_4_prev");
const form4_submit = document.querySelector(".form_4_next");
const d_next = document.querySelectorAll(".dynamic_next");
const adult = document.querySelector(".adult_price");
const child = document.querySelector(".child_price");
const elder = document.querySelector(".elder_price");
const adult_p = document.querySelector(".adult_plus");
const adult_m = document.querySelector(".adult_minus");
const child_p = document.querySelector(".child_plus");
const child_m = document.querySelector(".child_minus");
const elder_p = document.querySelector(".elder_plus");
const elder_m = document.querySelector(".elder_minus");
const adult_count = document.querySelector(".adult_count");
adult_count.value = 0;
const child_count = document.querySelector(".child_count");
child_count.value = 0;
const elder_count = document.querySelector(".elder_count");
elder_count.value = 0;
const dynamic_form = document.querySelectorAll(".dynamic");
const dform1 = document.querySelector(".d_name");
const inp5 = document.querySelector("#input5");
const dform1next = document.querySelector(".btn_name");
const dform2 = document.querySelector(".d_email");
const dform2next = document.querySelector(".btn_email");
const dform2prev = document.querySelector(".btn_emailprev");
const dform3 = document.querySelector(".d_phone");
const dform3next = document.querySelector(".btn_phone");
const dform3prev = document.querySelector(".btn_phoneprev");
const dform4 = document.querySelector(".d_city");
const dform4next = document.querySelector(".btn_city");
const dform4prev = document.querySelector(".btn_cityprev");
const dform5 = document.querySelector(".d_bookingdate");
const dform5prev = document.querySelector(".btn_bdprev");
const cbox = document.querySelector("#terms");

/* -------------Season Pass------------- */

const vip = document.querySelector(".vipp");
const prem = document.querySelector(".prem");

var date = new Date();
var mon = date.getMonth() + 1;
var day;
var a_total = 0;
var c_total = 0;
var e_total = 0;
var a_price;
var c_price;
var e_price;
var a_count = 0;
var c_count = 0;
var e_count = 0;
var getbdate;
var getatkt;
var getctkt;
var getetkt;
var getName;
var getEmail;
var getCity;
var getNum;
var getDate;
var total = 0;
var gst = 0;
var amtTotal = 0;
var ticketTotal = 0;
var coupancode;
var getName;
var closeSnPassForm = 0;

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

/*---------------------------------------------pre-loader-----------------------------------*/

try {
  let check = localStorage.getItem('check');
  if (check === 'visited') {
    document.querySelector('.preloader').style.display = 'none';
  }
  if (check === null) {
    SectionMain.style.display = 'none';
    setTimeout(() => {
      document.querySelector('.preloader').classList.add('away');
      SectionMain.style.display = 'block';
    }, 3000);
    localStorage.setItem('check', 'visited');
  }
} catch (error) {}

/* --------------------------------------------Header-------------------------------------- */
try {
  document.querySelectorAll(".locateus").forEach(element => {
    element.addEventListener("click", () => {
      path = "https://goo.gl/maps/SXUv3YcWAB9AZdrQ7";
      window.open(path);
    });
  });

  hamburger.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("active");
    bookToday.classList.toggle("active");
    hamburger.classList.toggle("open");
    if (document.querySelector("nav").classList.contains("active")) { navigationToggle(); }
  });

  bookToday.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("active");
    bookToday.classList.remove("active");
    hamburger.classList.remove("open");
    day = date.getDay();
    if (day == 6 || day == 0) {
      a_price = 1000;
      c_price = 700;
      e_price = 500;
    } else if (day == 3) {
      a_price = 650;
      c_price = 400;
      e_price = 300;
    } else {
      a_price = 800;
      c_price = 600;
      e_price = 400;
    }
    try {
      ticketMain.style.display = "none";
      form_1.style.display = "none";
    } catch (e) {
      SectionMain.style.display = "none";
    }
    booking_section.style.display = "block";
    form_2.style.display = "flex";
    track_1.classList.add("filled");
    var todayDate = date.getDate() + "/" + mon + "/" + date.getFullYear();
    getbdate = todayDate;
    form2_cancel.innerHTML = "Cancel";

    if (booking_section.style.display === "block") {
      window.onbeforeunload = function () {
        return "are u sure?";
      };
    }
  });
} catch (e) {}

function navigationToggle() {
  try {
    if (document.querySelector("nav").classList.contains("active")) {
      SectionMain.addEventListener('click', () => {
        document.querySelector("nav").classList.remove("active");
        bookToday.classList.remove("active");
        hamburger.classList.remove("open");   
      });
      ticketMain.addEventListener('click', () => {
        document.querySelector("nav").classList.remove("active");
        bookToday.classList.remove("active");
        hamburger.classList.remove("open");   
      });
    }
  } catch (error) {}
}

/* --------------------------------------------Booking Section----------------------------- */
window.onscroll = () => { 
  if(document.documentElement.scrollTop > 500){
    move_top.style.display = 'flex';
  }
  else {
    move_top.style.display = 'none';
  }
};

/* --------------------------------------------Booking Section----------------------------- */
try {
  adult_count.addEventListener("focusout", () => {
    a_count = adult_count.value;
    a_total = a_count * a_price;
    adult.innerHTML = a_total;
  });

  adult_p.addEventListener("click", () => {
    a_count++;
    a_total = a_count * a_price;
    adult_count.value = a_count;
    adult.innerHTML = a_total;
  });

  adult_m.addEventListener("click", () => {
    if (a_count < 1) {
      return;
    } else {
      a_count--;
    }
    a_total = a_count * a_price;
    adult_count.value = a_count;
    adult.innerHTML = a_total;
  });

  child_count.addEventListener("focusout", () => {
    c_count = child_count.value;
    c_total = c_count * c_price;
    child.innerHTML = c_total;
  });

  child_p.addEventListener("click", () => {
    c_count++;
    c_total = c_count * c_price;
    child_count.value = c_count;
    child.innerHTML = c_total;
  });
  child_m.addEventListener("click", () => {
    if (c_count < 1) {
      return;
    } else {
      c_count--;
    }
    c_total = c_count * c_price;
    child_count.value = c_count;
    child.innerHTML = c_total;
  });

  elder_count.addEventListener("focusout", () => {
    e_count = elder_count.value;
    e_total = e_count * e_price;
    elder.innerHTML = e_total;
  });

  elder_p.addEventListener("click", () => {
    e_count++;
    e_total = e_count * e_price;
    elder_count.value = e_count;
    elder.innerHTML = e_total;
  });
  elder_m.addEventListener("click", () => {
    if (e_count < 1) {
      return;
    } else {
      e_count--;
    }
    e_total = e_count * e_price;
    elder_count.value = e_count;
    elder.innerHTML = e_total;
  });

  form2_submit.addEventListener("click", () => {
    if (a_count <= 0 && c_count <= 0 && e_count <= 0) {
      alert("You haven't select any ticket");
    } else {
      form_2.style.display = "none";
      form_3.style.display = "flex";
      track_2.classList.add("filled");
      getatkt = a_count;
      getctkt = c_count;
      getetkt = e_count;
      total = a_total + c_total + e_total;
      gst = (total * 18) / 100;
      amtTotal = total + gst;
    }
  });

  dform2prev.addEventListener("click", () => {
    document.querySelectorAll(".input").forEach((element) => {
      element.style.background = "transparent";
    });
    dform1.style.display = "flex";
    dform2.style.display = "none";
  });

  dform3prev.addEventListener("click", () => {
    document.querySelectorAll(".input").forEach((element) => {
      element.style.background = "transparent";
    });
    dform2.style.display = "flex";
    dform3.style.display = "none";
  });

  dform4prev.addEventListener("click", () => {
    document.querySelectorAll(".input").forEach((element) => {
      element.style.background = "transparent";
    });
    dform3.style.display = "flex";
    dform4.style.display = "none";
  });

  dform5prev.addEventListener("click", () => {
    document.querySelectorAll(".input").forEach((element) => {
      element.style.background = "transparent";
    });
    dform4.style.display = "flex";
    dform5.style.display = "none";
  });

  d_next.forEach((element) => {
    element.addEventListener("click", () => {
      const input = element.previousElementSibling;
      const inputParent = element.parentElement;
      const nextForm = inputParent.nextElementSibling;

      if (input.type === "text" && validateUser(input)) {
        inputParent.style.display = "none";
        nextForm.style.display = "flex";
        if (input.id == "input1") {
          getName = input.value;
        } else {
          getCity = input.value;
        }
      } else if (input.type === "email" && validateUser(input)) {
        inputParent.style.display = "none";
        nextForm.style.display = "flex";
        getEmail = input.value;
      } else if (input.type === "date" && validateUser(input)) {
        inputParent.style.display = "none";
        nextForm.style.display = "flex";
        getDate = input.value;
      } else if (input.type === "number" && validateUser(input)) {
        inputParent.style.display = "none";
        nextForm.style.display = "flex";
        getNum = input.value;
      }
    });
  });

  form2_cancel.addEventListener("click", () => {
    if (form2_cancel.innerHTML === "Cancel") {
      var a = confirm("Are you sure you want to cancel?");
      if (a == true) {
        form_2.style.display = "none";
        track_1.classList.remove("filled");
        try {
          SectionMain.style.display = "block";
          booking_section.style.display = "none";
          form2_cancel.innerHTML = "Previous";
        } catch (error) {
          ticketMain.style.display = "block";
          main_section.style.display = "block";
          booking_section.style.display = "none";
        }
        window.onbeforeunload = null;
        dynamic_form.forEach((element) => {
          element.style.display = "none";
        });
        dform1.style.display = "flex";
        const inps = document.querySelectorAll(".input");
        inps.forEach((element) => {
          element.value = "";
        });
      }
    } else {
      form_2.style.display = "none";
      track_1.classList.remove("filled");
      try {
        form_1.style.display = "flex";
      } catch (E) {}
    }
    adult_count.value = 0;
    child_count.value = 0;
    elder_count.value = 0;
    adult.innerHTML = 0;
    child.innerHTML = 0;
    elder.innerHTML = 0;
    a_count = 0;
    c_count = 0;
    e_count = 0;
  });

  form3_submit.addEventListener("click", () => {
    if (inp5.value.length <= 0) {
      document.querySelectorAll(".input").forEach((element) => {
        element.style.background = "red";
      });
      alert("Please Enter your details");
      return false;
    } else {
      form_3.style.display = "none";
      form_4.style.display = "flex";
      track_3.classList.add("filled");

      document.querySelector("#name").innerHTML = getName;
      document.querySelector("#email").innerHTML = getEmail;
      document.querySelector("#number").innerHTML = getNum;
      document.querySelector("#city").innerHTML = getCity;
      document.querySelector("#bdate").innerHTML = getbdate;
      document.querySelector("#atkt").innerHTML = getatkt;
      document.querySelector("#ctkt").innerHTML = getctkt;
      document.querySelector("#etkt").innerHTML = getetkt;
      ticketTotal += getatkt + getctkt + getetkt;
      document.querySelector("#amt").innerHTML = total;
      document.querySelector("#gst").innerHTML = gst;
      document.querySelector("#ttl").innerHTML = amtTotal;
    }
  });

  form3_cancel.addEventListener("click", () => {
    form_3.style.display = "none";
    form_2.style.display = "flex";
    track_2.classList.remove("filled");
    document.querySelectorAll(".input").forEach((element) => {
      element.style.background = "transparent";
    });
  });

  form4_submit.addEventListener("click", () => {
    if (cbox.checked) {
      var e = confirm("Procced to payment?");
      if (e == true) {
        document.querySelector(".userLogospan").innerHTML = getName.charAt(0);
        document.querySelector(".amtspan").innerHTML = amtTotal;
        form_pay.classList.add("active");
        adult_count.innerHTML = 0;
        child_count.innerHTML = 0;
        elder_count.innerHTML = 0;
        adult.innerHTML = 0;
        child.innerHTML = 0;
        elder.innerHTML = 0;
        a_count = 0;
        c_count = 0;
        e_count = 0;
      }
    }
    else{
      form4_submit.addEventListener("click", () => {
        return;
      });
    }
  });  

  form4_cancel.addEventListener("click", () => {
    form_4.style.display = "none";
    form_3.style.display = "flex";
    track_3.classList.remove("filled");
  });
} catch (error) {}

/* --------------------------------------------Proceed to Pay or Not----------------------- */
try {
  cbox.addEventListener("click", () => {
    form4_submit.classList.remove("visible");
    if (cbox.checked) {
      form4_submit.classList.add("visible"); 
    }
  });
} catch (error) {}

/* --------------------------------------------Footer-------------------------------------- */
window.onload = ()=>{
  try {
    var url = new URL(window.location.href.toString());
    getName = url.searchParams.get("name");
    if (getName == "group_outing") {
      document.querySelectorAll(".link").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".offer_div").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".spantag").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelector(".link2").classList.add("active");
      document.querySelector(".offer_div2").classList.add("active");
      document.querySelector(".spantag2").classList.add("active");
    }
    if(getName == "school_picnic"){
      document.querySelectorAll(".link").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".offer_div").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".spantag").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelector(".link3").classList.add("active");
      document.querySelector(".offer_div3").classList.add("active");
      document.querySelector(".spantag3").classList.add("active");
    }
    if (getName == "consignment") {
      document.querySelectorAll(".link").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".offer_div").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelectorAll(".spantag").forEach((element) => {
        element.classList.remove("active");
      });
      document.querySelector(".link4").classList.add("active");
      document.querySelector(".offer_div4").classList.add("active");
      document.querySelector(".spantag4").classList.add("active");
    }
    if (getName == "major") {
      document.querySelectorAll('.select_div').forEach(element => { element.classList.remove('activee'); }); 
      document.querySelectorAll('.rides_div').forEach(element => { element.classList.remove('activee'); }); 
      document.querySelectorAll('.major').forEach(element => { element.classList.add('activee'); });
      document.querySelectorAll('.major_div').forEach(element => { element.classList.add('activee'); });
    }
    if(getName == "kids"){
      document.querySelectorAll('.select_div').forEach(element => { element.classList.remove('activee'); }); 
      document.querySelectorAll('.rides_div').forEach(element => { element.classList.remove('activee'); }); 
      document.querySelectorAll('.kids').forEach(element => { element.classList.add('activee'); });
      document.querySelectorAll('.kids_div').forEach(element => { element.classList.add('activee'); });
    }
    if(getName == "water"){
      document.querySelectorAll('.select_div').forEach(element => { element.classList.remove('activee'); }); 
      document.querySelectorAll('.rides_div').forEach(element => { element.classList.remove('activee'); }); 
      document.querySelectorAll('.water').forEach(element => { element.classList.add('activee'); });
      document.querySelectorAll('.water_div').forEach(element => { element.classList.add('activee'); });
    }
  } catch (error) {}
}

/* --------------------------------------------Terms Div----------------------------------- */
try {
  document.querySelector('.clickhere').addEventListener('click', () => { 
    document.querySelector('#clickhere').style.display = 'block';
    return;
  });
  document.querySelector('.close_clickhere').addEventListener('click', () => { 
    document.querySelector('#clickhere').style.display = 'none';
    return;
  });

} catch (error) {}

/* --------------------------------------------Social Links-------------------------------- */
try {
  document.querySelector('.ig_a').addEventListener('click', () => {
    window.open("https://instagram.com");
  });
  document.querySelector('.fb_a').addEventListener('click', () => {
    window.open("https://facebook.com");
  });
  document.querySelector('.tw_a').addEventListener('click', () => {
    window.open("https://twitter.com");
  });
  document.querySelector('.yt_a').addEventListener('click', () => {
    window.open("https://youtube.com");
  });
} catch (error) {}

/* -------------------------------------------Season Pass---------------------------------- */
try {
  vip.addEventListener("click", () => {
    closeSnPassForm = 1;
    form_pay.classList.add("active");
    booking_section.style.display = "block";
    document.querySelector(".booking_title").style.display = "none";
    document.querySelector(".booking_track").style.display = "none";
    document.querySelector(".amtspan").innerHTML = "3500";
  });

  prem.addEventListener("click", () => {
    closeSnPassForm = 1;
    form_pay.classList.add("active");
    booking_section.style.display = "block";
    document.querySelector(".booking_title").style.display = "none";
    document.querySelector(".booking_track").style.display = "none";
    document.querySelector(".amtspan").innerHTML = "5000";
  });
} catch (error) {}

/* -------------------------------------------Tickets Scetion------------------------------ */
try {
  weekdays.addEventListener("click", () => {
    adult.innerHTML = 0;
    child.innerHTML = 0;
    elder.innerHTML = 0;
    booking_section.style.display = "block";
    main_section.style.display = "none";

    if (booking_section.style.display === "block") {
      window.onbeforeunload = function () {
        return "are u sure?";
      };
    }
  });

  weekends.addEventListener("click", () => {
    adult.innerHTML = 0;
    child.innerHTML = 0;
    elder.innerHTML = 0;
    booking_section.style.display = "block";
    main_section.style.display = "none";

    if (booking_section.style.display === "block") {
      window.onbeforeunload = function () {
        return "are u sure?";
      };
    }
  });

  wednesday.addEventListener("click", () => {
    adult.innerHTML = 0;
    child.innerHTML = 0;
    elder.innerHTML = 0;
    booking_section.style.display = "block";
    main_section.style.display = "none";

    if (booking_section.style.display === "block") {
      window.onbeforeunload = function () {
        return "are u sure?";
      };
    }
  });

  const form1input = document.querySelector(".input_date");
  form1_submit.addEventListener("click", () => {
    if (validateUser(form1input)) {
      form_1.style.display = "none";
      form_2.style.display = "flex";
      track_1.classList.add("filled");
      var newDate = new Date(form1input.value);
      var visitdate = newDate.getDate() + "/" + newDate.getDay() + "/" + newDate.getFullYear();
      getbdate = visitdate;
      day = newDate.getDay();
      if (day == 6 || day == 0) {
        a_price = 1000;
        c_price = 700;
        e_price = 500;
      } else if (day == 3) {
        a_price = 650;
        c_price = 400;
        e_price = 300;
      } else {
        a_price = 800;
        c_price = 600;
        e_price = 400;
      }
    }
  });

  form1_cancel.addEventListener("click", () => {
    var a = confirm("Are you sure you want to cancel?");
    if (a == true) {
      form1input.style.background = "transparent";
      booking_section.style.display = "none";
      main_section.style.display = "block";
      adult.innerHTML = 0;
      child.innerHTML = 0;
      elder.innerHTML = 0;
      a_count = 0;
      c_count = 0;
      e_count = 0;
      window.onbeforeunload = null;
      dynamic_form.forEach((element) => {
        element.style.display = "none";
      });
      dform1.style.display = "flex";
      const inps = document.querySelectorAll(".input");
      inps.forEach((element) => {
        element.value = "";
      });
      adult_count.value = 0;
      child_count.value = 0;
      elder_count.value = 0;
    }
  });
} catch (error) {}

/* ------------------------------------------ Validation ---------------------------------- */
function validateUser(user) {
  if (user.value.length < 0) {
    document.querySelectorAll(".input").forEach((element) => {
      element.style.background = "transparent";
    });
    user.style.background = "red";
    alert("Please Enter your details");
    return false;
  } else {
    document.querySelectorAll(".input").forEach((element) => {
      element.style.background = "transparent";
    });
    return true;
  }
}

/* -------------------------------------------Events--------------------------------------- */
try {
  for (let index = 0; index < month.length; index++) {
    document.querySelector("." + month[index]).style.display = "none";
    document.querySelector("." + month[index]).style.margin =
      "0px 0px 100px 0px";
  }

  var date = new Date();
  var getMonth = date.getMonth();
  var getDay = date.getDay();

  document.querySelectorAll(".mnth").forEach((element) => {
    element.innerHTML = month[getMonth];
    getMonth += 1;
  });

  document.querySelectorAll(".mnth").forEach((element) => {
    element.addEventListener("click", () => {
      for (let index = 0; index < month.length; index++) {
        document.querySelector("." + month[index]).style.display = "none";
      }
      document.querySelector("." + element.textContent).style.display = "block";
      var clr = window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color");
      document.querySelectorAll(".mnth_title").forEach((element) => {
        element.style.background = clr;
      });
    });
  });

  document.querySelector("." + month[date.getMonth()]).style.display = "block";
  document.querySelectorAll(".mnth_title").forEach((element) => {
    element.style.background = "red";
  });

  document.querySelector(".applycoupan").addEventListener("click", () => {
    getMonth = date.getMonth();
    getDay = date.getDate();
    var coupan = document.querySelector("#coupan").value;

    if (getMonth == 0 && ticketTotal >= 2) {
      if (getDay == 13 && coupan == "LOHRI") {
        coupancode = (amtTotal * 25) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else if (getDay == 26 && coupan == "AZADI") {
        coupancode = (amtTotal * 30) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 1 && ticketTotal >= 2) {
      if (getDay == 19 && coupan == "SHIVAJI") {
        coupancode = (amtTotal * 25) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 2 && ticketTotal >= 2) {
      if (getDay == 11 && coupan == "SHIVRATRI") {
        coupancode = (amtTotal * 25) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else if (
        getDay == 28 ||
        getDay == 29 ||
        (getDay == 30 && coupan == "Holika")
      ) {
        coupancode = (amtTotal * 50) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 3 && ticketTotal >= 2) {
      if (getDay == 9 && coupan == "SUPERMOM") {
        document.querySelector("#atkt").innerHTML = getatkt + 1;
      } else if (getDay == 14 && coupan == "SPECIALEID") {
        document.querySelector("#atkt").innerHTML = getatkt + 1;
      } else if (getDay == 15 || (getDay == 16 && coupan == "KID100")) {
        document.querySelector("#ctkt").innerHTML = getctkt + 1;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 5 && ticketTotal >= 2) {
      if (getDay == 6 && coupan == "STRONGDAD") {
        document.querySelector("#atkt").innerHTML = getatkt + 1;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 6 && ticketTotal >= 2) {
      if (getDay == 21 && coupan == "SPECIALEID") {
        coupancode = (amtTotal * 20) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 7) {
      if (getDay == 15 && ticketTotal >= 2 && coupan == "SAVTANTRADIVAS") {
        coupancode = (amtTotal * 50) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else if (
        getDay == 16 &&
        ticketTotal >= 2 &&
        coupan == "AUGUSTSPECIAL"
      ) {
        coupancode = (amtTotal * 20) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else if (getDay == 22 && coupan == "RAKHI") {
        document.querySelector("#atkt").innerHTML = getatkt * 2;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 8) {
      if (getDay == 5 && coupan == "GURU" && ticketTotal >= 10) {
        document.querySelector("#atkt").innerHTML = getatkt + 1;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 9 && ticketTotal >= 2) {
      if (getDay == 2 && coupan == "GANDHI") {
        coupancode = (amtTotal * 50) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 10) {
      if (getDay == 19 && coupan == "NOVEMBERSPECIAL") {
        document.querySelector("#atkt").innerHTML = getatkt + 1;
      } else if (getDay == 20 && coupan == "BACHA") {
        document.querySelector("#ctkt").innerHTML = getctkt + 1;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (getMonth == 11 && ticketTotal >= 2) {
      if (getDay == 24 || (getDay == 25 && coupan == "SOLSTICE")) {
        coupancode = (amtTotal * 50) / 100;
        document.querySelector("#ttl").innerHTML = amtTotal - coupancode;
      } else {
        alert("ENTER A VALID COUPANCODE");
        document.querySelector("#name").innerHTML = getName;
        document.querySelector("#email").innerHTML = getEmail;
        document.querySelector("#number").innerHTML = getNum;
        document.querySelector("#city").innerHTML = getCity;
        document.querySelector("#bdate").innerHTML = getbdate;
        document.querySelector("#atkt").innerHTML = getatkt;
        document.querySelector("#ctkt").innerHTML = getctkt;
        document.querySelector("#etkt").innerHTML = getetkt;
        document.querySelector("#amt").innerHTML = total;
        document.querySelector("#gst").innerHTML = gst;
        document.querySelector("#ttl").innerHTML = amtTotal;
        return;
      }
    }

    if (coupan == "") {
      alert("ENTER A VALID COUPANCODE");
      document.querySelector("#name").innerHTML = getName;
      document.querySelector("#email").innerHTML = getEmail;
      document.querySelector("#number").innerHTML = getNum;
      document.querySelector("#city").innerHTML = getCity;
      document.querySelector("#bdate").innerHTML = getbdate;
      document.querySelector("#atkt").innerHTML = getatkt;
      document.querySelector("#ctkt").innerHTML = getctkt;
      document.querySelector("#etkt").innerHTML = getetkt;
      document.querySelector("#amt").innerHTML = total;
      document.querySelector("#gst").innerHTML = gst;
      document.querySelector("#ttl").innerHTML = amtTotal;
    }
  });
} catch (error) {}

/* -------------------------------------------Group---------------------------------------- */
try {
  document.querySelector(".link1").addEventListener("click", () => {
    document.querySelectorAll(".link").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".offer_div").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".spantag").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelector(".link1").classList.add("active");
    document.querySelector(".offer_div1").classList.add("active");
    document.querySelector(".spantag1").classList.add("active");
    goToNext(0);
  });
  document.querySelector(".link2").addEventListener("click", () => {
    document.querySelectorAll(".link").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".offer_div").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".spantag").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelector(".link2").classList.add("active");
    document.querySelector(".offer_div2").classList.add("active");
    document.querySelector(".spantag2").classList.add("active");
    goToNext(1);
  });
  document.querySelector(".link3").addEventListener("click", () => {
    document.querySelectorAll(".link").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".offer_div").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".spantag").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelector(".link3").classList.add("active");
    document.querySelector(".offer_div3").classList.add("active");
    document.querySelector(".spantag3").classList.add("active");
    goToNext(2);
  });
  document.querySelector(".link4").addEventListener("click", () => {
    document.querySelectorAll(".link").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".offer_div").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".spantag").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelector(".link4").classList.add("active");
    document.querySelector(".offer_div4").classList.add("active");
    document.querySelector(".spantag4").classList.add("active");
    goToNext(3);
  });
  document.querySelector(".link5").addEventListener("click", () => {
    document.querySelectorAll(".link").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".offer_div").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelectorAll(".spantag").forEach((element) => {
      element.classList.remove("active");
    });
    document.querySelector(".link5").classList.add("active");
    document.querySelector(".offer_div5").classList.add("active");
    document.querySelector(".spantag5").classList.add("active");
  });
} catch (error) {}

/* -------------------------------------------Rides---------------------------------------- */
try {
  document.querySelector('.dd_arrow_span').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('activee');
  });
  document.querySelectorAll('.select_div').forEach(element => {
    element.addEventListener('click', () => {
      document.querySelectorAll('.select_div').forEach(element => { element.classList.remove('activee'); }); 
      document.querySelectorAll('.rides_div').forEach(element => { element.classList.remove('activee'); });
      document.querySelector('.dropdown').classList.remove('activee');
      element.classList.add('activee');
      if (element.textContent == "Thrill Rides") {
        document.querySelector('.thrill_div').classList.add('activee');
      }
      if (element.textContent == "Major Rides") {
        document.querySelector('.major_div').classList.add('activee');
      }
      if (element.textContent == "Water Rides") {
        document.querySelector('.water_div').classList.add('activee');
      }
      if (element.textContent == "Kids Attraction") {
        document.querySelector('.kids_div').classList.add('activee');
      }
    });
  });
} catch (error) {}

/* -------------------------------------------Payment-------------------------------------- */
try {
  close_form.addEventListener('click', _ => {
    form_pay.classList.remove('active');
    if (closeSnPassForm == 1) {
      booking_section.style.display = 'none';
    }
  })

  card.addEventListener("click", () => {
    upi_arrow.classList.remove("active");
    wallet_arrow.classList.remove("active");
    scan_arrow.classList.remove("active");
    card_arrow.classList.toggle("active");
  });
  upi.addEventListener("click", () => {
    upi_arrow.classList.toggle("active");
    wallet_arrow.classList.remove("active");
    scan_arrow.classList.remove("active");
    card_arrow.classList.remove("active");
  });
  wallet.addEventListener("click", () => {
    upi_arrow.classList.remove("active");
    wallet_arrow.classList.toggle("active");
    scan_arrow.classList.remove("active");
    card_arrow.classList.remove("active");
  });
  scan.addEventListener("click", () => {
    upi_arrow.classList.remove("active");
    wallet_arrow.classList.remove("active");
    scan_arrow.classList.toggle("active");
    card_arrow.classList.remove("active");
  });
} catch (error) {console.log(error);}

/* -------------------------------------------Image Slider--------------------------------- */
const slideImages = document.querySelectorAll(".slide_img");
const container = document.querySelector(".slides_container");
const prev = document.querySelector(".back");
const next = document.querySelector(".forward");
const navDots = document.querySelector(".dots");
let Images;
let imgWidth;
let currentSlide = 0;

try {
  Images = slideImages.length;
  imgWidth = slideImages[0].clientWidth;
  next.addEventListener("click", () => {
    if (currentSlide >= Images - 1) {
      goToNext(0);
      return;
    }
    currentSlide++;
    goToNext(currentSlide);
  });
  
  prev.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToNext(Images - 1);
      return;
    }
    currentSlide--;
    goToNext(currentSlide);
  });  
} catch (error) { }


function init() {
  slideImages.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });
  slideImages[0].classList.add("active");
  noOfDots();
}

try { init(); }catch(e){}

function noOfDots() {
  for (let i = 0; i < Images; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    navDots.appendChild(dot);
    dot.addEventListener("click", () => {
      goToNext(i);
    });
  }

  navDots.children[0].classList.add("active");
}

function goToNext(slideNumber) {
  container.style.transform = "translateX(-" + imgWidth * slideNumber + "px)";
  currentSlide = slideNumber;
  setActive();
}

function setActive() {
  let currentActive = document.querySelector(".slide_img.active");
  currentActive.classList.remove("active");
  slideImages[currentSlide].classList.add("active");

  let currentDot = document.querySelector(".dot.active");
  currentDot.classList.remove("active");
  navDots.children[currentSlide].classList.add("active");
}

var user;
var bannerUser;
var message = "";
var searchInputReg = document.querySelector("#search");
var submit = document.querySelector("#submit");

var bannerSubmit = document.querySelector("#bannerSubmit");
// var menuIcon = document.querySelector("#menuIcon");
// var sidebar = document.querySelector(".sidebar");
const menuIcon = $("#menuIcon");
const sidebar = $(".sidebar");

const print = message => {
    var div = document.getElementById("output");
    div.innerHTML = message;
}

function getSearchPrint(userList, userName) { //Add a second parameter. The second parameter references what you inserted inside your input box.
    var report = '';
    for (var i = 0; i < userList.length; i += 1) {
        if (userName === userList[i].name) { //here add a conditional statement to test if the "student" equals any of the names in your for loop.
            report += "<a href='#' class='list-group-item list-group-item-action' id='listName'><strong>Name:</strong> " + userList[i].name + " </a>";
            report += "<a href='#' class='list-group-item list-group-item-action' id='listYear'><strong>Join Date:</strong> " + userList[i].joinYear + " </a>";
            report += "<a href='#' class='list-group-item list-group-item-action' id='listVid'><strong>Number of Videos:</strong> " + userList[i].numVid + " </a>";
            report += "<a href='#' class='list-group-item list-group-item-action' ><strong>Banner Text:</strong> " + userList[i].bannerText + " </a>"
        }
    }
    return report;
}


const searchInfo = () => {
    var searchInput = document.querySelector('#search').value;

    var found = false;
    for (var i = 0; i < users.length; i++) {
        user = users[i];
        if (searchInput.toLowerCase() === user.name) {
            found = true;
            message = getSearchPrint(users, user.name); //replace "+=" with "=" or else you'll keep on adding up users when you search, and in your function add a parameter called user.name
            print(message);
        } else if (!found) {
            print("<h2 class='mx-auto'>No user named '" + searchInput + "' was found. Please try again.</h2>");
        }
    }
}

searchInputReg.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        searchInfo();
        e.preventDefault();
    }
});

submit.addEventListener('click', () => {
    var searchInput = document.querySelector('#search').value;

    var found = false;
    for (var i = 0; i < users.length; i++) {
        user = users[i];
        if (searchInput.toLowerCase() === user.name) {
            found = true;
            message = getSearchPrint(users, user.name); //replace "+=" with "=" or else you'll keep on adding up users when you search, and in your function add a parameter called user.name
            print(message);
        } else if (!found) {
            print("<h2>No user named '" + searchInput + "' was found. Please try again.</h2>");
        }
    }
});
menuIcon.on("click", () => {
    if (sidebar.css("display") === "none") {
        sidebar.css("display", "block");
        menuIcon.css("fill", "#3b3b2f");
    } else {
        sidebar.css("display", "none");
        menuIcon.css("fill", "#bfc1c2");

    }
});
// Banner change
bannerSubmit.addEventListener("click", () => {
    const bannerSearchInfo = () => {
        var bannerSearch = document.querySelector('#usrName2').value;
        var bannerTxt = document.querySelector("#msg2").value;
        var found = false;
        for (var i = 0; i < users.length; i++) {
            bannerUser = users[i];
            if (bannerSearch.toLowerCase() === user.name) {
                found = true;
                bannerUser.bannerText(bannerTxt);
            }
        }

    }
});
// function changeBanner(userList, userName) { //Add a second parameter. The second parameter references what you inserted inside your input box.
// 	for (var i = 0; i < userList.length; i += 1) {
//
// 		if (userName === userList[i].name) { //here add a conditional statement to test if the "student" equals any of the names in your for loop.
//
// 		}
// 	}
// }
// menuIcon.addEventListener("click", () => {
//   if (sidebar.style.display === "none") {
//     sidebar.style.display = "block";
//     menuIcon.style.fill = "#35352f"
//   } else {
//     sidebar.style.display = "none";
//     menuIcon.style.fill = "#bfc1c2";
//   }
// });
menuIcon.on("mouseover", () => {
    menuIcon.css("fill", "#35352f");
});
// menuIcon.addEventListener("mouseover", () => {
//   menuIcon.style.fill = "#35352f";
// });

menuIcon.on("mouseout", () => {
    if (sidebar.css("display") === "block") {
        menuIcon.css("fill", "#35352f");
    } else {
        menuIcon.css("fill", "#bfc1c2");
    }

});
$("#bannerSubmit").submit(function(e) {
    e.preventDefault();
});
// menuIcon.addEventListener("mouseout", () => {
//   if (sidebar.style.display === "block") {
//     menuIcon.style.fill = "#35352f";
//   } else {
//     menuIcon.style.fill = "#bfc1c2";
//   }
// });

$('#sidebar-toggle').click(function() {
    $('#sidebar, .content, #sidebar-toggle').toggleClass('active');
});
$('.filter_icon-search').click(function() {
  $('.search_button').toggle(500);
});
//Add active class to the current menu item
var header = document.getElementById("main_nav_items");
var menuItems = document.getElementsByClassName("nav_item-link");
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("nav_item--active");
    current[0].className = current[0].className.replace(" nav_item--active", "");
    this.className += " nav_item--active";
  });
}

//popover
$(function () {
    $('[data-toggle="popover"]').popover()
  })


//Add active class to the sidebar item
var sidebar = document.getElementsByClassName("sidebar-items-list");
var sidebarItems = document.getElementsByClassName("sidebar-item");
for (var i = 0; i < sidebarItems.length; i++) {
    sidebarItems[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("sidebar-item--active");
    current[0].className = current[0].className.replace(" sidebar-item--active", "");
    this.className += " sidebar-item--active";
  });
}

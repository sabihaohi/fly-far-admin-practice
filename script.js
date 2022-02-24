const quationBtn = document.getElementById('quation-btn');
const quationLinksDiv = document.getElementById('inner-quation-links');

quationBtn.addEventListener('click', function () {
    quationLinksDiv.classList.toggle("inner-nav-active");
    document.getElementById("quation-arrow").classList.toggle('nav-arrow-change')
});

const expenseBtn = document.getElementById('expense-btn');
const expenseLinksDiv = document.getElementById('inner-expense-links');

expenseBtn.addEventListener('click', function () {
    expenseLinksDiv.classList.toggle("inner-nav-active");
    document.getElementById("expense-arrow").classList.toggle('nav-arrow-change')
});

const reportBtn = document.getElementById('report-btn');
const reportLinksDiv = document.getElementById('inner-report-links');

reportBtn.addEventListener('click', function () {
    reportLinksDiv.classList.toggle("inner-nav-active");
    document.getElementById("report-arrow").classList.toggle('nav-arrow-change')
});

const logBtn = document.getElementById('log-btn');
const logLinksDiv = document.getElementById('inner-log-links');

logBtn.addEventListener('click', function () {
    logLinksDiv.classList.toggle("inner-nav-active");
    document.getElementById("log-arrow").classList.toggle('nav-arrow-change')
});


// Mobile Nav
const mobileMenuBtn = document.getElementById('mobile-menu');

const sideNavbar = document.getElementById('side-navbar');

mobileMenuBtn.addEventListener('click', function () {
    sideNavbar.classList.toggle("side-nav-active")
})


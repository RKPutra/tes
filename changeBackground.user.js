// ==UserScript==
// @name        changeBackground
// @namespace   aa
// @include     http://novelstranslation.blogspot.com/p/*
// @version     1
// @grant       none
// ==/UserScript==

document.body.style.color = "#000000";
var x = document.getElementsByClassName("content-inner");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.backgroundColor = "white";
}
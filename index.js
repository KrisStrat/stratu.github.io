//let addButtons = document.querySelectorAll(".add_button");
//let counter = document.querySelector(".counter");
//let numberCounter = counter.textContent;

function Count () {
  document.querySelector(".counter").textContent =  parseInt(document.querySelector(".counter").textContent) + 1;
};

for (i = 0; i < document.querySelectorAll(".add_button").length; i++) {
  i.onclick(Count) ;
};

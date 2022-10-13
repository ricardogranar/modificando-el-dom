//2.1

const emptyDiv$$ = document.createElement("div");

//2.2 -2.4

const p$$ = document.createElement("p");
p$$.textContent = "Soy dinámico";
emptyDiv$$.appendChild(p$$);
document.body.appendChild(emptyDiv$$);

//2.3

const divWithSixP$$ = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const dynamicP$$ = document.createElement("p");
  dynamicP$$.textContent = i;
  divWithSixP$$.appendChild(dynamicP$$);
}
document.body.appendChild(divWithSixP$$);

//2.5

const h2$$ = document.querySelector(".fn-insert-here");
h2$$.textContent = "Wubba Lubba dub dub";

//2.6

const list$$ = document.createElement("ul");
const listItems$$ = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

for (const item of listItems$$) {
  const li$$ = document.createElement("li");
  li$$.textContent = item;
  list$$.appendChild(li$$);
}

document.body.appendChild(list$$);

//2.7

const removeP$$ = document.querySelectorAll(".fn-remove-me");

for (const p of removeP$$) {
  p.remove();
}

//2.8
const newP$$ = document.createElement("p");
newP$$.textContent = "Voy en medio!";

const divs$$ = document.querySelectorAll("div");

document.body.insertBefore(newP$$, divs$$[1]);

//2.9

const insertDivs$$ = document.querySelectorAll(".fn-insert-here");

for (const div of insertDivs$$) {
  const insertP$$ = document.createElement("p");
  insertP$$.textContent = "Voy dentro!";
  div.appendChild(insertP$$);
}
// Iteration 1: Names and Input
//1.1 - 1.2
let hacker1 = 'Cristina';
console.log(`The driver's name is ${hacker1}`);

//1.3 - 1.4
let hacker2 = 'Julian';
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1 
if (hacker1.length > hacker2.length) {
 console.log (`The driver has the longest name, it has ${hacker1.length} characters.`); 
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
   console.log (`Wow, you both have equal long names, ${hacker1.length} characters.`);
}
// Iteration 3: Loops

//3.1
for (let i = 0; i < hacker1.length; i++){
    console.log(hacker1.charAt(i));
}

//3.2
for (let i = hacker1.length - 1; i >= 0; i--){
    console.log(hacker1.charAt(i));
}

//3.3

if (hacker1.localeCompare(hacker2) < 0 ){
    console.log(`The drivers name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0){
   console.log (`Yo, the navigator goes first definitely.`)
} else (hacker1.localeCompare(hacker2) = 0);{
console.log (`What?! You both have the same name?`);
}


//Bonus
//B1
let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum magna vitae hendrerit finibus. Mauris ligula nulla, hendrerit nec velit in, finibus faucibus risus. Proin dictum augue at turpis tristique iaculis. Nam id dui velit. Suspendisse interdum eros ante, sit amet faucibus purus fermentum condimentum. Praesent porttitor id nibh ut hendrerit. Phasellus ultricies enim non vestibulum ornare. Aenean nec nibh eu ligula aliquam pharetra sed a est. Duis ut nisi odio. Morbi elit est, venenatis at velit quis, pretium sodales neque.
Maecenas aliquet condimentum dolor, vitae scelerisque enim egestas ac. Praesent faucibus magna sit amet mi auctor efficitur. Maecenas sapien odio, gravida vitae ullamcorper at, faucibus cursus ante. Proin sagittis ultrices tellus ut sagittis. Nullam sed venenatis felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus gravida sagittis rhoncus. Praesent dictum sapien nec cursus iaculis. Morbi lorem lorem, pulvinar eu lobortis sed, convallis eget quam. Sed eleifend eget urna fringilla tempor. Donec porta dignissim nibh placerat mollis. Ut rhoncus finibus nisi, elementum tempor elit egestas sed.
Vivamus bibendum vehicula turpis vel molestie. Nullam eleifend dui semper, volutpat tortor in, consectetur lectus. Donec quis lectus rutrum, efficitur nunc eget, porttitor ligula. Cras suscipit odio sit amet sem venenatis porttitor. Fusce ultrices suscipit nunc sed gravida. Nulla eget consequat mauris. Morbi congue est eget velit facilisis, eu fermentum magna vestibulum. Praesent imperdiet dictum purus, vel venenatis velit tempus sed.`;
let wordCount = str.length;
console.log(wordCount);
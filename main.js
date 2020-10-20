var activeColor = ["#1FB9E6", "#A058F8", "#E55E9F"]; //blue, purple, pink
var number1 = document.querySelector('.num1');
var number2 = document.querySelector('.num2');
var number3 = document.querySelector('.num3');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var stepTxt1 = document.querySelector('#sub-1');
var stepTxt2 = document.querySelector('#sub-2');
var stepTxt3 = document.querySelector('#sub-3');
var elements = [number1, number2, number3, line1, line2, stepTxt1, stepTxt2, stepTxt3];
var btn = document.querySelector('.btn');
var clicks = 1;

btn.onclick = function() {
    if (clicks == 1) {          // this activates step 1
        number1.style.borderColor = activeColor[0];
        stepTxt1.style.color = activeColor[0];
        number1.style.color = activeColor[0];
        number1.style.boxShadow = "inset 0 0 1.2vmin #1FB9E6, 0 0 3vmin #1FB9E6";
        line1.style.boxShadow = "0vmin 0 1.5vmin #1FB9E6, 0.2vmin 0 2.5vmin #A058F8";
        line1.style.background = "#5C8BEE";
    }
    if (clicks == 2)  {          // this activates step 2
        stepTxt2.style.color = activeColor[1];
        number2.style.color = activeColor[1];
        number2.style.borderColor = activeColor[1];
        number2.style.boxShadow = "inset 0 0 1.2vmin #A058F8, 0 0 3vmin #A058F8";
        line2.style.boxShadow = "0vmin 0 1vmin #A058F8, 0.2vmin 0 2.5vmin #E55E9F";
        line2.style.background = activeColor[1];
    }
    if (clicks == 3)  {           // this activates step 3
        number3.style.borderColor = activeColor[2];
        number3.style.color = activeColor[2];
        number3.style.boxShadow = "inset 0 0 1.2vmin #E55E9F, 0 0 3.1vmin #E55E9F";
        stepTxt3.style.color = activeColor[2];
    }
    if (clicks > 3)  {   // resets all steps to gray + resets clicks to 0
        clicks = 0;
        var passiveColor = "#3F4444";   //grey
        var passiveShadow = "inset 0 0 1vmin #3F4444, 0 0 1vmin #3F4444";
        for(let i = 0; i < 5; i++) {
          elements[i].style.boxShadow = passiveShadow;
          elements[i].style.borderColor = passiveColor;
        }
        for(let i = 0; i < 8; i++) {
          elements[i].style.color = passiveColor;
        }
          line1.style.background = passiveColor;
          line1.style.boxShadow = "";
          line2.style.background = passiveColor;
          line2.style.boxShadow = "";
      }
  clicks++
}

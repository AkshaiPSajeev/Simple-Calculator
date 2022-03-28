function calculate(num)
{
 document.getElementById("screen").value+=num
}

function clearDisplay()
{
 document.getElementById("screen").value=""
}

function showResult()
{
var text=document.getElementById("screen").value
var result=eval(text)
document.getElementById("screen").value=result
}
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthTxt = document.getElementById("length-txt")
const volumeTxt = document.getElementById("volume-txt")
const massTxt = document.getElementById("mass-txt")
const x = document.getElementById("error")

function render (){
    let metersFeet =inputEl.value*3.281
    let feetMeters =inputEl.value/3.281
    let litersGallons = inputEl.value*0.264
    let gallonsLiters = inputEl.value/0.264
    let kilogramPound = inputEl.value*2.204
    let poundKilogram = inputEl.value/2.204
    lengthTxt.innerHTML=`<p class="inner-txt">${inputEl.value} meters = ${metersFeet.toFixed(2)} feet | ${inputEl.value} Feet = ${feetMeters.toFixed(2)} Meters</p>`
    volumeTxt.innerHTML=`<p class="inner-txt">${inputEl.value} liters = ${litersGallons.toFixed(2)} Gallons | ${inputEl.value} Gallons = ${gallonsLiters.toFixed(2)} liters</p>`
    massTxt.innerHTML=`<p class="inner-txt">${inputEl.value} Kilogram = ${kilogramPound.toFixed(2)} Pound | ${inputEl.value} Pound = ${poundKilogram.toFixed(2)} Kilogram</p>`
}   

btnEl.addEventListener("click", function(){
    if (inputEl.value){
        render ()
        inputEl.value = ""
        x.innerHTML = ""
    }
    else{
        x.innerHTML = `<h2 class="inner-txt">Please insert a value to convert!</h2>`
    }
})
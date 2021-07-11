const slider = document.getElementById("slide-range");
//console.log(slider.value);
//slider.addEventListener("o//",()=>{console.log(slider.value)})
//slider.value = 3;

//
const viewCount = document.querySelector(".view-count");
//console.log(viewCount);
viewCount.innerHTML = "99K pageviews";

//
const monthPrice = document.querySelector(".month-price-amount")
//console.log(monthPrice)


//
const switchWrap = document.querySelector(".slide-switch-wrap")
const switchCircle = document.getElementById("slide-circle")
//console.log(slideWrap,slideCircle)
let isSwitched = false
switchWrap.addEventListener("click",()=>{
     switchCircle.classList.toggle("clicked")
     isSwitched = !isSwitched
     console.log(isSwitched, "swiched")
     updateSlider()
})

const updateSlider = () => {
     let newPercent = 0 + (slider.value * 100) / 4 - 25;
     //console.log(newPercent, "percent", slider.value)
     slider.style.background = `linear-gradient(
          90deg,
         hsl(174, 86%, 45%) ${newPercent}%,
          rgb(225, 234, 240) 0%
     )`;
     //
     let amount = 0
     if (parseInt(slider.value) === 1) {
          viewCount.innerHTML = "10K pageviews";
          let amount = 8
           if(isSwitched) amount = amount * 0.75 
          monthPrice.innerHTML = `$${amount}`
     }

     if (parseInt(slider.value) === 2) {
          viewCount.innerHTML = "50K pageviews";
           amount = 12
          if(isSwitched) amount = amount * 0.75 
         monthPrice.innerHTML = `$${amount}`
     }
     if (parseInt(slider.value) === 3) {
          viewCount.innerHTML = "100K pageviews";
          amount = 16
          if(isSwitched) amount = amount * 0.75 
         monthPrice.innerHTML = `$${amount}`
     }
     if (parseInt(slider.value) === 4) {
          viewCount.innerHTML = "500K pageviews";
          amount = 24
          if(isSwitched) amount = amount * 0.75 
         monthPrice.innerHTML = `$${amount}`
     }
     if (parseInt(slider.value) === 5) {
          viewCount.innerHTML = "1M pageviews";
          amount = 36
          if(isSwitched) amount = amount * 0.75 
         monthPrice.innerHTML = `$${amount}`
     }
};
updateSlider();

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

slider.oninput = () => {
     console.log("up");
     updateSlider();
};



//................Page 1 scroll cards....................
const container = document.getElementById("cardContainer1");
const nextBtn = document.getElementById("nextBtn1");
const prevBtn = document.getElementById("prevBtn1");

// Scroll by card width
const scrollAmount = 300; // adjust based on card size

nextBtn.addEventListener("click", () => {
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});


//...............page 2 scroll cards ....................
const container2 = document.getElementById("cardContainer2");
const nextBtn2 = document.getElementById("nextBtn2");
const prevBtn2 = document.getElementById("prevBtn2");

// Scroll by card width
const scrollAmount2 = 300; // adjust based on card size

nextBtn2.addEventListener("click", () => {
  container2.scrollBy({ left: scrollAmount2, behavior: "smooth" });
});

prevBtn2.addEventListener("click", () => {
  container2.scrollBy({ left: -scrollAmount2, behavior: "smooth" });
});


//.................page3 scroll cards ............
const container3 = document.getElementById("cardContainer3");
const nextBtn3 = document.getElementById("nextBtn3");
const prevBtn3 = document.getElementById("prevBtn3");

// Scroll by card width
const scrollAmount3 = 300; // adjust based on card size

nextBtn3.addEventListener("click", () => {
  container3.scrollBy({ left: scrollAmount3, behavior: "smooth" });
});

prevBtn3.addEventListener("click", () => {
  container3.scrollBy({ left: -scrollAmount3, behavior: "smooth" });
});





//change the bg image on click

function changeImg(){
  document.querySelector(".hero-section").style.backgroundImage = "url(../images/airport.webp)";
  console.log("heyyyyyy");
  document.querySelector(".all").classList.remove("active");
  document.querySelector(".all").style.color = "black";
  document.querySelector(".airport").classList.toggle("active");
  document.querySelector(".airport").style.color = "white";
}


function changeImg2(){
  document.querySelector(".hero-section").style.backgroundImage = "url(../images/monthly.webp)";
  console.log("heyyyyyy");
  document.querySelector(".airport").classList.remove("active");
  document.querySelector(".airport").style.color = "black";
  document.querySelector(".monthly").classList.toggle("active");
  document.querySelector(".monthly").style.color = "white";
  document.querySelector(".hero-headline").innerText = "Skip the dealership";
  document.querySelector(".hero-text").innerText = "No lease, no paperwork, no worries";
}
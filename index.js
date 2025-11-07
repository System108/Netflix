// const tabItems = document.querySelectorAll('.tab')
// const tabContentItems = document.querySelectorAll('.slide1, .slide2, .slide3')

// //select tab content item
// function selectItem(e) {
//     removeBorder();
//     removeSlide();
//     this.classList.add('tab-border');
//     //grap content item from Dom
//    const tabContentItem = document.querySelector('#${this.id}-con');
//    tabContentItem.classList.add(`slide`)
// }
// function removeBorder(){
//     tabItems.forEach(item => item.classList.remove('tab-border'));
// }

// function removeSlide(){
//     tabContentItems.forEach(item => item.classList.remove('slide'));
// }
// tabItems.forEach(item => item.addEventListener('click', selectItem));

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const slides = document.querySelectorAll(".slide1, .slide2, .slide3");

  // Hide all slides initially except the first
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? "flex" : "none";
  });

  // Add event listeners to each tab
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active border from all tabs
      tabs.forEach(t => t.classList.remove("tab-border"));

      // Add active border to clicked tab
      tab.classList.add("tab-border");

      // Hide all slides
      slides.forEach(slide => slide.style.display = "none");

      // Show the clicked slide
      slides[index].style.display = "flex";
    });
  });
});














let test = document.getElementById("testing")
test.addEventListener ("click", function(){
    console.log("I am connected")
})

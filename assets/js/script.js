require('bootstrap');
const img1 = require("../../assets/img/food-table.jpg")
const img2 = require("../../assets/img/grill.jpg")
$(document).ready(function() {
  
  

  // First image is hard coded in index.html
  const carouselSlides = [
    {
      title: "We travel all over the US",
      subtitle: "Check out our schedule!",
      img: img1,
      btnText: "View Schedule",
      btnUrl: "schedule.html"
    },
    {
      title: "Our food is seriously the bomb!",
      subtitle: "What are you waiting for?",
      img: img2,
      btnText: "Purchase Tickets",
      btnUrl: "tickets.html"
    },
  ]


  if (window.location.href.indexOf("index") > -1) {

    carouselSlides.forEach((slide, i) => {
      $('.carousel-inner').append(`
    <div class="carousel-item fullscreen-carousel" style="background-image: url('${slide.img}')">
      <div class="d-flex h-100 align-items-center justify-content-center carousel-caption">
          <div class="container">
            <div class="row align-items-center justify-content-center">
                <h2 class="display-4 mb-2">${slide.title}</h2>
            </div>
            <div class="row align-items-center justify-content-center"> 
              <h3>${slide.subtitle}</h3>
            </div>
            <div class=" mt-4 row align-items-center justify-content-center"> 
              <a class="btn btn-primary" href="${slide.btnUrl}">
                  ${slide.btnText}
              </a>
            </div>
          </div>
      </div>
    </div>`)
    })

    const pageEl = document.querySelector("#page");

    function createCards(events) {
      const cards = events.map((event) => (
          createEl("div", {class: "card-body clickable", onClick: () => onEventClick(event)}, 
          createEl("h5", {class: "card-title"}, event.title || ""),
          createEl("p", {class: "card-text"}, event.description || createLoremIpsum()),
          createEl("hr")
          )
      ))
      return cards
    }
    
    const containerEl1 = createEl("div", {class: "container mt-5"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 1"),
        ...createCards(events.slice(0,3))
    )
    )

    const containerEl2 = createEl("div", {class: "container"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 2"),
        ...createCards(events.slice(3,6))
    )
    )

    const containerEl3 = createEl("div", {class: "container"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 3"),
        ...createCards(events.slice(6,9))
    )
    )

    pageEl.appendChild(containerEl1);
    pageEl.appendChild(containerEl2);
    pageEl.appendChild(containerEl3);
  }



 
});
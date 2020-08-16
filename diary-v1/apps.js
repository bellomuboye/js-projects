const entryForm = document.querySelector(".input-entry-form");
const inputEntryHeading = document.querySelector("#input-entry-heading");
const inputEntryText = document.querySelector("#input-entry-text");
const entrySubmitButton = document.querySelector(".entry-submit-button");
const charCounter = document.querySelector(".char-counter");
const existingEntries = document.querySelector(".existing-entry");
const popupWhole = document.querySelector("#popup-whole");
const editForm = document.querySelector(".edit-popup-form");
const editEntryHeading = document.querySelector(".edit-entry-heading");
const editEntryText = document.querySelector("#edit-entry-text");
let id = 0;

//Countdown
inputEntryText.addEventListener("keyup", function () {
  let charLimit = 200;
  charCounter.textContent = charLimit - inputEntryText.value.length;
});

//Entry Form Submit
entryForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //Template
  insertExisting(inputEntryHeading.value, inputEntryText.value);
  entryForm.reset();
});

function insertExisting(entryHeading, entryText) {
  //   const html = `<div class="entry2">
  //           <div class="existing-entry-heading" style="border-top: 1px solid;">
  //             <h5>${entryHeading}<i class="arrow-icon fas fa-arrow-down"></i></h5>
  //           </div>
  //           <div class="existing-entry-text">
  //             <p>${entryText}</p>
  //           </div>
  //         </div>`;
  // //   existingEntries.innerHTML+=html;
  // existingEntries.appendChild = html;
  
  id++
  const template = document.createElement("div");
  template.innerHTML = `<div class="existing-entry-heading" style="border-top: 1px solid;">
           <h5 class = "entry-heading" >${entryHeading}</h5>
           <i class="pencil-icon fas fa-pencil-alt"></i>
           <i class="arrow-icon fas fa-arrow-down"></i>
          </div>
         <div class="existing-entry-text">
             <p class = "entry-text">${entryText}</p>
          </div>`;
  template.classList.add("entry");
  template.setAttribute("id", "entry" + id);
  existingEntries.prepend(template);
}

existingEntries.addEventListener("click", function (e) {
  //Accordion
  if (e.target.tagName === "I") {
    // console.log("Finally!");
    // console.log(((e.target.parentElement).parentElement));
    // console.log((document.querySelector(".existing-entry-heading")).nextElementSibling);
    const accordionContent = e.target.parentElement.nextElementSibling;
    // accordionContent.style.display = "none";

    if (accordionContent.style.display == "none") {
      accordionContent.style.display = "block";
    } else {
      accordionContent.style.display = "none";
    }
  } else  {
    // if (e.target.classList.contains("text")) {
    
    //  console.log(e.target)
    const origin = e.target.parentElement.parentElement;
     console.log(origin);
    if (origin.classList.contains ("entry")) {
      const id = origin.id;
      popupWhole.classList.remove("hide");
      const originHeading = origin.querySelector(".entry-heading");
    const originText = origin.querySelector(".entry-text");
editEntryHeading.value = originHeading.textContent;
    editEntryText.value = originText.textContent;
    const lala = document.querySelector("#"+ id + " .entry-heading");
    // console.log(lala);
    //   console.log(origin.id);
    
editForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // console.log(origin)
      // const lala = origin.querySelector(".existing-entry-heading");
      // const lolo = origin.querySelector(".existing-entry-text");
      // const lala = document.querySelector("#"+ id + " .entry-heading");
      // console.log(origin.id);
      // console.log(lala);
      // const lolo = origin.querySelector(".entry-text");
      console.log(e.target);
      console.log(e.target.parentElement.parentElement);
      console.log(origin);
      lala.innerHTML = editEntryHeading.value;
     
      // lolo.textContent = editEntryText.value;
      
    })

    }
    
    
    
  }
  // }

  //Editing
});

//Update Edit

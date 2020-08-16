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
const closeBtn = document.querySelector(".close");
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
  id++;
  const template = document.createElement("div");
  template.innerHTML = `<div class="existing-entry-heading" style="border-top: 1px solid;">
           <h5 class = "entry-heading" >${entryHeading}</h5>
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
    const accordionContent = e.target.parentElement.nextElementSibling;
    if (accordionContent.style.display == "none") {
      accordionContent.style.display = "block";
    } else {
      accordionContent.style.display = "none";
    }
  } else {
    const origin = e.target.parentElement.parentElement;

    if (origin.classList.contains("entry")) {
      document.querySelectorAll(".entry").forEach((div) => {
        div.classList.remove("editing");
      });

      origin.classList.add("editing");
      popupWhole.classList.remove("hide");
      const originHeading = origin.querySelector(".entry-heading");
      const originText = origin.querySelector(".entry-text");
      editEntryHeading.value = originHeading.textContent;
      editEntryText.value = originText.textContent;

      editForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const target = existingEntries.querySelector(".editing");
        const targetHeading = target.querySelector(".entry-heading");
        const targetText = target.querySelector(".entry-text");
        targetHeading.innerHTML = editEntryHeading.value;
        targetText.innerHTML = editEntryText.value;
        popupWhole.classList.add("hide");
      });

      closeBtn.addEventListener("click", function() {
        popupWhole.classList.add("hide");
      })
    }
  }
  // }

  //Editing
});

//Update Edit

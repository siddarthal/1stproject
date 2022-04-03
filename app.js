console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "  ";
  //   console.log(notesObj);

  showNotes();
});
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html =
      html +
      `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text"> ${element}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
      </div>`;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Add a note to make your life more easy `;
  }
}

// function delete note

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
  // console.log('delete',index);
}

let searchtxt = document.querySelector("#searchtxt");
// console.log(searchtxt);

searchtxt.addEventListener("input", function () {
  let inpVal = searchtxt.value.toLowerCase();
  console.log("input event fired", inpVal);

  let noteCards = document.getElementsByClassName("noteCard");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inpVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    //  console.log(cardTxt);
  });
});

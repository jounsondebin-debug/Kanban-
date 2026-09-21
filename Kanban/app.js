const todoContainer = document.querySelector(".to-do")
const inProgressContainer = document.querySelector(".in-progress")
const finishedContainer = document.querySelector(".finished")
const cardInput = document.getElementById("card-input")
const addBtn = document.getElementById("add-btn")

function addCard() {
   if(cardInput.value.trim() !== "") {
      const card = document.createElement("div")
      card.classList.add("card")

      const delBtn = document.createElement("button")
      const shiftRightBtn = document.createElement("button")
      shiftRightBtn.textContent = ">"
      shiftRightBtn.classList.add("shift-btn")
      delBtn.textContent = "X";
      delBtn.classList.add("delete-btn");
      card.textContent = cardInput.value;
      card.append(delBtn);
      card.append(shiftRightBtn)
       
      shiftRightBtn.addEventListener("click", () => shiftTask(card))
      
     

     cardInput.value = ""

      delBtn.addEventListener("click", () => {
        card.remove();
      })

      
      
      todoContainer.append(card)
      
   }
};

addBtn.addEventListener("click", addCard);

function shiftTask(card) {
   
   if(card.parentElement.classList.contains("to-do")) {
     inProgressContainer.append(card)
   } else if(card.parentElement.classList.contains("in-progress")) {
    finishedContainer.append(card)
   } else {
     card.remove()
   }


}
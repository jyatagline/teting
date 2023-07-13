// console.log("HELLO")

const cityData = [
  {
    state: "Gujarat",
    city: "Vapi",
    pincode: "396195",
  },

  {
    state: "Delhi",
    city: "New Delhi",
    pincode: "335009",
  },
  {
    state: "Maharashtra",
    city: "mumbai",
    pincode: "343452",
  },

  {
    state: "Rajasthan",
    city: "Kota",
    pincode: "343738",
  },
  
];

let stateEl = document.querySelector("#state-section tbody");
console.log(stateEl);
let cityEl = document.querySelector("#city-section tbody");
console.log(cityEl);

let pincodeEl = document.querySelector("#pincode-section tbody");

function InsertState(state) {
  cityEl.innerHTML = "";
  

  cityData.forEach((data) => {
    console.log(data);
    if (data.state === state) {
      // console.log(data.state);
      let row = document.createElement("tr");
      console.log(row);
      let column = document.createElement("td");
      
     console.log(column.textContent = data.city) 
      row.appendChild(column);
      cityEl.appendChild(row);

      column.addEventListener("click", () => {
        let selectedRow = document.querySelectorAll("#city-section td.selected");
        console.log(selectedRow);
        selectedRow.forEach((cell) => cell.classList.remove("selected"));

        // columnCell.classList.add('selected');
        column.classList.add("selected");
        InsertPincode(data.city);
      });
    }
  });
}
// InsertState()

function InsertPincode(city) {
  pincodeEl.innerHTML = " ";
  cityData.forEach((data) => {
    if (data.city === city) {
      let row = document.createElement("tr");
      let pincodeCell = document.createElement("td");
      pincodeCell.textContent = data.pincode;
      row.appendChild(pincodeCell);
      pincodeEl.appendChild(row);
    }
  });
}

cityData.forEach((data) => {
  let row = document.createElement("tr");
  let stateCell = document.createElement("td");
  stateCell.textContent = data.state;
  row.appendChild(stateCell);
  stateEl.appendChild(row);
  

   
  stateCell.addEventListener("click", () => {
    let selectedCell = document.querySelectorAll("#state-section td.selected");
    console.log(selectedCell);
    selectedCell.forEach((cell) => cell.classList.remove("selected"));
    
    stateCell.classList.add("selected");
    InsertState(data.state);
    pincodeEl.innerHTML = " ";
  });
});

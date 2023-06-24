const $ = document;
let clockInput = $.getElementsByClassName("top-left-time")[0],
  currentNumberInput = $.getElementsByClassName("currentNumber")[0],
  numKeys = $.getElementsByClassName("keys"),
  clearBtn = $.getElementById("clear"),
  saveBtn = $.getElementsByClassName("saveBtn")[0],
  nameModal = $.getElementsByClassName("nameModal")[0],
  closeBtn = $.getElementsByClassName("close")[0],
  keyContainer = $.getElementsByClassName("keyContainer")[0],
  numPad = $.getElementsByClassName("numPad")[0],
  sub = $.getElementById("sub"),
  userName = $.getElementById("userName"),
  contacts = $.getElementsByClassName("contacts")[0];

let date = new Date(),
  allContacts = [];

setInterval(() => {
  clockInput.innerHTML = `${
    date.getHours() < 9 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 9 ? "0" + date.getMinutes() : date.getMinutes()}`;
}, 1000);

[...numKeys].map((key) => {
  key.addEventListener("click", () => {
    currentNumberInput.innerHTML += key.innerHTML.replace(/\D/g, "");
  });
});

clearBtn.addEventListener("click", () => {
  currentNumberInput.innerHTML = currentNumberInput.innerText.substring(
    0,
    currentNumberInput.innerText.length - 1
  );
});

saveBtn.addEventListener("click", () => {
  nameModal.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  keyContainer.classList.toggle("deactive");
  numPad.classList.toggle("active");
});

numPad.addEventListener("click", () => {
  keyContainer.classList.remove("deactive");
  numPad.classList.remove("active");
});

const createUser = (name, number) => {
  let temp = `<div class="box">
  <div style="display: flex; flex-direction: row; align-items: center">
    <div class="img" style="background-color: #${(
      ((1 << 24) * Math.random()) |
      0
    )
      .toString(16)
      .padStart(6, "0")}">${name[0]}</div>
    <span class="name">${name}</span>
  </div>
  <div
    style="display: flex; align-items: center; justify-content: center"
  >
    <span class="number">${number}</span>
    <img
      width="14px"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nM2Vu0oDURCGP63VRkuj5FJLtMgbCd4KG2OaeCt8BJUkIGh6g6IxiAQMVsbHMCYpfAMvDPyRZd1bzCL+MLDMmTP/zJyZWfgHmAc2gROgDlwAp8AKkB7F8RJwD3wAn0AHaEs60plcA7lhHI8Bh8A70AW2gKSHXQrIAz3Z7gDjYc7NoKrIrCQTEQKaBMq6U1WAvtiToUU9LAq6e+BnkFOqFrkfHoFWwHlZPrJeh3XVPKgsLeAh4HwK6AMN90FyhNJ4lco6L+FUrorAq1sGmAEugWWCkZGvdaeyBLyEXJxW/zcJR9f9ljadTxEuNiMSPCvbb1xpQuMiaLsJjpR+XASvwLFTsaGHScVAkJGvNacyodbKx0BQkK9Z90FDi8t2i1cH1YA3SU06v0G78WLOasxLAQR3Ej+Cinws+KW3r/pt8/tlVwwyslV7LsOST7m8ylLRnbOwdT0g2VWqPWXj9WtMK+q+bItRnDuxCNw6fo3W2zZANqX2bTrrFntQ35pHwZwWl+0Wm04TGyLr8x+t+Of4Ao5IcM7WNjM1AAAAAElFTkSuQmCC"
    />
  </div>
</div>`;
  contacts.innerHTML += temp;
};

sub.addEventListener("click", () => {
  let fullName = userName.value;
  if (fullName !== "") {
    createUser(userName.value, currentNumberInput.innerText);
  } else {
    alert("please add a full name.");
  }
  allContacts != null &&
    allContacts.push({
      name: userName.value,
      number: currentNumberInput.innerText,
    });
  localStorage.setItem("contacts", JSON.stringify(allContacts));
  userName.value = "";
  currentNumberInput.innerText = "";
  nameModal.classList.remove("active");
});

window.onload = () => {
  let store = JSON.parse(localStorage.getItem("contacts"));
  console.log(store);
  if (store !== null) {
    allContacts = store;
    allContacts.map((contact) => createUser(contact.name, contact.number));
  }
};

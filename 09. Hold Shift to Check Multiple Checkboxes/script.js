let listData = [
  {
    id: "1",
    text: "This is an inbox layout",
    checked: true
  },
  {
    id: "2",
    text: "Check one item",
    checked: false
  },
  {
    id: "3",
    text: "Hold down your Shift key",
    checked: false
  },
  {
    id: "4",
    text: "Check a lower item",
    checked: false
  },
  {
    id: "5",
    text: "Everything in between should also be set to checked",
    checked: false
  },
  {
    id: "6",
    text: "Try do it without any libraries",
    checked: false
  },
  {
    id: "7",
    text: "Just regular JavaScript",
    checked: false
  },
  {
    id: "8",
    text: "Good luck!",
    checked: false
  },
];

let isShiftPressed = false;
let firstElement = null;
let lastElement = null;
let range = [];

const elemList = document.querySelector('#list');
let elemListItems = document.querySelectorAll('.list-item');

function drawListItems(listData) {
  elemList.innerHTML = '';

  listData.forEach((listItemData) => {
    const checked = listItemData.checked ? 'checked' : ''

    const elemListItem = `
      <li class="list-item" data-id="${listItemData.id}">
          <div class="list-item__cb">
              <input type="checkbox" value="${listItemData.id}" ${checked}>
          </div>
          <div class="list-item__label">
              <label class="${checked}">${listItemData.text}</label>
          </div>
      </li>
    `;

    elemList.innerHTML += elemListItem;
  });

  elemListItems = document.querySelectorAll('.list-item');
  elemListItems.forEach(item => item.addEventListener('click', changeListItemHandler));
}

function changeListItemHandler(event) {
  const id = this.dataset.id;
  range = [id];
  const cb = this.querySelector('input');
  const isChecked = !cb.checked;

  if (isChecked) {
    if (!isShiftPressed) {
      firstElement = id
    }
    if (isShiftPressed) {
      lastElement = id
    }
  } else {
    firstElement = lastElement = null
  }

  if (firstElement && lastElement) {
    range = [];
    if (firstElement < lastElement) {
      for (let i = firstElement; i <= lastElement; i++) {
        range.push(i.toString());
      }
    } else {
      for (let i = lastElement; i <= firstElement; i++) {
        range.push(i.toString());
      }
    }
  }

  listData = listData.map(listItemData => {
    if (range.includes(listItemData.id)) {
      return {
        ...listItemData,
        checked: isChecked
      }
    }

    return listItemData;
  });

  drawListItems(listData);
}

function keydownShiftHandler() {
  isShiftPressed = true;
}
function keyupShiftHandler() {
  isShiftPressed = false;
}

// Init
drawListItems(listData);

document.addEventListener('keydown', keydownShiftHandler);
document.addEventListener('keyup', keyupShiftHandler);
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

let lastElementId = null;

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

  const cb = this.querySelector('input');
  const isChecked = !cb.checked;

  if ((isChecked && event.shiftKey) || (!isChecked && event.ctrlKey)) {

  } else {
    lastElementId = id
  }

  const inBetweenArr = range(parseInt(lastElementId), parseInt(id));
  listData = listData.map(listItemData => {
    if (inBetweenArr.includes(parseInt(listItemData.id))) {
      if (event.shiftKey) {
        return {
          ...listItemData,
          checked: true
        }
      }
      if (event.ctrlKey) {
        return {
          ...listItemData,
          checked: false
        }
      }

      return {
        ...listItemData,
        checked: !listItemData.checked
      }

    }
    return listItemData;
  });

  drawListItems(listData);
}

function range(from, to) {
  let _from, _to;

  const direction = to - from;
  if (direction > 0) {
    [_from, _to] = [from, to];
  } else {
    [_from, _to] = [to, from];
  }

  return Array(_to - _from + 1)
    .fill('')
    .map((elem, i) => i + _from);
}

// Init
drawListItems(listData);
let thisPage = 1;
let limit = 8;
let list = document.querySelectorAll('.product .item');

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
  listPage();
}
loadItem();
function listPage() {
  let count = Math.ceil(list.length / limit)
  
  document.querySelector('.pagination').innerHTML = '';
  for (let i = 1; i <= count; i++) {
    let newPage = document.createElement('li')
    newPage.innerText = i.toString();
    if (i === thisPage) {
      newPage.classList.add('active')
    }
    document.querySelector('.pagination').appendChild(newPage)
  }
}
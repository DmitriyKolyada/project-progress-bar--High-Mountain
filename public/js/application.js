console.log('hello');

// const form = document.forms.userListForm;
const box = document.querySelector('.box-userList');
console.log('~ box', box)


box.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(event.target.description);
})

// const userList = document.querySelector('.userListForm');
// const btnAccept = document.querySelector('.')

// userList.addEventListener('click', () => {

//     console.log('~ userList', userList);
// //   console.log('event.target=========>', event);
// });




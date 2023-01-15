//Proving the closure doesnt go up the scope chain
//It goes for the header variable in its closed varaible environment
let header = document.querySelector('.buy');

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  // document.querySelector('body').addEventListener('click', function () {
  //   console.log(`I've taken ${header.style.color} from my closure!!`);
  //   header.style.color = 'blue';
  // });
  document.querySelector('body').addEventListener('click', function () {
    console.log('clicked');
  });
  console.log('waiting for clicked');
})();

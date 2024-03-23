const filter = document.getElementById("filter");

filter.addEventListener("keyup", function (event) {
  let textEntered = event.target.value.toLowerCase();

  const fruitItems = document.getElementsByClassName("fruit");

  for (let i = 0; i < fruitItems.length; i++) {
    let currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();

    if (currentFruitText.indexOf(textEntered) === -1) {
      fruitItems[i].style.display = "none";
    } else {
      fruitItems[i].style.display = "flex";
    }
  }
});




const deletebtn=document.getElementsByClassName('delete-btn')
for(let i=0;i<deletebtn.length;i++)
{
    const editbtn=document.createElement('button')
    editbtn.textContent='edit'
    editbtn.classList.add('edit-btn')
    deletebtn[i].insertAdjacentElement('afterend', editbtn);}

    const form=document.querySelector('form')
    const fruits=document.querySelector('.fruits')

    fruits.addEventListener('click',function(event){
        if(event.target.classList.contains('delete-btn'))
        {
            const fruittodel=event.target.parentElement
            fruits.removeChild(fruittodel)
        }
    });

    form.addEventListener('submit',function(event){
        event.preventDefault();
        const newInput=document.getElementById('fruit-to-add')
        const newli=document.createElement('li')
        newli.innerHTML=newInput.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>'
        fruits.appendChild(newli);
    })
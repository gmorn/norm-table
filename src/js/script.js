/*Burger*/
document.querySelector('.header__burger').addEventListener('click', ()=> {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header-body__menu').classList.toggle('active');
})

/*Read more...*/

more = function() {
    let hideContent = document.querySelectorAll('.blog-item p')
    
    hideContent.forEach( item=>{
        let height = item.clientHeight;
        console.log(height);
        if(height >= 105){
            item.innerHTML += '<div class="read-more">...<a class="button-more active">Узнать больше</a></div>'
        }
    })
}
more();
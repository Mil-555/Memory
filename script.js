document.addEventListener('DOMContentLoaded',()=>{
    const cardArray=[
        {
            name:'burger',
            img:'images/cheeseburger.png'
        },
        {
            name:'burger',
            img:'images/cheeseburger.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'fries',
            img:'images/fries.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'hotdog',
            img:'images/hotdog.png'
        },
        {
            name:'cream',
            img:'images/ice-cream.png'
        },
        {
            name:'cream',
            img:'images/ice-cream.png'
        },
        {
            name:'shake',
            img:'images/milkshake.png'
        },
        {
            name:'shake',
            img:'images/milkshake.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        },
        {
            name:'pizza',
            img:'images/pizza.png'
        }
    ]
    cardArray.sort(()=>0.5-Math.random())
    const grid=document.querySelector('.grid')
    const result=document.querySelector('#result')
    let chosen=[]
    let chosenId=[]
    let won=[]
    function board(){
        for(let i=0;i<cardArray.length;i++){
            let card=document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click', flip)
            grid.appendChild(card)
        }
    }
    function check(){
        let cards=document.querySelectorAll('img')
        const optionOne=chosenId[0]
        const optionTwo=chosenId[1]
        if(optionOne==optionTwo) {
            cards[optionOne].setAttribute('src','images/blank.png')
            cards[optionTwo].setAttribute('src','images/blank.png')
            alert('Kliknąłeś tą samą kartę')
          }
        else if(chosen[0]==chosen[1]){
            alert('Zgadłeś!')
            cards[optionOne].setAttribute('src','images/white.png')
            cards[optionTwo].setAttribute('src','images/white.png')
            cards[optionOne].removeEventListener('click',flip)
            cards[optionTwo].removeEventListener('click',flip)
            won.push(chosen)
        }
        else{
            cards[optionOne].setAttribute('src','images/blank.png')
            cards[optionTwo].setAttribute('src','images/blank.png')
            alert('Nie zgadłeś...')
        }
        chosen=[]
        chosenId=[]
        result.textContent=won.length
        if(won.length==cardArray.length/2){
            result.textContent='Zgadłeś wszystkie!'
        }
    }
    function flip(){
        let cardId=this.getAttribute('data-id')
        chosen.push(cardArray[cardId].name)
        chosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if(chosen.length==2){
            setTimeout(check,500)
        }
    }
    board()
})
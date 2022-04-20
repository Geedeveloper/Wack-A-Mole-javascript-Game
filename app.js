document.addEventListener('DOMContentLoaded', () => {
    const cardArray =[
        {
        name:'ani1',
        img:'images/ani1.jpg'
    },
    {
        name:'ani1',
        img:'images/ani1.jpg'
    },
    {
        name:'ani2',
        img:'images/ani2.jpg'
    },
    {
        name:'ani2',
        img:'images/ani2.jpg'
    },
    {
        name:'ani3',
        img:'images/ani3.jpg'
    },
    {
        name:'ani3',
        img:'images/ani3.jpg'
    },
    {
        name:'ani4',
        img:'images/ani4.jpg'
    },
    {
        name:'ani4',
        img:'images/ani4.jpg'
    },
    {
        name:'ani5',
        img:'images/ani5.jpg'
    },
    {
        name:'ani5',
        img:'images/ani5.jpg'
    },
    {
        name:'ani6',
        img:'images/ani6.jpg'
    },
    {
        name:'ani6',
        img:'images/ani6.jpg'
    },
    {
        name:'ani7',
        img:'images/ani7.jpg'
    },
    {
        name:'ani7',
        img:'images/ani7.jpg'
    },
    {
        name:'ani8',
        img:'images/ani8.jpg'
    },
    {
        name:'ani8',
        img:'images/ani8.jpg'
    },
    {
        name:'ani9',
        img:'images/ani9.jpg'
    },
    
    {
        name:'ani9',
        img:'images/ani9.jpg'
    },
    {
        name:'ani10',
        img:'images/ani10.jpg'
    },
    {
        name:'ani10',
        img:'images/ani10.jpg'
    }
    ]

    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChoosen = []
    var cardsChoosenId = []
    var cardWon = []
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blanker.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    function checkForMatch(){
       var cards = document.querySelectorAll('img')
       const opetionOneId = cardsChoosenId[0]
       const opetionTwoId = cardsChoosenId[1]
       if (cardsChoosen[0] === cardsChoosen[1]) {
        alert(" WOW YOU FOUND A MATCH")
        cards[opetionOneId].setAttribute('src', 'images/blank.jpg')
        cards[opetionTwoId].setAttribute('src', 'images/blank.jpg')
        cardWon.push(cardsChoosen)
       }
       else{
        cards[opetionOneId].setAttribute('src', 'images/blanker.jpg')
        cards[opetionTwoId].setAttribute('src', 'images/blanker.jpg')
        alert('YOU FAILED TRY AGAIN')
       }
       cardsChoosen = []
       cardsChoosenId = []
       resultDisplay.textContent = cardWon.length
       if (cardWon.length === cardArray.length/2) {
        resultDisplay.textContent = "CONGRATULATION YOU FOUND THEM ALL!! "
       }
    }

    function flipCard() {
        var cardId = this.getAttribute('data-Id')
        cardsChoosen.push(cardArray[cardId].name)
        cardsChoosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChoosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    createBoard()



})

document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'images/1.png'
    },
    {
      name: '1',
      img: 'images/1.png'
    },
    {
      name: '2',
      img: 'images/2.png'
    },
    {
      name: '2',
      img: 'images/2.png'
    },
    {
      name: '3',
      img: 'images/3.png'
    },
    {
      name: '3',
      img: 'images/3.png'
    },
    {
      name: '4',
      img: 'images/4.png'
    },
    {
      name: '4',
      img: 'images/4.png'
    },
    {
      name: '5',
      img: 'images/5.png'
    },
    {
      name: '5',
      img: 'images/5.png'
    },
    {
      name: '6',
      img: 'images/6.png'
    },
    {
      name: '6',
      img: 'images/6.png'
    }

  ]


  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //create your board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/cardface.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('you found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/cardface.png')
      cards[optionTwoId].setAttribute('src', 'images/cardface.png')

    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulation! Found Them All'
    }
  }


  //flip your card
  function flipCard() {
    var cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenId.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }


  createBoard()









})
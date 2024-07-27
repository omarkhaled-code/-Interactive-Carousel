import { defineStore } from 'pinia'

const carouselStore = defineStore('useTaskStore', {
  state: () => ({
    editModeID: null,
    cards: [
      {
        id: 1,
        userName: 'Anthony',
        jobTitle: 'ABC Company',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.',
        numOfStars: 3,
        image: 'src/assets/customer-1.png'
      },
      {
        id: 2,
        userName: 'Anthony',
        jobTitle: 'ABC Company',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.',
        numOfStars: 3,
        image: 'src/assets/customer-2.png'
      },
      {
        id: 3,
        userName: 'Anthony',
        jobTitle: 'ABC Company',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.',
        numOfStars: 3,
        image: 'src/assets/customer-3.png'
      },
      {
        id: 4,
        userName: 'Anthony',
        jobTitle: 'ABC Company',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.',
        numOfStars: 3,
        image: 'src/assets/customer-1.png'
      },
      {
        id: 5,
        userName: 'Anthony',
        jobTitle: 'ABC Company',
        review:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor vestibulum odio, eget convallis enim euismod ut. Integer sollicitudin at nibh maximus molestie. Donec vitae diam et sem posuere lobortis nec nec lacus. Proin id enim nec erat volutpat mattis vel ut felis.',
        numOfStars: 3,
        image: 'src/assets/customer-2.png'
      }
    ]
  }),
  getters: {
    getCards: (state) => {
      return state.cards
    }
  },
  actions: {
    addReview(review) {
      this.cards.push(review)
    },
    setEditMode(id) {
      this.editModeID = id
    },
    editReview() {
      if (this.editModeID) {
        for (let i = 0; i < this.cards.length; i++) {
          if (this.cards[i].id === this.editModeID) {
            return this.cards[i]
          }
        }
      }
    },
    updateReview(newReview) {
      for (let i = 0; i < this.cards.length; i++) {
        if (this.cards[i].id === newReview.id) {
          this.cards[i] = newReview
          break
        }
      }
      this.setEditMode(null)
      console.log(this.editModeID)
    },
    deleteReview(id) {
      this.cards = this.cards.filter((card) => card.id !== id)
    }
  }
})

export default carouselStore

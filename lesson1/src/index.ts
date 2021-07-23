import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

const currentDate = new Date()
const year = currentDate.getFullYear()
const month = currentDate.getMonth() + 1
const day = currentDate.getDate()
const checkIn = month < 10 ? `${year}-0${month}-${day}` : `${year}-${month}-${day}` 
const checkOut = month < 10 ? `${year}-0${month}-${day + 2}` : `${year}-${month}-${day + 2}`

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren','/img/avatar.png', 0)
  renderSearchFormBlock(checkIn, checkOut)
  renderSearchStubBlock()
  renderToast(
    {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

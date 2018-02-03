import { Controller } from 'stimulus'

export default class extends Controller {
  log(event) {
    console.log(this.targets.find("name").value)
  }

  paste(event) {
    event.preventDefault()
    console.log('paste are not allowed')
  }

  get name() {
    if (this.data.has("name")) {
      return this.data.get("name")
    } else {
      return "Anonymous User"
    }
  }
}

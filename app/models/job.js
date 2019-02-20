export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  getTemplate() {
    return `
        <div class=" col-3 card text-white bg-transparent border-light ">
            <div class="card-body">
                <h5 class="card-title ">Job:${this.jobTitle}</h5>
                <p class="card-text">Company:${this.company} --rate: ${this.rate}--hours:${this.hours}</p>
                <p class"card-text">${this.description}</p>
                <button onclick="app.controllers.jobController.deleteJob('${this._id}')">Remove</button>
            </div>
        </div>`
  }
}
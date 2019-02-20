import JobService from "./jobService.js";






let _js = new JobService()

function draw() {
  let jobs = _js.Job
  let template = ''
  jobs.forEach(job => {
    template += job.getTemplate()
  });
  document.getElementById('available-content').innerHTML = template
  document.getElementById('form-content').innerHTML = `            
    <form onsubmit="app.controllers.jobController.addJob(event)">
        <input type="text" name="jobTitle" placeholder="JobTitle" required>
        <input type="text" name="company" placeholder="company" required>
        <input type="number" name="hours" placeholder="hours" required>
        <input type="text" name="description" placeholder="Description">
        <input type="decimal" name="rate" placeholder="rate" required>
        <button type="submit">Submit</button>
    </form>`
}


export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
    _js.getApiJobs()
  }
  addJob(event) {
    event.preventDefault();
    let form = event.target
    let newJob = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      hours: form.hours.value,
      description: form.description.value,
      rate: form.rate.value,
    }
    _js.addJob(newJob)
    form.reset()
  }

  getJobs() {
    _js.getApiJobs()
  }
  deleteJob(id) {
    _js.deleteJob(id)
  }









}
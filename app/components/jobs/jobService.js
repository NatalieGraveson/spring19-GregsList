import Job from "../../models/job.js";


let _api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})


let _state = {
  jobs: []
}

let _subscribers = {
  jobs: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}

export default class JobService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Job() {
    return _state.jobs.map(j => new Job(j))
  }

  getApiJobs() {
    _api.get('jobs')
      .then(res => {
        let jobData = res.data.data.map(j => new Job(j))
        setState('jobs', jobData)
      })
  }
  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _api.post('jobs', newJob)
      .then(res => {
        this.getApiJobs()
      })
  }
  deleteJob(id) {
    _api.delete('jobs/' + id)
      .then(res => {
        this.getApiJobs()
      })

  }
}
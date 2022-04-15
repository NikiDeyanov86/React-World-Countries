import React from 'react'
import Dashboard from './Components/Dashboard'
import Header from './Components/Header'
import { BrowserRouter as Router, Route} from 'react-router-dom'


class App extends React.Component {

  constructor () {
    super()
    this.state = {
      response: [],
      search: "",
      filter: "",
      error: ""
    }

    this.fetchAllCountries = this.fetchAllCountries.bind(this)
    this.filterCountries = this.filterCountries.bind(this)
  }

  fetchAllCountries = function() {
    fetch('https://restcountries.com/v2/all').then(data => data.json()).then(data => {
      this.setState({
        response: data,
        search: "",
        filter: "",
        error: ""
      })
    }).catch(error => console.log(error))
  }

  filterCountries = (e) => {

    e.preventDefault()

    const { name, value } = e.target

    if (value.match(/^[a-zA-Z\s]*$/)) {

      let url, counter

      if (name === "search") {
        url = `https://restcountries.com/v2/name/${value}`
        this.setState({
          filter: "",
        })
      }
      if (name === "filter") {
        url = `https://restcountries.com/v3.1/region/${value}`
        this.setState({
          search: "",
        })
      }

      this.setState({
        [name]: value,
        error: ""
      })

      clearTimeout(counter)
      counter = setTimeout(() => {
        
        if (!value) {
          this.fetchAll()
        }

        if (value) {
          fetch(url)
            .then(res => res.json())
            .then(data => {
              if (data.status === 404) {
                this.setState({
                  error: "No Country Found"
                })
              } else {
                this.setState({
                  response: data
                })
              }
            })
            .catch(error => console.log(error))
        }
      }, 100)
    }
  }

  

  componentDidMount() {
    
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => {
        //updating state of apiResponses
        this.setState({
          response: data,
          loading: false,
        })
      })
      .catch(error => console.log(error))
  }

  render() {

    return (
        <div className='App'>
            <Header data={this.state} filterCountries={this.filterCountries}/>
            <Dashboard data={this.state}/>
        </div>
    )
  }
}

export default App;

import React from 'react'
import SelectMech from './SelectMech.jsx'
import MechLab from './MechLab.jsx'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMech: false,
      mechList:[]
    }
  }

  handleMechSelect(mechName) {
    if(mechName !== 'none'){
      fetch(`http://localhost:3000/mechs?id=${mechName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((result) => {
        return result.json()
      })
      .then((parsedResult) => {
        this.setState({
          currentMech: parsedResult
        })
      })
      .catch(err => console.log(err))
    }
  }

  save(buildState) {
    fetch('http://localhost:3000/builds', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(buildState)
    })
    .then(() => {
      alert('Build saved to database!')
    })
    .catch(err => console.log(err))
  }

  export() {
    alert('TODO EXPORT HASH')
  }

  componentDidMount() {
    fetch('http://localhost:3000/mechs')
      .then((result) => {
        return result.json()
      })
      .then((parsed) => {
        let mechList = []
        for(let key in parsed){
          mechList.push(parsed[key])
        }
        this.setState({
          mechList: mechList.sort()
        })
      })
      .catch()
  }

  render() {
    if(this.state.currentMech){
      return (
        <div>
          <h1>MechLab+</h1>
          <SelectMech 
          mechs = {this.state.mechList}
          handleMechSelect = {this.handleMechSelect.bind(this)}
          />
          <MechLab 
          mech = {this.state.currentMech[0]}
          save = {this.save.bind(this)}
          export = {this.export.bind(this)}
          />
        </div>
      )
    } else {
      return (
        <SelectMech 
        mechs = {this.state.mechList}
        handleMechSelect = {this.handleMechSelect.bind(this)}
        />
      )
    }
  }
}

export default App
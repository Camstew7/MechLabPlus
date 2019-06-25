import React from 'react'
import SelectMech from './SelectMech.jsx'
import MechLab from './MechLab.jsx'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentMech: false
    }
  }

  handleMechSelect(mechName) {
    if(mechName !== 'none'){
      fetch(`http://localhost:3000/mechs?id=${mechName}`)
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

  render() {
    if(this.state.currentMech){
      return (
        <div>
          <h1>MechLab+</h1>
          <SelectMech 
          handleMechSelect = {this.handleMechSelect.bind(this)}
          />
          <MechLab 
          mech = {this.state.currentMech}
          save = {this.save.bind(this)}
          export = {this.export.bind(this)}
          />
        </div>
      )
    } else {
      return (
        <SelectMech 
        handleMechSelect = {this.handleMechSelect.bind(this)}
        />
      )
    }
  }
}

export default App
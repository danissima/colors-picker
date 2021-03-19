// import logo from './logo.svg';
import { Component } from 'react'
import { v4 } from 'uuid'
import './App.css';
import AddColorForm from './components/AddColorForm'
import ColorList from './components/ColorList'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        {
          "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
          "title": "ocean at dusk",
          "color": "#00c4e2",
          "rating": 3
        },
        {
          "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a3",
          "title": "tomato",
          "color": "#FF2929",
          "rating": 4
        }
      ]
    }
    this.addColor = this.addColor.bind(this)
    this.rateColor = this.rateColor.bind(this)
    this.removeColor = this.removeColor.bind(this)
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({colors})
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(color =>
      (color.id !== id) ?
        color: {
          ...color,
          rating
        }
    )
    this.setState({colors})
  }

  removeColor(id) {
    const colors = this.state.colors.filter(color => color.id !== id)
    this.setState({colors})
  }

  render() {
    const { addColor, rateColor, removeColor } = this
    const { colors } = this.state
    return (
      <div className="App">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
      </div>
    )
  }
}

export default App;

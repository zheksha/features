
import { useState } from 'react'
import './App.scss'

function App() {

  const [selected, setSelected] = useState()

  const theData = [
    {
      id: 0,
      title: "Mobile Responsive",
      largeText: "Lorem Ipsum",
      subTitle: "Some Regular Subtitle",
    },
    {
      id: 1,
      title: "User Friendly",
      largeText: "Dolor Sit Amet",
      subTitle: "Some Regular Subtitle",
    }]

  const onHandleButtonClick = (id) => {
    theData.filter(el => { if (el.id === id) setSelected(el) })
  }

  const buttons = [{ name: "Mobile Responsive", id: 0 }, { name: "User Friendly", id: 1 }]


  return (
    <div className='container'>
      <h2 className='title'>Discover the key features</h2>
      <div className='navigation'>{

        buttons.map(button => <button key={button.id} onClick={() => onHandleButtonClick(button.id)}>{button.name}</button>)}

      </div>
      <div className='content'>
        <div>{selected?.title}</div>
        <div>{selected?.largeText}</div>
      </div>
    </div>
  )
}

export default App

function App() {
  return <>
    <CardWrapper innerComponent={<TextComponent/>} />
    <CardWrapper innerComponent={<TextComponent/>} />
    <CardWrapper innerComponent={<TextComponent/>} />
  </>
}

function TextComponent(){
  return <div>
    Venkatesh here
  </div>
}

function CardWrapper({innerComponent}){
    return <div style={{border: "2px solid black",padding: 100}}>
      {innerComponent}
    </div>
}


export default App
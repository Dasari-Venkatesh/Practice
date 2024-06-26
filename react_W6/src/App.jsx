function App() {
  return <>
    <CardWrapper>
      Venkatesh here
      <CardWrapper>
        Venkatesh here and there
      </CardWrapper>
    </CardWrapper>
    <CardWrapper>
      Venkatesh here and there
    </CardWrapper>
    <CardWrapper>
      <TextComponent/>
    </CardWrapper>
  </>
}

function TextComponent(){
  return <div>
    Hi from text component func,
  </div>
}

function CardWrapper({children}){
    return <div style={{border: "2px solid black",padding: 100}}>
      {children}
    </div>
}


export default App
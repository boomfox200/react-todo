import "./App.css";
import Header from "./header/header.js";
import Content from "./content/content.js";


let icons = {
  'shop':'./img/shop.png',
  'bascetball':'/img/bascetball.png',
  'drink':'/img/drink.png',
  'fitness':'/img/fitness.png',
  'map':'/img/map.png',
  'other':'/img/other.png',
}

function App() {
  return (
    <div className="App">
      <Header />
      <Content time='9 : 20' text='Shopping list, food for the week...' imgSrc={icons.shop} />
      <Content time='9 : 45' text='Play basketball with Billy and...' imgSrc={icons.bascetball} />
      <Content time='10 : 12' text='Go to Richmond Park to get the...' imgSrc={icons.drink} />
      <Content time='10 : 30' text='Prepare the Jennifers birthday...' imgSrc={icons.fitness} />
      <Content time='11 : 20' text='Play basketball with Billy and...' imgSrc={icons.map} />
      <Content time='11 : 30' text='Go to Richmond Park to get the...' imgSrc={icons.other} />
      <Content time='15 : 10' text='Go to Richmond Park to get the...' imgSrc={icons.shop} />
    </div>
  );
}

export default App;

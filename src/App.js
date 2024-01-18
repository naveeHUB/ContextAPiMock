import './App.css';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Collection from './Collections/Collection'

function App() {
  return (
    <div className="App">
      <Menu />
     <main>
      <Collection />
     </main>
     <Footer />
    </div>
  );
}
export default App;

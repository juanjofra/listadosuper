import './App.css';
import FormAddTodo from './Components/FormAddTodo';
import ListTodo from './Components/ListTodo';

function App() {
  return (
    <>
      <section className="container">

        <div className="header">
          <FormAddTodo/>
        </div>

        <section className="main">
          <ListTodo />
      </section>
      <footer className="footer">Listado del super JyJ</footer>
    </section>

    </>
  );
}

export default App;

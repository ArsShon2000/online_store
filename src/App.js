import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { Spinner } from "react-bootstrap";
import { check } from "./http/userApi";


const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000);

  }, [])                                              // ЕСЛИ ЭТОТ МАССИВ (ЗАВИСИМОСТИ) ПУСТОЙ ТО ФУНКЦИЯ СРАБОТАЕТ ЕДИНОЖНЫ

  if (loading) {
    return <Spinner animation={"grow"} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;

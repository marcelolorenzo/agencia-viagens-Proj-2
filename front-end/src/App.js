import { Route, Routes } from "react-router-dom";
import { DashboardView } from "./views/Dashboard";
import { HomeView } from "./views/Home";
import { LoginView } from "./views/Login";
import { NotFoundView } from "./views/NotFound";
import { PacoteDetailView } from "./views/PacoteDetail";
import { PacotesView } from "./views/Pacotes";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/pacotes' element={<PacotesView />} />
      <Route path='/pacotes/:id' element={<PacoteDetailView />} />
      <Route path='/portal' element={<DashboardView />} />
      <Route path='/portal/login' element={<LoginView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;

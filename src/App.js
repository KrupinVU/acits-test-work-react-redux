import React from 'react';
import Header from "./components/header";
import Main from "./components/main";
import { AuthProvider} from "./customHooks/auth.hook";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Main />
    </AuthProvider>
  )
}

export default App;

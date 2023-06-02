import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";



function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articulos" component={Articulos} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;


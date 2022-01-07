import react from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { Repositories } from "./components/repositories";
import { resetCSS } from "./global/resetCSS";


function App() {
  return (
    <main>
      <resetCSS />
      <Layout>
       <Profile />
       <Repositories />
      </Layout>
    </main>
  );
}

export default App;

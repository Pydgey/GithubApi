import react from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import { Repositories } from "./components/repositories";
import { resetCSS } from "./global/resetCSS";
import { GitHubProvider } from "./providers/github-provider";


function App() {
  return (
    <main>
      <GitHubProvider>
        <resetCSS />
        <Layout>
        <Profile />
        <Repositories />
        </Layout>
      </GitHubProvider>
    </main>
  );
}

export default App;

import Bitles from "./components/bitles/Bitles";
import Cards from "./components/Cards/Cards";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Introduction from "./components/introduction/Introduction";
import Registration from "./components/registration/Registration";
import Table from "./components/table/Table";

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Table />
      <Bitles />
      <Cards />
      <Registration />
      <Footer />
    </>
  );
};

export default App;

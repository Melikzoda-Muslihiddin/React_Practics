import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
// import Card from "./components/Card";

function App() {
  return (
    <div>
    <Header />
    <Hero />
    <Features />
    <Pricing />
    <Questions />
    <Footer />
  </div>
  )
}
// const App = () => {
//   const data = [
//     {
//       id: 1,
//       name: "C++ Kids Eco",
//       location: "Profsoyuz",
//       qual: "0/7",
//       studenta: 4,
//       studentb: 10,
//       status: false,
//       week: "Pn,Vt,Sr,Cht,Pt,Sub",
//     },
//     {
//       id: 2,
//       name: "Pyton-Kids February",
//       location: "Profsoyuz",
//       qual: "0/7",
//       studenta: 8,
//       studentb: 10,
//       status: false,
//       week: "Pn,Vt,Sr,Cht,Pt,Sub",
//     },
//     {
//       id: 3,
//       name: "Html/Css February",
//       studenta: 9,
//       studentb: 12,
//       status: false,
//       location: "Sozidaniya",
//       qual: "0/7",
//       week: "Pn,Vt,Sr,Cht,Pt,Sub",
//     },
//   ];
// return (
  // <div>
  //   {data.map((el, i) => {
  //     return (
  //       <Card
  //         key={i}
  //         name={el.name}
  //         studentb={el.studentb}
  //         studenta={el.studenta}
  //         location={el.location}
  //         qual={el.qual}
  //         week={el.week}
  //         status={el.status}
  //       />
  //     );
  //   })}
  // </div>
  
// );
// };

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
// import Card from "./components/Card";

function App() {
  const products = [
    {
      id: 1,
      img: "/images/Latoflex.png",
      name: "Латофлекс",
      infoText:
        "Шпон березовый лущеный, ГОСТ 99-96B Смола марки КФМТ - 15, класс эмиссии E0",
    },
    {
      id: 2,
      img: "/images/fanera.png",
      name: "ФАНЕРА",
      infoText:
        "Шпон березовый лущеный, ГОСТ 99-96В. Смола марки КФМТ - 15, класс эмиссии Е0",
    },
    {
      id: 3,
      img: "/images/Raf.png",
      name: "БРИКЕТЫ RUF",
      infoText:
        "Прессованные березовые опилки без применения химических добавоk",
    },
    {
      id: 4,
      img: "/images/Pilomaterial.png",
      name: "ПИЛОМАТЕРИАЛЫ",
      infoText:
        "Дисковый распил - ель сибирская, пихта, сосна, берёза, липа, осина",
    },
    {
      id: 5,
      img: "/images/Krovatniye.png",
      name: "КРОВАТНЫЕ ОСНОВАНИЯ",
      infoText: "Из берёзового шпона или из массива на ленте",
    },
    {
      id: 6,
      img: "/images/Ugol.png",
      name: "УГОЛЬ",
      infoText: "Микропористый высокоуглеродистый продукт",
    },
    {
      id: 7,
      img: "/images/Sajensi.png",
      name: "САЖЕНЦЫ",
      infoText: "Молодые деревья выращенные в питомнике",
    },
    {
      id: 8,
      img: "/images/Otxodi.png",
      name: "ОТХОДЫ ПРОИЗВОДСТВА",
      infoText:
        "Прессованные березовые опилки без применения химических добавок",
    },
  ];
  const works = [
    {
      id: 1,
      name: "ВОДИТЕЛЬ ЛЕСОВОЗА",
      price: "З.п. от 50 000 ₽",
      infoText:
        "Оборудование предприятия поставляется от мировых лидеров стабильный выпуск продукции.",
    },
    {
      id: 2,
      name: "ОПЕРАТОР ЛИНИИ",
      price: "З.п. от 45 000 ₽",
      infoText:
        "Работа на современном оборудовании, контроль производственного процесса и соблюдение стандартов качества.",
    },
    {
      id: 3,
      name: "МАШИНИСТ ПОГРУЗЧИКА",
      price: "З.п. от 48 000 ₽",
      infoText:
        "Погрузка, разгрузка и перемещение готовой продукции по территории предприятия.",
    },
    {
      id: 4,
      name: "СЛЕСАРЬ-РЕМОНТНИК",
      price: "З.п. от 52 000 ₽",
      infoText:
        "Обслуживание и ремонт производственного, обеспечение бесперебойной работы линии.",
    },
    {
      id: 5,
      name: "ЭЛЕКТРИК-Santexnik",
      price: "З.п. от 47 000 ₽",
      infoText:
        "Контроль электрических систем, устранение неисправностей и профилактическое обслуживание.",
    },
  ];
  return (
    <div>
      <Header />
      <Features products={products} />
      <Hero />

      <Questions />
      <Pricing works={works} />
      <Footer />
    </div>
  );
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

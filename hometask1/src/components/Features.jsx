import Button from "./button";

export default function Features({ products }) {
  return (
    <section className="bg-[#555] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-4xl font-bold mb-6">ПРОДУКЦИЯ ЗАВОДА</h2>
        <p className="text-gray-300 max-w-xl mb-12">
          Ниже представлен список нашей продукции. Получить дополнительную
          информацию можно по контактам коммерческой службы.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-[#4b4b4b] p-8 text-white">
              <img src={item.img} className="h-40 mx-auto mb-6" />

              <h3 className="text-xl font-semibold mb-3">{item.name}</h3>

              <p className="text-gray-300 text-sm">{item.infoText}</p>

              <Button />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

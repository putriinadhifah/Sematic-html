import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        kategori kami
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Special Edition"
          image="luxury fashion 7 2.jpeg"
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Koleksi Terbaru"
          image="luxury category 2.jpeg"
          link="New"
        />
        <CategoryItem
          categoryTitle="Summer Edition"
          image="luxury category 3.jpeg"
          link="summer-edition"
        />
        <CategoryItem
          categoryTitle="Koleksi Unik"
          image="luxury fashion 7 1.jpeg"
          link="Koleksi-Unik"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;

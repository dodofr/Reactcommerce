import Header from "../components/Header";

function ModifierCategorie() {
  return (
    <>
      <Header />
      <div className="bg-trait-or h-[0.5vh]"></div>
      <div className="w-full h-[80vh] flex justify-center items-center bg-cadre bg-cover md:bg-auto bg-center bg-no-repeat">
        <div className="flex-1 max-w-[400px] mx-auto border-2 rounded p-5">
          <h1 className="text-2xl text-blue-900 font-semibold mb-3">
            Modifier categorie
          </h1>
        </div>
      </div>
    </>
  );
}
export default ModifierCategorie;

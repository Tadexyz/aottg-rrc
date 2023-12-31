import BalanceCalculator from "../components/BalanceCalculator";
import HDMCalculator from "../components/HDMCalculator";
import RunAnalyzer from "../components/RunAnalyzer";

export default function Tools() {
  return (
    <>
      <h1 className="text-5xl text-rrc-red-light text-center mb-10">Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-around [&>section>div>label]:block">
        <section className="md:col-span-2">
          <RunAnalyzer />
        </section>
        <section>
          <HDMCalculator />
        </section>
        <section>
          <BalanceCalculator />
        </section>
      </div>
    </>
  );
}

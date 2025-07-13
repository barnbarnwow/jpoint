import Navbar from "./components/navbar";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold">Welcome to JPOINT</h1>
        </div>
        <p className="mt-4 text-lg">
          This is a sample application demonstrating the use of Next.js with
          Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

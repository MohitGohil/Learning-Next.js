import Head from "next/head";
import Image from "next/image";

let styles = {
  container: "font-mono",
  main: "bg-white text-black shadow-md rounded-lg p-4 m-2",
};

export default function Home() {
  return (
    <div className="bg-white text-black shadow-md rounded-lg p-4 m-2">
      <h1 className="text-2xl font-bold text-center">This is Home page</h1>
    </div>
  );
}

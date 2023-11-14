import Header from "./component/headerComponent/header";

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen bg-white text-black">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow text-center text-3xl">
        <div className="w-3/5 mb-8">
        &quot;Trust in the Lord with all your heart and lean not on your own
          understanding; in all your ways submit to him, and he will make your
          paths straight.&quot; - Proverbs 3:5-6
        </div>
        <h1>404 - Page Not Found</h1>
      </div>
    </div>
  );
}
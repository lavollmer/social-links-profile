import "./App.css";
import profilePic from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <div className="flex flex-col bg-black">
      <img
        src={profilePic}
        alt="Profile Picture of Jessica"
        className="rounded-full flex justify-center"
      />
      <div className="flex flex-col">
        <h1 className="font-inter text-2xl text-neutral-white">
          Jessica Randall
        </h1>
        <h2 className="font-inter text-primary-green">
          London, United Kingdom
        </h2>
        <h2 className="font-inter text-neutral-white">
          "Front-end developer and avid reader."
        </h2>
      </div>
      <div>
        <button className="bg-darkgrey inline-block hover:bg-primary-green px-4 py-2">
          <a
            href="https://twitter.com"
            className="font-inter text-neutral-white"
          >Twitter</a>
        </button>
      </div>
    </div>
  );
}

export default App;

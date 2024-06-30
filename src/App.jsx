import "./App.css";
import profilePic from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <div className="flex flex-col bg-black p-4">
      <div className="w-full max-w-md p-4 rounded-lg bg-neutral-offblack">
        <img
          src={profilePic}
          alt="Profile Picture of Jessica"
          className="rounded-full mx-auto w-24 h-24"
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

        <button className="flex flex-row px-2 py-2 bg-neutral-darkgrey text-neutral-white hover:bg-primary-green">
          Twitter
        </button>
      </div>
    </div>
  );
}

export default App;

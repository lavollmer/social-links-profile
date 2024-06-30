import "./App.css";
import profilePic from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <div className="flex flex-col bg-black p-4">
      <div className="w-full max-w-md p-4 rounded-lg space-y-4 bg-neutral-offblack">
        <img
          src={profilePic}
          alt="Profile Picture of Jessica"
          className="rounded-full mx-auto w-20 h-20"
        />
        <div className="flex flex-col">
          <h1 className="font-inter text-xl text-neutral-white">
            Jessica Randall
          </h1>
          <h2 className="font-inter text-xs text-primary-green">
            London, United Kingdom
          </h2>
          <h2 className="font-inter text-xs text-neutral-white p-2">
            "Front-end developer and avid reader."
          </h2>
        </div>
        <div className="flex flex-col space-y-4 text-sm">
          <button className="flex flex-row justify-center items-center text-center px-2 py-2 rounded-lg bg-neutral-darkgrey text-neutral-white hover:bg-primary-green">
            Github
          </button>
          <button className="flex flex-row justify-center items-center text-center px-2 py-2 rounded-lg bg-neutral-darkgrey text-neutral-white hover:bg-primary-green">
            Frontend Mentor
          </button>
          <button className="flex flex-row justify-center items-center text-center px-2 py-2 rounded-lg bg-neutral-darkgrey text-neutral-white hover:bg-primary-green">
            LinkedIn
          </button>
          <button className="flex flex-row justify-center items-center text-center px-2 py-2 rounded-lg bg-neutral-darkgrey text-neutral-white hover:bg-primary-green">
            Twitter
          </button>
          <button className="flex flex-row justify-center items-center text-center px-2 py-2 rounded-lg bg-neutral-darkgrey text-neutral-white hover:bg-primary-green">
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

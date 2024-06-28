import "./App.css";
import profilePic from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <div>
      <img src={profilePic} alt="Profile Picture of Jessica" className="rounded"/>

      <div className="bg-black">
        <h1 className="font-inter text-2xl text-neutral-white">
          Jessica Randall
        </h1>
        <h2 className="font-inter text-primary-green">
          London, United Kingdom
        </h2>
      </div>
    </div>
  );
}

export default App;

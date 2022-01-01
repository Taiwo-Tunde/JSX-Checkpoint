import imageInSrc from "./imageInSrc.jpg";
import Style from "./component/style";
function App() {
  return (
    <div>
      <Style />
      <img src={imageInSrc} alt="profile" width={400} />
      <img src="/imageInPublic.jpg" width={500} />
    </div>
  );
}

export default App;

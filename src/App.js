import './App.css';
import image from './myimage.jpeg';
import video from './myvideo.mp4';
import './style.css';

function App() {
  return (
    <div>
    <div style={{border:'solid 1px black', maxWidth: "100vw" }}>
      <h1 className="title-red">JSX-checkpoint</h1>
    <img className="image1" src={image} alt="imageInSrc" />
    <img className="image2" src="portalinpublic.jpeg" alt="jsx" />
    </div>
    <video className="video1" width="750" height="500" controls >
       <source src="myvideo.mp4" type={video}/>
     </video>
</div>
  );
}

export default App;

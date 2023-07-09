import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <video style={{ width: '100%', position: 'fixed', minHeight: '100vh', objectFit: 'cover', zIndex: '-1' }} autoPlay muted loop id="background-video">
        <source src="moon.mp4" type="video/mp4" />
      </video>
      <div className='content'>
        <h2>COMING SOON</h2>
        <h3>Apollo NFT</h3>
        <form className='form-container'>
          <input type='email' name='email' placeholder='Enter a valid email'/>
          <button id='learn'>SUBMIT</button>
        </form>
        <p>And dont worry, we hate span too! You can unsub at anytime you want</p>
      </div>
    </div>
  );
}

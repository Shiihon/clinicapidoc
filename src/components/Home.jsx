import clinicLogo from '../assets/images/clinicLogo4.png';

function Home() {
    return (
        <>
            <div className="home">
                <h1 className="home-title">Welcome to the Clinic API</h1>
                <p className="home-description">We’re here to connect you to the healthcare that fits your life...</p>
                <img 
                    src={clinicLogo} 
                    alt="Clinic Logo" 
                    className="home-logo"
                />
                <div className="home-buttons">
                    <button 
                        className="home-button"
                        onClick={() => window.open('https://github.com/Shiihon/MockExam_Clinic.git', '_blank')}
                    >
                        Visit GitHub
                    </button>
                    <button 
                        className="home-button"
                        onClick={() => window.open('https://clinic.nerdnest.dk/api/doctors', '_blank')}
                    >
                        Access the API
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;

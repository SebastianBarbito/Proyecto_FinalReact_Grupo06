import '../style/AboutUs.css';
import logo from '../img/logo.png';

const team = [
    { name: 'Barbito Sebastian Rodrigo', github: 'https://github.com/SebastianBarbito' },
    { name: 'Campero Cruz Jonathan Emanuel', github: 'https://github.com/JonathanCampero001' },
    { name: 'Mamani Lezcano Lautaro Nicolás', github: 'https://github.com/lautaro25-Mamani' },
    { name: 'Martinez Sebastian Luciano', github: 'https://github.com/SebasMartinez07' },
    { name: 'Muñoz Romina Alejandra', github: 'https://github.com/MunozRominaAlejandra' }
];

function AboutUs() {
    return (
        <main className="about-container">
            <section className="about-hero">
                <img src={logo} alt="Logo Grupo 06" className="about-logo" />
                <h1>Grupo 06</h1>
                <p className="lead">Somos un equipo de estudiantes que trabajó en este proyecto final. Conoce a los integrantes y visita sus repositorios en GitHub.</p>
            </section>

            <section className="team-grid">
                {team.map((member) => (
                    <article className="team-card" key={member.github}>
                        <div className="avatar" aria-hidden="true">
                            {/* Avatar generado por iniciales */}
                            <span>{member.name.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()}</span>
                        </div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-role">Desarrollador</p>
                        <a className="github-link" href={member.github} target="_blank" rel="noopener noreferrer">
                            Ver GitHub
                        </a>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default AboutUs;
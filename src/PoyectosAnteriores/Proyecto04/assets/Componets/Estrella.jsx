import Star from '../img/Star.png';

export default function Estrella({x,y,onClick}) {
  return (
    <div>
        <img
        src={Star}
        alt="Estrella"
        className="estrella"
        style={{
          top: `${y}%`,
          left: `${x}%`,
        }}
        onClick={onClick}
        />
    </div>
  );
}
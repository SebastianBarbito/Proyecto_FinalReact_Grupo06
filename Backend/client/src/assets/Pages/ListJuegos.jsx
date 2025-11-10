import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Juego con Bootstrap - Tres modos: Imagen, Opciones y Verdadero/Falso
export default function ListJuegos() {
  const [gameMode, setGameMode] = useState('menu'); // menu, image, choice, truefalse
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  // TODO: Agregar tus preguntas de imágenes aquí
  const imageQuestions = [
    {
      id: 1,
      // TODO: Agregar ruta a tu imagen: '/ruta/imagen1.jpg'
      image: '',
      question: "What is this?",
      options: [
        // TODO: Llenar con tus opciones
        { id: 'a', text: '' },
        { id: 'b', text: '' },
        { id: 'c', text: '' },
        { id: 'd', text: '' }
      ],
      // TODO: Establecer la respuesta correcta (a, b, c, o d)
      correct: ''
    }
    // Puedes agregar más preguntas aquí
  ];

  // TODO: Agregar tus preguntas de verdadero/falso aquí
  const trueFalseQuestions = [
    {
      id: 1,
      // TODO: Agregar tu pregunta
      question: "",
      // TODO: Establecer si es verdadero o falso
      correct: true
    }
    // Puedes agregar más preguntas aquí
  ];

  function handleImageAnswer(questionId, answerId) {
    const question = imageQuestions.find(q => q.id === questionId);
    if (question?.correct === answerId) {
      setMessage(<span className="text-success">Correct!</span>);
      setScore(s => s + 1);
    } else {
      setMessage(<span className="text-danger">Try again!</span>);
    }
  }

  function handleTrueFalse(questionId, answer) {
    const question = trueFalseQuestions.find(q => q.id === questionId);
    if (question?.correct === answer) {
      setMessage(<span className="text-success">Correct!</span>);
      setScore(s => s + 1);
    } else {
      setMessage(<span className="text-danger">Try again!</span>);
    }
  }

  function renderMenu() {
    return (
      <div className="text-center p-4">
        <h2 className="mb-4">Choose Game Mode</h2>
        <div className="d-grid gap-3 col-md-6 mx-auto">
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => setGameMode('image')}
          >
            Guess the Image
          </button>
          <button 
            className="btn btn-success btn-lg"
            onClick={() => setGameMode('truefalse')}
          >
            True or False
          </button>
        </div>
      </div>
    );
  }

  function renderImageGame() {
    return (
      <div className="container py-4">
        <div className="card">
          <div className="card-body">
            {imageQuestions.map(q => (
              <div key={q.id} className="text-center mb-4">
                {/* TODO: Reemplazar con tu imagen */}
                <img 
                  src={q.image || 'placeholder.jpg'} 
                  alt="Question"
                  className="img-fluid mb-3"
                  style={{ maxHeight: '300px' }}
                />
                <h3 className="mb-3">{q.question}</h3>
                <div className="row g-3">
                  {q.options.map(opt => (
                    <div key={opt.id} className="col-6">
                      <button
                        className="btn btn-outline-primary w-100 py-3"
                        onClick={() => handleImageAnswer(q.id, opt.id)}
                      >
                        {opt.text}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function renderTrueFalse() {
    return (
      <div className="container py-4">
        <div className="card">
          <div className="card-body">
            {trueFalseQuestions.map(q => (
              <div key={q.id} className="text-center mb-4">
                <h3 className="mb-4">{q.question}</h3>
                <div className="d-grid gap-3 col-md-8 mx-auto">
                  <button
                    className="btn btn-success btn-lg"
                    onClick={() => handleTrueFalse(q.id, true)}
                  >
                    True
                  </button>
                  <button
                    className="btn btn-danger btn-lg"
                    onClick={() => handleTrueFalse(q.id, false)}
                  >
                    False
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-light py-4">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="display-4 mb-3">English Learning Games</h1>
          {gameMode !== 'menu' && (
            <div className="mb-3">
              <button
                className="btn btn-outline-secondary me-2"
                onClick={() => setGameMode('menu')}
              >
                ← Back to Menu
              </button>
              <span className="ms-3">Score: {score}</span>
            </div>
          )}
          {message && <div className="my-3">{message}</div>}
        </div>

        {gameMode === 'menu' && renderMenu()}
        {gameMode === 'image' && renderImageGame()}
        {gameMode === 'truefalse' && renderTrueFalse()}
      </div>
    </div>
  );
}

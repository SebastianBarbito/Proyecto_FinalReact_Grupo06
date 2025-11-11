import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Juego: Adivina la Imagen con 3 Niveles
export default function ListJuegos() {
  // Empezar directamente en el modo de imagen, subnivel 1
  const [gameMode, setGameMode] = useState('imageGame'); // imageGame
  const [imageSubMode, setImageSubMode] = useState('level1'); // level1, level2, level3
  const [showFinalPrompt, setShowFinalPrompt] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [answered, setAnswered] = useState(false);
  const [trueFalseSubMode, setTrueFalseSubMode] = useState('level1'); // level1, level2, level3
  
  const level1Questions = [
    {
      id: 1,
      image: './src/assets/Components/img/leon.webp',
      question: "What is this?",
      options: [
       
        { id: 'a', text: 'Dog', audio: './src/assets/Components/sounds/perro.mp3' },
        { id: 'b', text: 'Cat', audio: './src/assets/Components/sounds/gato.mp3' },
        { id: 'c', text: 'Lion', audio: './src/assets/Components/sounds/lion.mp3' },
        { id: 'd', text: 'Parrot', audio: './src/assets/Components/sounds/loro.mp3' }
      ],
     
      correct: 'c'
    }
  ];

  
  const level2Questions = [
    {
      id: 1,
     
      image: './src/assets/Components/img/caballo.avif',
     
      audio: './src/assets/Components/sounds/caballo.mp3',
      question: "What is this?",
      options: [
       
        { id: 'a', text: 'Horse' },
        { id: 'b', text: 'Fish' },
        { id: 'c', text: 'Zebra' },
        { id: 'd', text: 'Cow' }
      ],
  
      correct: 'a'
    },
  ];

  
  const level3Questions = [
    {
      id: 1,
      
      audio: './src/assets/Components/sounds/oveja.mp3',
      question: "What do you hear?",
      options: [
       
        { id: 'a', text: 'Mouse' },
        { id: 'b', text: 'Sheep' },
        { id: 'c', text: 'Seal' },
        { id: 'd', text: 'Shark' }
      ],
      correct: 'b'
    },
  ];

  const tfLevel1Questions = [
    { id: 1, statement: 'Bananas are yellow.', 
      correct: true },
  ];

  const tfLevel2Questions = [
    { id: 1, statement: 'Cats can fly.', 
      correct: false },
  ];

  const tfLevel3Questions = [
    { id: 1, statement: 'Water has no color.', correct: true },
  ];

  // Función para manejar respuestas
  function handleAnswer(questions, answerId) {
    const question = questions[currentQuestionIndex];
    if (question?.correct === answerId) {
      setMessage(<span className="text-success fw-bold">✓ ¡Correcto!</span>);
      setScore(s => s + 1);
    } else {
      setMessage(<span className="text-danger fw-bold">✗ Incorrecto. La respuesta es: {question?.correct.toUpperCase()}</span>);
    }
    setAnswered(true);

    // Si esta era la última pregunta del conjunto y estamos en el juego de imagen,
    // avanzar automáticamente al siguiente subnivel después de una pausa corta.
  const isLast = currentQuestionIndex === questions.length - 1;
  if (isLast && gameMode === 'imageGame') {
      // Mostrar mensaje breve antes de cambiar
      setTimeout(() => {
        if (imageSubMode === 'level1') {
          // pasar a nivel 2
          setImageSubMode('level2');
          setCurrentQuestionIndex(0);
          setMessage('');
          setAnswered(false);
        } else if (imageSubMode === 'level2') {
          // pasar a nivel 3
          setImageSubMode('level3');
          setCurrentQuestionIndex(0);
          setMessage('');
          setAnswered(false);
        } else if (imageSubMode === 'level3') {
          // fin de los 3 niveles: mostrar prompt final en español
          setShowFinalPrompt(true);
          setMessage(<span className="text-info">¡Has completado todos los niveles!</span>);
        }
      }, 1200);
    }
  }
  
    // Manejar respuestas para Verdadero/Falso
    function handleTrueFalse(answer) {
      const questions = trueFalseSubMode === 'level1' ? tfLevel1Questions : (trueFalseSubMode === 'level2' ? tfLevel2Questions : tfLevel3Questions);
      const question = questions[currentQuestionIndex];
      if (!question) return;
      if (question.correct === answer) {
        setMessage(<span className="text-success fw-bold">✓ ¡Correcto!</span>);
        setScore(s => s + 1);
      } else {
        setMessage(<span className="text-danger fw-bold">✗ Incorrecto.</span>);
      }
      setAnswered(true);

      const isLastTF = currentQuestionIndex === questions.length - 1;
      if (isLastTF && gameMode === 'truefalse') {
        setTimeout(() => {
          if (trueFalseSubMode === 'level1') {
            setTrueFalseSubMode('level2');
            setCurrentQuestionIndex(0);
            setMessage('');
            setAnswered(false);
          } else if (trueFalseSubMode === 'level2') {
            setTrueFalseSubMode('level3');
            setCurrentQuestionIndex(0);
            setMessage('');
            setAnswered(false);
          } else if (trueFalseSubMode === 'level3') {
            setShowFinalPrompt(true);
            setMessage(<span className="text-info">¡Has completado todos los niveles!</span>);
          }
        }, 1200);
      }
    }

  // Función para siguiente pregunta
  function nextQuestion(questions) {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setMessage("");
      setAnswered(false);
    } else {
      setMessage(<span className="text-info">¡Juego terminado! Puntuación: {score}</span>);
    }
  }

  // Función para volver al menú
  function backToMenu() {
  
    setGameMode('imageGame');
    setImageSubMode('level1');
    setCurrentQuestionIndex(0);
    setScore(0);
    setMessage("");
    setAnswered(false);
  }

 
  function renderLevel1() {
    const questions = level1Questions;
    if (questions.length === 0) {
      return <div className="text-center text-muted py-5"><p>No hay preguntas en este nivel aún</p></div>;
    }

    const question = questions[currentQuestionIndex];
    return (
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="text-center mb-4">
              <h5 className="text-muted">Nivel 1: Imagen + Opciones</h5>
              <p className="text-muted small">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
            </div>

            {/* TODO: AQUÍ VA LA IMAGEN */}
            <div className="text-center mb-4">
              <img 
                src={question.image || 'https://via.placeholder.com/300?text=Imagen'} 
                alt="Pregunta"
                className="img-fluid rounded"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </div>

            <h4 className="text-center mb-4">{question.question}</h4>

            {/* TODO: AQUÍ VAN LAS 4 OPCIONES (cada opción puede tener audio opcional) */}
            <div className="row g-3">
              {question.options.map(opt => (
                <div key={opt.id} className="col-md-6">
                  <div style={{display: 'flex', gap: 8}}>
                    <button
                      className={`btn flex-grow-1 py-3 fs-5 ${
                        answered 
                          ? opt.id === question.correct 
                            ? 'btn-success' 
                            : 'btn-outline-danger'
                          : 'btn-outline-primary'
                      }`}
                      onClick={() => !answered && handleAnswer(questions, opt.id)}
                      disabled={answered}
                    >
                      {opt.id.toUpperCase()}) {opt.text}
                    </button>
                    {/* Botón para reproducir audio de la opción (dejar vacío si no hay audio) */}
                    <button
                      className="btn btn-light border"
                      onClick={() => {
                        if (opt.audio) {
                          const a = new Audio(opt.audio);
                          a.play();
                        }
                      }}
                      title="Reproducir audio de la opción"
                      disabled={!opt.audio}
                    >
                      🔊
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {message && <div className="text-center mt-4 py-3 bg-light rounded">{message}</div>}

            {answered && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => nextQuestion(questions)}
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Siguiente →' : 'Terminar'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

 
  function renderLevel2() {
    const questions = level2Questions;
    if (questions.length === 0) {
      return <div className="text-center text-muted py-5"><p>No hay preguntas en este nivel aún</p></div>;
    }

    const question = questions[currentQuestionIndex];
    return (
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="text-center mb-4">
              <h5 className="text-muted">Nivel 2: Imagen + Audio + Opciones</h5>
              <p className="text-muted small">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
            </div>

            {/* TODO: AQUÍ VA LA IMAGEN */}
            <div className="text-center mb-4">
              <img 
                src={question.image || 'https://via.placeholder.com/300?text=Imagen'} 
                alt="Pregunta"
                className="img-fluid rounded"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </div>

            {/* TODO: AQUÍ VA EL AUDIO - Botón para reproducir */}
            <div className="text-center mb-4">
              <button className="btn btn-info btn-lg" onClick={() => {
                if (question.audio) {
                  const audio = new Audio(question.audio);
                  audio.play();
                }
              }}>
                🔊 Escuchar Audio
              </button>
            </div>

            <h4 className="text-center mb-4">{question.question}</h4>

            {/* TODO: AQUÍ VAN LAS 4 OPCIONES (si quieres, cada opción puede tener audio; el audio principal es el de la imagen) */}
            <div className="row g-3">
              {question.options.map(opt => (
                <div key={opt.id} className="col-md-6">
                  <button
                    className={`btn w-100 py-3 fs-5 ${
                      answered 
                        ? opt.id === question.correct 
                          ? 'btn-success' 
                          : 'btn-outline-danger'
                        : 'btn-outline-primary'
                    }`}
                    onClick={() => !answered && handleAnswer(questions, opt.id)}
                    disabled={answered}
                  >
                    {opt.id.toUpperCase()}) {opt.text}
                  </button>
                </div>
              ))}
            </div>

            {message && <div className="text-center mt-4 py-3 bg-light rounded">{message}</div>}

            {answered && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-success"
                  onClick={() => nextQuestion(questions)}
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Siguiente →' : 'Terminar'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

 
  function renderLevel3() {
    const questions = level3Questions;
    if (questions.length === 0) {
      return <div className="text-center text-muted py-5"><p>No hay preguntas en este nivel aún</p></div>;
    }

    const question = questions[currentQuestionIndex];
    return (
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="text-center mb-4">
              <h5 className="text-muted">Nivel 3: Solo Audio + Opciones</h5>
              <p className="text-muted small">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
            </div>

            {/* TODO: AQUÍ VA EL AUDIO - Botón para reproducir */}
            <div className="text-center mb-5">
              <button className="btn btn-warning btn-lg py-4 px-5" onClick={() => {
                if (question.audio) {
                  const audio = new Audio(question.audio);
                  audio.play();
                }
              }}>
                🔊 Escuchar Audio
              </button>
            </div>

            <h4 className="text-center mb-4">{question.question}</h4>

            {/* TODO: AQUÍ VAN LAS 4 OPCIONES (SOLO TEXTO) */}
            <div className="row g-3">
              {question.options.map(opt => (
                <div key={opt.id} className="col-md-6">
                  <button
                    className={`btn w-100 py-3 fs-5 ${
                      answered 
                        ? opt.id === question.correct 
                          ? 'btn-success' 
                          : 'btn-outline-danger'
                        : 'btn-outline-warning'
                    }`}
                    onClick={() => !answered && handleAnswer(questions, opt.id)}
                    disabled={answered}
                  >
                    {opt.id.toUpperCase()}) {opt.text}
                  </button>
                </div>
              ))}
            </div>

            {message && <div className="text-center mt-4 py-3 bg-light rounded">{message}</div>}

            {answered && (
              <div className="text-center mt-4">
                <button
                  className="btn btn-warning"
                  onClick={() => nextQuestion(questions)}
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Siguiente →' : 'Terminar'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Render para Verdadero / Falso (usa trueFalseSubMode)
  function renderTrueFalse() {
    const questions = trueFalseSubMode === 'level1' ? tfLevel1Questions : (trueFalseSubMode === 'level2' ? tfLevel2Questions : tfLevel3Questions);
    if (questions.length === 0) return <div className="text-center text-muted py-5"><p>No hay preguntas en este nivel aún</p></div>;
    const question = questions[currentQuestionIndex];
    return (
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="text-center mb-4">
              <h5 className="text-muted">Verdadero / Falso - {trueFalseSubMode}</h5>
              <p className="text-muted small">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
            </div>

            <h4 className="text-center mb-4">{question.statement}</h4>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-success btn-lg" onClick={() => !answered && handleTrueFalse(true)}>Sí</button>
              <button className="btn btn-danger btn-lg" onClick={() => !answered && handleTrueFalse(false)}>No</button>
            </div>

            {message && <div className="text-center mt-4 py-3 bg-light rounded">{message}</div>}

            {answered && (
              <div className="text-center mt-4">
                <button className="btn btn-primary" onClick={() => nextQuestion(questions)}>
                  {currentQuestionIndex < questions.length - 1 ? 'Siguiente →' : 'Terminar'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Prompt final en español: ¿Te gustó el juego? Sí / No
  function renderFinalPrompt() {
    if (!showFinalPrompt) return null;
    return (
      <div className="container py-4">
        <div className="card shadow-sm">
          <div className="card-body text-center">
            <h4>¿Te gustó el juego?</h4>
            <p className="text-muted">Pulsa Sí para jugar de nuevo o No para salir.</p>
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-success" onClick={() => {
                // Reiniciar todo y volver al nivel 1
                setShowFinalPrompt(false);
                setImageSubMode('level1');
                setCurrentQuestionIndex(0);
                setScore(0);
                setMessage('');
                setAnswered(false);
              }}>Sí</button>
              <button className="btn btn-danger" onClick={() => {
                // Usuario no quiere jugar más: mostrar agradecimiento y reiniciar UI
                setShowFinalPrompt(false);
                setMessage(<span className="text-muted">Gracias por jugar.</span>);
              }}>No</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // (True/False eliminado; esta página muestra sólo los 3 subniveles de imagen)

  return (
    <div className="min-vh-100 bg-light py-4">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="display-4 mb-2">{gameMode === 'imageGame' ? '🎓 Adivina la Imagen' : '✅ Verdadero / Falso'}</h1>
          <div className="mb-3">
            <button className="btn btn-outline-secondary me-2" onClick={backToMenu}>↺ Reiniciar</button>
            <button className="btn btn-outline-primary me-2" onClick={() => {
              setGameMode('truefalse');
              setTrueFalseSubMode('level1');
              setCurrentQuestionIndex(0);
              setScore(0);
              setMessage('');
              setAnswered(false);
            }}>→ Verdadero / Falso</button>
            <button className="btn btn-outline-success me-2" onClick={() => {
              setGameMode('imageGame');
              setImageSubMode('level1');
              setCurrentQuestionIndex(0);
              setScore(0);
              setMessage('');
              setAnswered(false);
            }}>→ Adivina la Imagen</button>
            <span className="badge bg-primary ms-2" style={{fontSize: '1.1rem'}}>Puntuación: {score}</span>
          </div>
        </div>

        {/* Mostrar el modo seleccionado */}
        {gameMode === 'imageGame' && (
          <>
            {imageSubMode === 'level1' && renderLevel1()}
            {imageSubMode === 'level2' && renderLevel2()}
            {imageSubMode === 'level3' && renderLevel3()}
            {renderFinalPrompt()}
          </>
        )}

        {gameMode === 'truefalse' && (
          <>
            {renderTrueFalse()}
            {renderFinalPrompt()}
          </>
        )}
      </div>
    </div>
  );
}

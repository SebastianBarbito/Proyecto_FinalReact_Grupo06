# 📚 Guía: Cómo llenar "Adivina la Imagen" - 3 Niveles

## 📍 Ubicación del archivo
`Backend/client/src/Components/ListJuegos.jsx`

---

## 🎮 ESTRUCTURA DE LOS 3 NIVELES

### **NIVEL 1: Imagen + 4 Opciones de Texto**
**Lineas:** ~23-43

```javascript
const level1Questions = [
  {
    id: 1,
    // TODO: AQUÍ PONER LA RUTA DE TU IMAGEN
    image: '', // ← LLENAR CON: '/images/apple.jpg' o 'https://...'
    question: "What is this?",
    options: [
      // TODO: LLENAR CON TUS 4 OPCIONES DE TEXTO
      { id: 'a', text: 'Option A' },  // ← Reemplaza 'Option A' con tu respuesta
      { id: 'b', text: 'Option B' },  // ← Reemplaza 'Option B' con tu respuesta
      { id: 'c', text: 'Option C' },  // ← Reemplaza 'Option C' con tu respuesta
      { id: 'd', text: 'Option D' }   // ← Reemplaza 'Option D' con tu respuesta
    ],
    // TODO: ESTABLECER CUÁL ES LA CORRECTA: 'a', 'b', 'c' o 'd'
    correct: 'a' // ← CAMBIAR A LA RESPUESTA CORRECTA
  },
];
```

**Paso a paso:**
1. **Imagen:** `image: '/images/apple.jpg'` (pon la ruta de tu imagen)
2. **Pregunta:** `question: "What is this?"` (pon tu pregunta)
3. **Opciones:** Reemplaza los textos de ejemplo (Option A, B, C, D)
4. **Respuesta correcta:** `correct: 'a'` (pon a, b, c o d según cuál sea la correcta)

**Ejemplo completado:**
```javascript
{
  id: 1,
  image: '/images/apple.jpg',
  question: "What fruit is this?",
  options: [
    { id: 'a', text: 'Apple' },
    { id: 'b', text: 'Orange' },
    { id: 'c', text: 'Banana' },
    { id: 'd', text: 'Grape' }
  ],
  correct: 'a' // La respuesta correcta es 'Apple' (opción a)
}
```

---

### **NIVEL 2: Imagen + Audio + 4 Opciones de Texto**
**Lineas:** ~48-76

```javascript
const level2Questions = [
  {
    id: 1,
    // TODO: AQUÍ PONER LA RUTA DE TU IMAGEN
    image: '', // ← LLENAR CON: '/images/cat.jpg' o 'https://...'
    // TODO: AQUÍ PONER LA RUTA DE TU AUDIO
    audio: '', // ← LLENAR CON: '/audio/cat-meow.mp3' o 'https://...'
    question: "What is this?",
    options: [
      // TODO: LLENAR CON TUS 4 OPCIONES DE TEXTO
      { id: 'a', text: 'Option A' },  // ← Reemplaza con tu respuesta
      { id: 'b', text: 'Option B' },  // ← Reemplaza con tu respuesta
      { id: 'c', text: 'Option C' },  // ← Reemplaza con tu respuesta
      { id: 'd', text: 'Option D' }   // ← Reemplaza con tu respuesta
    ],
    // TODO: ESTABLECER CUÁL ES LA CORRECTA: 'a', 'b', 'c' o 'd'
    correct: 'a' // ← CAMBIAR A LA RESPUESTA CORRECTA
  },
];
```

**Paso a paso:**
1. **Imagen:** `image: '/images/cat.jpg'` (pon la ruta de tu imagen)
2. **Audio:** `audio: '/audio/cat-meow.mp3'` (pon la ruta de tu audio - se reproduce al presionar el botón 🔊)
3. **Pregunta:** `question: "What animal is this?"`
4. **Opciones:** Reemplaza Option A, B, C, D con tus opciones
5. **Respuesta correcta:** `correct: 'b'` (si la respuesta correcta es la opción B)

**Ejemplo completado:**
```javascript
{
  id: 1,
  image: '/images/cat.jpg',
  audio: '/audio/cat-meow.mp3',
  question: "What animal is this?",
  options: [
    { id: 'a', text: 'Dog' },
    { id: 'b', text: 'Cat' },
    { id: 'c', text: 'Bird' },
    { id: 'd', text: 'Fish' }
  ],
  correct: 'b' // La respuesta correcta es 'Cat' (opción b)
}
```

---

### **NIVEL 3: Solo Audio + 4 Opciones de Texto**
**Lineas:** ~81-109

```javascript
const level3Questions = [
  {
    id: 1,
    // TODO: AQUÍ PONER LA RUTA DE TU AUDIO
    audio: '', // ← LLENAR CON: '/audio/dog-bark.mp3' o 'https://...'
    question: "What do you hear?",
    options: [
      // TODO: LLENAR CON TUS 4 OPCIONES DE TEXTO
      { id: 'a', text: 'Option A' },  // ← Reemplaza con tu respuesta
      { id: 'b', text: 'Option B' },  // ← Reemplaza con tu respuesta
      { id: 'c', text: 'Option C' },  // ← Reemplaza con tu respuesta
      { id: 'd', text: 'Option D' }   // ← Reemplaza con tu respuesta
    ],
    // TODO: ESTABLECER CUÁL ES LA CORRECTA: 'a', 'b', 'c' o 'd'
    correct: 'a' // ← CAMBIAR A LA RESPUESTA CORRECTA
  },
];
```

**Paso a paso:**
1. **Audio:** `audio: '/audio/dog-bark.mp3'` (pon la ruta de tu audio - se reproduce al presionar el botón 🔊)
2. **Pregunta:** `question: "What sound is this?"` o similar
3. **Opciones:** Reemplaza Option A, B, C, D con tus opciones
4. **Respuesta correcta:** `correct: 'c'` (si la respuesta correcta es la opción C)

**Ejemplo completado:**
```javascript
{
  id: 1,
  audio: '/audio/dog-bark.mp3',
  question: "What animal sound is this?",
  options: [
    { id: 'a', text: 'Cat meow' },
    { id: 'b', text: 'Bird chirp' },
    { id: 'c', text: 'Dog bark' },
    { id: 'd', text: 'Cow moo' }
  ],
  correct: 'c' // La respuesta correcta es 'Dog bark' (opción c)
}
```

---

## 🎯 Cómo agregar más preguntas

Para cada nivel, puedes copiar toda la estructura de una pregunta y pegarla nuevamente:

```javascript
const level1Questions = [
  {
    id: 1,
    image: '/images/apple.jpg',
    question: "What is this?",
    options: [
      { id: 'a', text: 'Apple' },
      { id: 'b', text: 'Orange' },
      { id: 'c', text: 'Banana' },
      { id: 'd', text: 'Grape' }
    ],
    correct: 'a'
  },
  // ← COPIA DESDE AQUÍ
  {
    id: 2,  // ← CAMBIA ID A 2, 3, 4... etc
    image: '/images/orange.jpg',
    question: "What fruit is this?",
    options: [
      { id: 'a', text: 'Apple' },
      { id: 'b', text: 'Orange' },
      { id: 'c', text: 'Banana' },
      { id: 'd', text: 'Grape' }
    ],
    correct: 'b'
  },
  // HASTA AQUÍ
];
```

---

## 📁 Estructura de carpetas recomendada

```
Backend/client/public/
├── images/
│   ├── apple.jpg
│   ├── cat.jpg
│   ├── dog.jpg
│   └── ...
└── audio/
    ├── cat-meow.mp3
    ├── dog-bark.mp3
    └── ...
```

Luego referencia así:
- Imágenes: `/images/apple.jpg`
- Audios: `/audio/cat-meow.mp3`

---

## ✅ Checklist antes de jugar

- [ ] Nivel 1: Mínimo 1 pregunta con imagen y 4 opciones
- [ ] Nivel 2: Mínimo 1 pregunta con imagen + audio + 4 opciones
- [ ] Nivel 3: Mínimo 1 pregunta con audio + 4 opciones
- [ ] Todas las rutas de imágenes y audios son correctas
- [ ] Cada pregunta tiene establecida la respuesta correcta (a, b, c o d)
- [ ] Has probado hacer clic en los botones y que funcionen

---

## 🎮 Cómo jugar

1. Ingresa a "Juegos" en la app
2. Presiona "📸 Nivel 1: Imagen + Opciones"
3. Observa la imagen y elige la opción correcta
4. Verás si es correcto (✓) o incorrecto (✗)
5. Presiona "Siguiente →" para la siguiente pregunta
6. Al terminar todas las preguntas, verás tu puntuación

---

## 🐛 Troubleshooting

**Problema:** La imagen/audio no carga
- **Solución:** Verifica la ruta. Debe estar en la carpeta `public/` y la ruta debe ser `/images/...` o `/audio/...`

**Problema:** El audio no se reproduce
- **Solución:** 
  - Verifica que el archivo exista
  - Asegúrate de que el archivo sea .mp3 o .wav
  - Intenta con una URL de audio de prueba (ej: https://...)

**Problema:** Las opciones no cambian de color
- **Solución:** Presiona uno de los botones para seleccionar una respuesta. Los botones cambian de color después de responder.

---

## 📞 Preguntas frecuentes

**P:** ¿Cuántas preguntas mínimo debo agregar?
**R:** Mínimo 1 por nivel, pero se recomienda 5-10 preguntas por nivel para una buena experiencia.

**P:** ¿Puedo usar audios de YouTube o Internet?
**R:** Sí, puedes usar cualquier URL completa (https://...) en lugar de rutas locales.

**P:** ¿Cómo cambio la puntuación?
**R:** La puntuación se incrementa automáticamente con cada respuesta correcta. No es necesario cambiarla.

---

¡Diviértete llenando el juego! 🎮✨

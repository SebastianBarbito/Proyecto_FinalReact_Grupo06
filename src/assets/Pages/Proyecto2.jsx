export default function Proyecto2() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      padding: "20px",
      minHeight: "95vh",
      backgroundColor: "#f5f5f5"
    }}>
      <h2 style={{ 
        fontSize: "2.8rem", 
        marginBottom: "30px",
        color: "#2c3e50",
        textShadow: "2px 2px 4px rgba(0,0,0,0.1)"
      }}>
        Proyecto 2: Simulador y Ejercicios
      </h2>
      
      {/* Mostramos el menú principal del Proyecto 2 */}
      <div style={{
        width: "98%",
        maxWidth: "1600px",
        height: "85vh",
        padding: "25px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease"
      }}>
        <iframe
          src="/src/PoyectosAnteriores/Proyecto_01/Menu.html"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "12px"
          }}
          title="Proyecto 2 - Menú Principal"
        />
      </div>
    </div>
  );
}

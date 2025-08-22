export default function MenuItem({ name, price, description, image }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      padding: "16px", 
      margin: "10px", 
      maxWidth: "200px" 
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: "100%", borderRadius: "8px" }} 
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>
    </div>
  );
}

/* ProductCard.jsx
   Displays a single product’s image, name, price, and description.
   Props:
   - name (string)
   - image (string URL)
   - price (string|number)
   - description (string)
*/

export default function ProductCard({ name, image, price, description }) {
    return (
        <article className="card">
            <img 
            className="product-image"
            src={image}
            alt={name}
            loading="lazy"
        />
        <div className="card-body">
            <h3 className="product-name">{name}</h3>
            <p className="product-price">${price}</p>
            <p className="product-description">{description}</p>
        </div>
        </article>
    )
}

const ProductCard = ({product}) => {
    const {id , title , price , description , category , image, rating} = product
    return (
        <div className="card bg-base-300 shadow-xl">
  <figure>
    <img
    className="h-72 rounded-2xl p-2 w-full"
      src={image}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
     <span className="">Price: ${price}</span>
     <p className="">Category: {category}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;
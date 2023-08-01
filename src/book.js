const Book = (props) => {
  const { author, img, title, number } = props;
  return (
    <article className='book'>
      <img src={img} alt='American Prometheus' />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className='number'>{number}</span>
    </article>
  );
};
export default Book;

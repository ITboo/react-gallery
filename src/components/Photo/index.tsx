import './style.css'
const Photo = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} />;
};

export default Photo;

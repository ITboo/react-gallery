import Photo from "../Photo";
import './style.css'

const List = (props) => {
  const { photos } = props;
  return (
    <div className="list">
      {photos.map((photo) => (
        <Photo src={photo.image} alt={photo.name} key={photo.id}/>
      ))}
    </div>
  );
};

export default List;

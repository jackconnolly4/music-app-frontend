export function AlbumsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log(props);
  return (
    <div id="albums-show">
      <h1> Album Info</h1>
      <img src={props.album.image_url} alt="" />
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.album.title} name="title" type="text" />
        </div>
        <div>
          Artist: <input defaultValue={props.album.artist} name="artist" type="text" />
        </div>
        <div>
          Image_url: <input defaultValue={props.album.image_url} name="image_url" type="text" />
        </div>
        <div>
          Year Realeased: <input defaultValue={props.album.year} name="year" type="text" />
        </div>
        <div>
          Genre: <input defaultValue={props.album.genre} name="genre" type="text" />
        </div>
        <button type="submit">Add Album to Collection</button>
      </form>
    </div>
  );
}

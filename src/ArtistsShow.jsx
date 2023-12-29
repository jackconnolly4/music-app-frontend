export function ArtistsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateArtist(props.artist.id, params);
    event.target.reset();
  };

  console.log(props);
  return (
    <div id="artists-show">
      <h1> Artist Info</h1>
      <img src={props.artist.image_url} alt="" />
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.artist.name} name="name" type="text" />
        </div>
        <div>
          Bio: <input defaultValue={props.artist.bio} name="bio" type="text" />
        </div>
        <div>
          Genre: <input defaultValue={props.artist.genre} name="genre" type="text" />
        </div>
        <div>
          Image_url: <input defaultValue={props.artist.image_url} name="image_url" type="text" />
        </div>
        <button type="submit">Update artist</button>
      </form>
    </div>
  );
}

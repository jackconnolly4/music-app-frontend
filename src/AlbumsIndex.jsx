export function AlbumsIndex(props) {
  return (
    <div>
      <h1>All Albums</h1>
      {props.albums.map((album) => (
        <div key={album.id}>
          <h2>{album.title}</h2>
          <img src={album.image_url} />
          <h4>Genre: {album.genre}</h4>
          <p>{album.description}</p>
          <h4> Year released: {album.year}</h4>
        </div>
      ))}
    </div>
  );
}

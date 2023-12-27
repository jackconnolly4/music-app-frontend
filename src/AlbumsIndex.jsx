export function AlbumsIndex(props) {
  return (
    <div>
      <h1>All Albums</h1>
      {props.albums.map((album) => (
        <div key={album.id}>
          <h2>{album.title}</h2>
          <img src={album.image_url} />
          <h3>{album.year}</h3>
          <h3>{album.genre}</h3>
        </div>
      ))}
    </div>
  );
}

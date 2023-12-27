export function ArtistsIndex(props) {
  return (
    <div>
      <h1>All Artists</h1>
      {props.artists.map((artist) => (
        <div key={artist.id}>
          <h2>{artist.title}</h2>
          <img src={artist.image_url} />
          <h3>{artist.bio}</h3>
          <h3>{artist.genre}</h3>
        </div>
      ))}
    </div>
  );
}

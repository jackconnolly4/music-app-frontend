export function FavoriteArtists(props) {
  return (
    <div>
      <h1>Your Favorite Artists</h1>
      {props.favorites.map((favorite) => (
        <div key={favorite.id}>
          <h2>{favorite.artist.name}</h2>
          <img src={favorite.artist.image_url} />
          <h3>{favorite.artist.genre}</h3>
        </div>
      ))}
    </div>
  );
}

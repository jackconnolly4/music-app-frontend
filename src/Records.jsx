export function Records(props) {
  return (
    <div>
      <h1>Your Collected Albums</h1>
      {props.records.map((record) => (
        <div key={record.id}>
          <h2>{record.album.title}</h2>
          <h3> By {record.album.artist.name}</h3>
          <img src={record.album.image_url} />
          <h3>{record.album.genre}</h3>
          <h3>{record.album.year}</h3>
        </div>
      ))}
    </div>
  );
}

import "./AlbumCard.css";

export default function AlbumCard(props) {
  const coverAlt = props.albumData.artworkUrl.split("/").pop();
  return (
    <div className='album-card'>
      <div
        className='delete-button'
        onClick={() => props.onDelete(props.albumData.id)}
      >
        X
      </div>
      <div className='album-content'>
        <img
          className='album-cover'
          src={props.albumData.artworkUrl}
          alt={coverAlt}
        />
        <span className='album-title'>{props.albumData.title}</span>
        <span className='album-artist'>{props.albumData.artist}</span>
      </div>
    </div>
  );
}

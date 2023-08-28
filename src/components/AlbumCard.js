import "./AlbumCard.css";

export default function AlbumCard(props) {
  const coverAlt = props.artworkUrl.split("/").pop();
  return (
    <div className='album-card'>
      <img className='album-cover' src={props.artworkUrl} alt={coverAlt} />
      <span className='album-title'>{props.title}</span>
      <span className='album-artist'>{props.artist}</span>
    </div>
  );
}

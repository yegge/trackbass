import { config } from '../alinea.config';
import { createCMS } from 'alinea';
import { useState } from 'react';
import { CldImage } from 'next-cloudinary'; // For optimized image display

const cms = createCMS(config);

export async function getStaticProps() {
  try {
    const albums = await cms.find(Albums).where(Albums.visibility.is('Public')).select({
      ...Albums.fields,
      tracks: cms.find(Tracks).where(Tracks.parent.is(Albums.id)), // Assuming hierarchical links
    });
    return { props: { albums }, revalidate: 60 };
  } catch (error) {
    console.error('Alinea error:', error);
    return { props: { albums: [] } };
  }
}

export default function Catalog({ albums }) {
  const [expanded, setExpanded] = useState(null);
  const romanize = (num: string) => { /* Your Roman converter */ };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Yegge Music Catalog</h1>
      {albums.map((album: any) => (
        <div key={album.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
          <h2>{album.albumName} ({album.albumType})</h2>
          <p>Catalog No.: {romanize(album.catalogNo)}</p>
          {/* Display front cover (first URL) with Cloudinary optimization */}
          {album.artworkGallery?.[0] && (
            <CldImage
              src={album.artworkGallery[0].replace('https://res.cloudinary.com/your-cloud-name/image/upload/', '')} // Strip base URL if needed
              width={200}
              height={200}
              alt="Album Art"
              crop="fill"
              gravity="auto"
            />
          )}
          <p>Stream: {album.streamingLinks?.map((link: string) => <a key={link} href={link}>Link</a>)}</p>
          <p>Buy: <a href={album.purchase}>Purchase</a></p>
          <button onClick={() => setExpanded(expanded === album.id ? null : album.id)}>Toggle Tracks</button>
          {expanded === album.id && (
            <ul>
              {album.tracks?.map((track: any) => (
                <li key={track.id}>
                  {track.trackNo}. {track.trackName} ({track.trackDuration})
                  {/* Third-party links */}
                  {track.stream && <a href={track.stream}>Stream</a>}
                  {track.purchaseDigitalDownload && <a href={track.purchaseDigitalDownload}>Buy</a>}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
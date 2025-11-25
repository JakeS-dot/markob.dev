import React, { useEffect, useState } from 'react';

type Track = {
  artist: { '#text': string };
  name: string;
  album?: { '#text': string };
  image?: { size: string; '#text': string }[];
  '@attr'?: { nowplaying?: string };
  url: string;
};

type RecentTracksResponse = {
  recenttracks: {
    track: Track[];
  };
};

const LASTFM_API_KEY = '83b84c7aadd7f1e5b3b40d617a2f7e47';
const USERNAME = 'markobiscool';

export const NowPlaying: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
        const data = (await resp.json()) as RecentTracksResponse;

        const tracks = data.recenttracks.track;
        if (tracks.length === 0) {
          setCurrentTrack(null);
        } else {
          const track = tracks[0];
          setCurrentTrack(track);
        }
      } catch (err: any) {
        console.error('Error fetching Last.fm data', err);
        setError(err.message);
      }
    };

    fetchNowPlaying();
    // Optionally, poll every X seconds
    const interval = setInterval(fetchNowPlaying, 30_000); // every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!currentTrack) {
    return <div>Not listening to anything right now.</div>;
  }


  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      {currentTrack.image && (
        <img
          src={currentTrack.image.find(img => img.size === 'medium')?.['#text']}
          alt="Album art"
          style={{ width: 64, height: 64, marginTop: -50 }}
        />
      )}
      <div>
        <div>
          <marquee>
            <a
              href={currentTrack.url}  // Link to Last.fm track
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {currentTrack.name}
            </a>
          </marquee>
        </div>
        {currentTrack.album && (
          <div style={{ fontSize: '0.9em', color: '#666' }}>
            {currentTrack.album['#text']}
          </div>
        )}
        <div>
          <marquee>
            <a
              href={currentTrack.url} // Also link artist/track together
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              {currentTrack.artist['#text']} • {currentTrack.artist['#text']}
            </a>
          </marquee>
        </div>
      </div>
    </div>

  );
};


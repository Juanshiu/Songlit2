export default interface Song {
    id: number;
    attributes: {
        title: string;
        artist: string;
        date: string;
        about: string;
        lyrics: string;
        credits: string;
        slug: string;
        genres: string[];
        card: {
            data: {
                attributes: {
                    url: string;
                }
            }
        }
    }
  }
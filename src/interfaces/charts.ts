export default interface Chart {
    id: number;
    attributes: {
        title: string;
        artist: {
            data: {
                attributes: {
                    name: string;
                }
            }
        };
        slug: string;
        genres: string[];
        imgalbum: {
            data: {
                attributes: {
                    url: string;
                }
            }
        }
    }
  }
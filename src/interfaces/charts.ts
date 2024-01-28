export default interface Charts {
    id: number;
    attributes: {
        title: string;
        artist: string;
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
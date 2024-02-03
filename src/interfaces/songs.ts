export default interface Song {
    id: number;
    attributes: {
        title: string;
        artists: {
            data: [
                {attributes: {
                    name: string;
                }}
            ]
        };
        date: string;
        about: string;
        lyrics3: string;
        credits: string;
        slug: string;
        genres: string[];
        card: {
            data: {
                attributes: {
                    url: string;
                }
            }
        };
    };
}
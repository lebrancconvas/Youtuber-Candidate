interface ThumbnailData {
	url: string;
	width: number;
	height: number;
}

interface Thumbnail {
	medium: ThumbnailData;
}

interface Snippet {
	title: string;
	description: string;
	thumbnails: Thumbnail;
}
export interface YoutuberData {
	id: string;
	snippet: Snippet;
}
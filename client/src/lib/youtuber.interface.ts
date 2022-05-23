interface ThumbnailData {
	url: string;
	width: number;
	height: number;
}

interface Thumbnail {
	medium: ThumbnailData;
}

interface Statistic {
	viewCount: string,
	subscriberCount: string,
	hiddenSubscriberCount: boolean,
	videoCount: string 
}

interface Snippet {
	title: string;
	description: string;
	thumbnails: Thumbnail;
} 
export interface YoutuberData {
	id: string;
	snippet: Snippet;
	statistics: Statistic; 
} 
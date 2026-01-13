export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export type Notification = {
	id: string;
	message: string;
	type: NotificationType;
	timeout: number;
	elapsedTime: number;
	interval: unknown;
};

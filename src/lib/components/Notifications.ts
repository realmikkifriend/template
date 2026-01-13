/* eslint-disable functional/no-return-void */
import { createContext } from 'svelte';
import type { Notification } from '$lib/types/notifications';

/**
 * Generates a random ID for notifications.
 * @returns Random string ID.
 */
export function generateNotificationId(): string {
	return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export const [getNotificationsContext, setNotificationsContext] = createContext<{
	notifications: Notification[];
	addNotification: (notification: Omit<Notification, 'id' | 'elapsedTime' | 'interval'>) => void;
	removeNotification: (id: string) => void;
}>();

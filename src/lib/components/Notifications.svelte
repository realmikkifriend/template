<script lang="ts">
	import { setNotificationsContext, generateNotificationId } from './Notifications.ts';
	import type { Notification } from '$lib/types/notifications';
	import { type Snippet } from 'svelte';

	let notifications: Notification[] = $state([]);

	setNotificationsContext({
		get notifications() {
			return notifications;
		},
		addNotification,
		removeNotification
	});

	let { children }: { children?: Snippet } = $props();

	/**
	 * Creates a new notification.
	 * @param notification Object containing notification properties (without id).
	 */
	function addNotification(notification: Omit<Notification, 'id' | 'elapsedTime' | 'interval'>) {
		const id = generateNotificationId();
		const interval = setInterval(() => {
			notifications = notifications.map((n) => {
				if (n.id === id) {
					return {
						...n,
						elapsedTime: n.elapsedTime + 50
					};
				}
				return n;
			});
			const currentNotification = notifications.find((n) => n.id === id);
			if (currentNotification && currentNotification.elapsedTime >= notification.timeout) {
				clearInterval(interval);
			}
		}, 50);

		const fullNotification = {
			...notification,
			id,
			elapsedTime: 0,
			interval
		};
		notifications = [...notifications, fullNotification];

		setTimeout(() => {
			removeNotification(id);
		}, notification.timeout);
	}

	/**
	 * Removes an expired notification.
	 * @param id The notification to be removed.
	 */
	function removeNotification(id: string) {
		const notificationToRemove = notifications.find((n) => n.id === id);
		if (notificationToRemove) {
			clearInterval(notificationToRemove.interval as number);
		}
		notifications = notifications.filter((n) => n.id !== id);
	}

	$effect(() => {
		return () => {
			notifications.forEach((notification) => {
				clearInterval(notification.interval as number);
			});
		};
	});
</script>

<div class="notifications-container">
	{#each notifications as notification (notification.id)}
		<div
			class="alert alert-{notification.type}"
			class:alert-error={notification.type === 'error'}
			class:alert-info={notification.type === 'info'}
			class:alert-success={notification.type === 'success'}
			class:alert-warning={notification.type === 'warning'}
			role="alert"
		>
			<span
				class="iconify octicon--info-16"
				class:octicon--alert-16!={notification.type === 'warning'}
				class:octicon--check-circle-16!={notification.type === 'success'}
				class:octicon--x-circle-16!={notification.type === 'error'}
			></span>
			<span>{notification.message}</span>
			<progress class="progress" max={notification.timeout} value={notification.elapsedTime || 0}
			></progress>
		</div>
	{/each}
</div>

{#if children}
	{@render children()}
{/if}

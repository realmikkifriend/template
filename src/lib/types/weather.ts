export type WeatherData = {
	nearest_area: Array<{
		areaName: Array<{
			value: string;
		}>;
		region: Array<{
			value: string;
		}>;
	}>;
	current_condition: Array<{
		weatherDesc: Array<{
			value: string;
		}>;
		temp_F: number;
		temp_C: number;
		FeelsLikeF: number;
		FeelsLikeC: number;
		humidity: number;
		windspeedMiles: number;
		windspeedKmph: number;
	}>;
};

export type WeatherResult = {
	data?: WeatherData;
	error?: {
		status: number;
		message: string;
	};
};

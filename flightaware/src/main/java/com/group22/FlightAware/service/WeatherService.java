package com.group22.FlightAware.service;

import com.group22.FlightAware.dto.WeatherDto;

import java.util.List;

public interface WeatherService {
    Long createWeather(WeatherDto weatherDto);

    List<WeatherDto> getAllWeather();

    WeatherDto getWeatherById(Long id);

    void updateWeather(WeatherDto weather);

    void deleteWeatherById(Long id);

    List<?> olapOperation();
}

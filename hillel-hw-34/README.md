За допомогою ajax-запиту вивести погоду

Request URL: http://api.openweathermap.org/data/2.5/weather?q=LVIV&ç=metric&APPID=5d066958a60d315387d9492393935c19

1. q=XXX - місто, для якого показати погоду
2. units=metric - ми хочемо отримати градуси Цельсія, метри на секунду, а не Фаренгейта та фути
3. APPID=5d066958a60d315387d9492393935c19 - треба використовувати цей ключ, щоб отримати відповідь

- Потрібно вивести наступні дані:

temp – температура
pressure - тиск
description – опис
humidity – вологість
speed – швидкість вітру
deg - напрям у градусах
icon - це назва файлу з іконкою, яка символізує поточну погоду

Шлях до файлу з іконкою формується наступним чином:
const imgUrl = `http://openweathermap.org/img/w/${icon}.png`

Документація по API:
https://openweathermap.org/current

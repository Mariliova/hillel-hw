
const userYearOfBirth = prompt("У якому році ви народилися?", "1998");
const userCity = prompt("У якому місті ви живете?", "Полтава");
const userFavSport = prompt("Який ваш улюблений вид спорту?", "плавання");

let user = {};

switch (userYearOfBirth) {
    case null:
        user.age = 'Шкода, що Ви не захотіли ввести свій рік народження.';
        break;
    default:
        const CURRENT_YEAR = 2022;
        const userAge = CURRENT_YEAR - Number(userYearOfBirth);
        user.age = `Вам ${userAge}.`;
}

switch (userCity) {
    case null:
        user.city = 'Шкода, що Ви не захотіли ввести свіє місто.';
        break;
    case 'Київ':
        user.city = 'Ви живете у столиці України.';
        break;
    case 'Вашингтон':
        user.city = 'Ви живете у столиці Сполучених Штатів Америки.';
        break;
    case 'Лондон':
        user.city = 'Ви живете у столиці Великої Британії.';
        break;
    default:
        user.city = `Ви живете у місті ${userCity}.`;
}

switch (userFavSport) {
    case null:
        user.sport = 'Шкода, що Ви не захотіли ввести свій улюблеий спорт.';
        break;
    case 'футбол':
        user.sport = 'Круто! Хочеш стати як Андрій Шевченко?';
        break;
    case 'настільний теніс':
        user.sport = 'Круто! Хочеш стати як Євген Прищепа?';
        break;
    case 'гімнастика':
        user.sport = 'Круто! Хочеш стати як Яна Клочкова?';
        break;
    default:
        user.sport = `Ваш улюблений спорт - це ${userFavSport}.`;
}

alert(`${user.age} ${user.city} ${user.sport}`);

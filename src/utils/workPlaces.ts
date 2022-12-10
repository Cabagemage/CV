import type { CardData } from "../ui/Card/Card.typedef";
import spiksPath from "../static/spiks.png";
import yaPraktikum from "../static/praktikum.jpg";
import rootFront from "../static/rootFront.jpg";
import noImage from "../static/noImage.jpg";

export const workPlaces: Array<CardData> = [
  {
    headerText: "Июль 2021 - Настоящее время",
    title: "SPIKS (Фронтенд-разработчик)",
    imageSrc: spiksPath,
    description: `Участвовал в разработке  ЦРМ системы, личных кабинетов, административных панелей и некоторых публичных проектов.
        Основной стак - Next/React/TypeScript. Проводил код ревью, следил за качеством кода, участвовал в интеграции некоторых нововведений (например, внедрил использование
            шаблонизатора).`,
  },
  {
    headerText: "Май - Август 2021",
    title: "Я.Практикум (Код-ревьюер)",
    imageSrc: yaPraktikum,
    description: `Проверка работ студентов на соответствие чек-листам.`,
  },
  {
    headerText: "Апрель - Июль 2021",
    title: "Фриланс",
    imageSrc: noImage,
    description: `Участвовал в работе над различными проектами. Среди которых были форум компьютерной игры hytale и что-то типа ЦРМ для управления корпоративными подписками. 
        По инструментам - React/Next/TypeScript`,
  },
  {
    headerText: "Март - Апрель 2021",
    title: ":Rootfront",
    imageSrc: rootFront,
    description: `Принимал участие в разработке http://fresh.to78.ru/ сайта в качестве фронтенд-разработчика. Проект был написан на шаблонизаторе PUG и чистом JS`,
  },
  {
    headerText: "Сентябрь 2018 - Август 2020",
    title: "Школа (учитель истории и обществознания)",
    imageSrc: noImage,
    description: `Проводил занятия по истории и обществознанию.`,
  },
];

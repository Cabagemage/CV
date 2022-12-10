import "./Achievements.css";
import { SideBarBlockTitle } from "../../ui";

export const Achievements = () => {
  return (
    <div className="flex flex-col gap-4">
      <SideBarBlockTitle text="<Мои достижения />" />
      <ul className="flex flex-col gap-4">
        <li>
          <p className="flex flex-col text-white">
            Убедил отказаться от чрезмерного количества абстракций в проекте,
            из-за того, что они увеличивали порог входа для новых разработчиков.
          </p>
        </li>
        <hr className="w-[100%] h-[5px] text-white" />
        <li>
          <p className="flex flex-col text-white">
            Внедрил использование hygen - шаблонизатора, позволяющего ускорить
            некоторые рутинные операции.
          </p>
        </li>
        <hr className="w-[100%] h-[5px] text-white" />
        <li>
          <p className="flex flex-col text-white">
            Написал сложный компонент - расписание. Функционально этот компонент
            позволяет создавать расписание мастеров на дни или промежутки дней,
            а также просматривать записи и смены в месячном и недельном
            представлениях.
          </p>
        </li>
      </ul>
    </div>
  );
};

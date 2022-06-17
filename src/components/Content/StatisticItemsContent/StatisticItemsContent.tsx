import style from "./StatisticItemsContent.module.scss";
import { IStatisticItemsContent } from "../../../interfaces/interfaces";

function StatisticItemsContent({
  item,
  index,
  openModal,
}: IStatisticItemsContent) {
  return (
    <li onClick={openModal(item)} className={style.listItem}>
      <p className={style.listItem_index}>{index + 1}</p>
      <p className={style.listItem_Country}>{item.Country}</p>
      <p className={style.listItem_TotalConfirmed}>{item.TotalConfirmed}</p>
    </li>
  );
}

export default StatisticItemsContent;

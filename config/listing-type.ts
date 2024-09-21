type ListingType = {
  id: number;
  value: string;
  label: string;
};

export const listing: ListingType[] = [
  {
    id: 1,
    value: "post",
    label: "Статья",
  },
  {
    id: 2,
    value: "place",
    label: "Место",
  },
  {
    id: 3,
    value: "tour",
    label: "Тур",
  },
  {
    id: 4,
    value: "event",
    label: "Мероприятие",
  },
  {
    id: 5,
    value: "excursion",
    label: "Экскурсия",
  },
  {
    id: 6,
    value: "hotel",
    label: "Отель",
  },
];

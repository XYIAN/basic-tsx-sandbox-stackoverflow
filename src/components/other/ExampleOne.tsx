type MyListModel = {
  name: string;
  message: string;
  key: string;
};
export const MapExample = () => {
  const DummyList = [
    { name: "KYle", message: "hi", key: "uniqueKey1" },
    { name: "Jeff", message: "bye", key: "uniqueKey2" },
    { name: "Jason", message: "no", key: "uniqueKey3" },
    { name: "Bill", message: "yes", key: "uniqueKey4" },
    { name: "Remy", message: "maybe", key: "uniqueKey5" },
  ];

  return DummyList.map((listItem) => {
    return (
      <div key={listItem.key}>
        Name:{listItem.name}
        Message:{listItem.message}
      </div>
    );
  });
};

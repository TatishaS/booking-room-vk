const roomsArr = [];

for (let i = 1; i <= 10; i++) {
  roomsArr.push(i);
}

export const selectRoomOptions = roomsArr.map((item) => {
  return {
    value: item.toString(),
    label: `Переговорная №${item}`,
  };
});

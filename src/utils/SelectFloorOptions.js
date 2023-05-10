const floorsArr = [];

for (let i = 3; i <= 27; i++) {
  floorsArr.push(i);
}

export const selectFloorOptions = floorsArr.map((item) => {
  return {
    value: item.toString(),
    label: `Этаж ${item}`,
  };
});

import generateCustomSorter from './GenerateCustomSorter';

it('Generated sorter ', () => {
  const sorter = generateCustomSorter('property');
  const data = [{ property: 2 }, { property: 3 }, { property: 3 }, { property: 1 }];

  data.sort(sorter);

  expect(data).toEqual([{ property: 3 }, { property: 3 }, { property: 2 }, { property: 1 }]);
});

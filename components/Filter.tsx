import Select, { Options, SingleValue } from 'react-select';

import { SRT } from '../components';
import { Product, ProductType } from '../types/Product';
import { FilterType } from '../types/Filter';

type Props = {
  items: Product[];
  filterHandler: (b: FilterType) => void;
}

const Filter: React.FC<Props> = ({ items, filterHandler }) => {

  const getCount = (type: string) => items.filter(item => item.type === type).length;

  type Option = {
    value: string;
    label: string;
  }
  const selectOptions: Option[] = [
    {
      value: FilterType.ALL,
      label: `All (${items.length})`,
    },
    {
      value: FilterType.GAMEMODE,
      label: `Gamemode (${getCount('gamemode')})`,
    },
    {
      value: FilterType.CHAMPION,
      label: `Champion (${getCount('champion')})`,
    },
    {
      value: FilterType.MAP,
      label: `Map (${getCount('map')})`,
    },
    {
      value: FilterType.ITEM,
      label: `Item (${getCount('item')})`,
    },
    {
      value: FilterType.APP,
      label: `App (${getCount('app')})`,
    },
    {
      value: FilterType.API,
      label: `API (${getCount('api')})`,
    },
    {
      value: FilterType.SKIN,
      label: `Skin (${getCount('skin')})`,
    },
    {
      value: FilterType.COMPETITION,
      label: `Competition (${getCount('competition')})`,
    },
  ];

  const changeHandler = (arg: SingleValue<Option>): void => {
    const filterVal = arg?.value as FilterType;
      filterHandler(filterVal);
    if (window.umami?.trackEvent)
      window.umami.trackEvent(filterVal, 'filter');
  }

  return (
    <label id="listFilter">
      <SRT>Filter Graveyard List</SRT>
      <Select defaultValue={selectOptions[0]} options={selectOptions} onChange={changeHandler} instanceId="filter-select" />
    </label>
  );
}
export default Filter;

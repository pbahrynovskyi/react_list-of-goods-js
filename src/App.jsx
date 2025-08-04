import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [goodsType, setGoodsType] = useState('none');
  const [isReversed, setIsReversed] = useState(false);

  const resetGoods = () => {
    setGoods(goodsFromServer);
    setGoodsType('none');
    setIsReversed(false);
  };

  const sortAlphabetically = () => {
    const sorted = [...goods].sort();

    setGoods(sorted);
    setGoodsType('alphabet');
    setIsReversed(false);
  };

  const sortByLength = () => {
    const sorted = [...goods].sort((a, b) => b.length - a.length);

    setGoods(sorted);
    setGoodsType('length');
    setIsReversed(false);
  };

  const reverseGoods = () => {
    setGoods(prev => [...prev].reverse());
    setIsReversed(prev => !prev);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${goodsType === 'alphabet' ? '' : 'is-light'}`}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-success ${goodsType === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-warning ${isReversed ? '' : 'is-light'}`}
          onClick={reverseGoods}
        >
          Reverse
        </button>

        {(goodsType !== 'none' || isReversed) && (
          <button
            type="button"
            className="button is-danger"
            onClick={resetGoods}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};

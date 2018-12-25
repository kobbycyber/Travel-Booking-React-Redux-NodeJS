import { FETCH_COUNTRIES_FINISHED } from '../../actions/master/actionsAir';
import { SELECT_AIR_SEAT } from '../../actions/master/actionsAir';


const asyncData = {
  countries: [],
};


export function countryListReducer(state = asyncData, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_FINISHED:
      return { ...state, countries: action.payload };

    case SELECT_AIR_SEAT:
      // changes free to true
      console.log('SELECT_AIR_SEAT');
      console.log(action.payload);
      const oldSeatCode = action.payload.oldLetter + action.payload.oldNumber;
      const newSeatCode = action.payload.letter + action.payload.number;

      console.log(`oldSeatCode ${oldSeatCode}`);
      console.log(`oldSeatCode ${newSeatCode}`);

      const newSeatMap = state.seatMap;
      newSeatMap.map((seatItem, idx) => {
        if (seatItem.code === oldSeatCode) {
          console.log('Bingo!!!');
          const newSeatItem = seatItem;
          newSeatItem.free = true;
          console.log(newSeatItem);
          return {
            ...seatItem,
            newSeatItem,
          };
        } if (seatItem.code === newSeatCode) {
          console.log('Bingo!!!');
          const newSeatItem = seatItem;
          newSeatItem.free = false;
          console.log(newSeatItem);
          return {
            ...seatItem,
            newSeatItem,
          };
        }
        return seatItem;
      });
      return { ...state, seatMap: newSeatMap };

    default:
      return state;
  }
}

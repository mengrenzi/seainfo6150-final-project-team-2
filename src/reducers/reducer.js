import { omit } from 'lodash';
import categories from '../data/categories.json';
import options from '../data/options.json';
import apartments from '../data/apartments.json';

export default (
  state={
    categories,
    error: null,
    options,
    apartments,
    selectedOptions: {},
    selectedApartmentId: null,
    viewedApartments: []
  },
  action={}
) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      let selectedOptions;

      const selectedApartment = state.apartments[action.payload.id];
      switch (selectedApartment.categoryId) {
        case 'limousine':
          selectedOptions = {
            numSeats: 8
          }
          break;
        case 'sportsCar':
          selectedOptions = {
            numSeats: 2
          }
          break;
        case 'taxi':
          selectedOptions = {
            color: '#ffff00'
          }
          break;
        case 'fireEngine':
          selectedOptions = {
            color: '#ff0000',
            numSeats: 2,
            hasTintedWindows: false,
            hasRadio: false,
            hasCigaretteLighters: false
          }
          break;
        case 'jeep':
          selectedOptions = {
            hasTintedWindows: false,
            hasAirConditioning: false
          }
          break;
        default:
          selectedOptions = {}
      }

      return {
        ...state,
        selectedApartmentId: action.payload.id,
        selectedOptions
      }
    case 'VIEW_PRODUCT':
      return {
        ...state,
        viewedApartments: [action.payload.id, ...state.viewedApartments]
      }
    case 'REMOVE_OPTION':
      return {
        ...state,
        selectedOptions: omit(state.selectedOptions, [action.payload.id])
      }
    case 'SET_OPTION':
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          ...action.payload
        }
      }
    case 'SET_INFO':
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.payload
        }
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error
      }
    case 'REMOVE_ERROR':
      return omit(state, ['error'])
    default:
      return state
  }
}

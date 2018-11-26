import { UPDATE_DATASETS, CHANGE_FREQ_FILTER, DELETE_FREQ_FILTER, ADD_FREQ_FILTER, UPDATE_DATA } from "actions"

import uuid from "uuid"

const initialState = {
    datasets: [],
    filters: [
        {id: uuid.v1(), min: 5e3, max: 10e4},
        {id: uuid.v1(), min: 5e6,max: 10e7}
    ],
    data: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATASETS:
            return { ...state,
                datasets: action.datasets
            }

        case UPDATE_DATA:
            return { ...state,
                data: action.data
            }

        case CHANGE_FREQ_FILTER:
            return { ...state,
                    filters: state.filters.map( (filter) => filter.id === action.id ?
                        {...filter, min: action.min, max: action.max} : filter
                    )
            }

        case DELETE_FREQ_FILTER:
            return { ...state,
                    filters: state.filters.filter( (filter) => filter.id != action.id )
            }

        case ADD_FREQ_FILTER:
            return { ...state,
                    filters: [...state.filters, {
                        id: action.id,
                        min: action.min,
                        max: action.max
                    }]
            }

        default:
            return state
    }
}

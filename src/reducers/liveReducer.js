import { UPDATE_DATASETS, UPDATE_DEVICE_INFO, UPDATE_SELECTED_DATASET, UPDATE_MEASUREMENT_RUNNING, CONNECTION_CHANGE, UPDATE_DEVICE_SETUP, NEW_SAMPLE } from "actions"

const initialState = {
    datasets: [],
    selectedDataset: null,
    deviceInfo: {
        frequency_bins: []
    },
    isConnected: false,
    deviceSetup: {},
    measurementStatus: {
        isRunning: false
    },
    liveSamples: []
}

export default function liveReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATASETS:
            return { ...state, datasets: action.datasets}

        case UPDATE_SELECTED_DATASET:
            return { ...state, selectedDataset: action.selected}

        case UPDATE_DEVICE_INFO:
            return { ...state, deviceInfo: action.deviceInfo}

        case CONNECTION_CHANGE:
            return { ...state, isConnected: action.isConnected}

        case UPDATE_DEVICE_SETUP:
            return { ...state, deviceSetup: action.deviceSetup}

        case UPDATE_MEASUREMENT_RUNNING:
            return { ...state, measurementStatus:
                {
                    ...state.measurementStatus, isRunning: action.running
                }
            }

        case NEW_SAMPLE:
            return { ...state, liveSamples: [
                ...state.liveSamples, action.sample
            ]}

        default:
            return state
    }
}

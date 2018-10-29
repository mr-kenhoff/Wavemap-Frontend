import { connect } from 'react-redux'
import { LiveSetup } from 'components'
import { addDataset, selectDataset, changeMeasurementRunning } from 'actions'

const mapStateToProps = state => {
    return {
        deviceInfo: state.deviceInfo,
        datasets: state.datasets,
        isConnected: state.isConnected,
        selectedDataset: state.selectedDataset,
        deviceSetup: state.deviceSetup,
        isRunning: state.measurementStatus.isRunning
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddDataset: (e, {value}) => {
            dispatch(addDataset(value))
        },
        onSelectDataset: (e, {value}) => {
            dispatch(selectDataset(value))
        },
        changeMeasurementRunning: (value) => {
            dispatch(changeMeasurementRunning(value))
        }
    }
}

const LiveSetupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LiveSetup)

export default LiveSetupContainer

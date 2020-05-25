const APIDelay = () => new Promise(resolve => setTimeout(resolve, 150))

const getPartData = async ({ nFeatures, nControls }) => {

    await APIDelay()

    const getDeviation = () =>
        +((Math.random() + Math.random() + Math.random() + Math.random()) / 4 - 0.5)
            .toFixed(2)

    const getFeatureControlsData = () => {
        const data = []
        for (let x = 0; x < nControls; x++) {
            data.push({
                id: x,
                dev: getDeviation()
            })
        }
        return data
    }

    const getPartFeatures = () => {
        const features = []
        for (let x = 0; x < nFeatures; x++) {
            features.push({
                id: x,
                data: getFeatureControlsData()
            })
        }
        return features
    }

    return getPartFeatures()
}

export default getPartData
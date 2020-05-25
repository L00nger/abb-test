import React from 'react'
import FeatureBox from '../components/FeatureBox'

function HomeLayout({ part }) {

    return (
        <>
            {part.map(feature =>
                <FeatureBox key={feature.id} feature={feature}/>
            )}
        </>
    )
}

export default HomeLayout
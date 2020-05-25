import React from 'react'
import FeatureBox from '../components/FeatureBox/FeatureBox'

function HomeLayout({ part }) {

    return (
        <div id='home-container'>
            {part.map(feature =>
                <FeatureBox key={feature.id} feature={feature}/>
            )}
        </div>
    )
}

export default HomeLayout
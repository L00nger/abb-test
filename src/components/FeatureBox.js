import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

import Table from '../components/Table'

function FeatureBox({ feature }) {

    const { id, data } = feature

    return (
        <Card>
            <CardHeader title={`Feature ${id}`} />
            <CardContent>
                <Table data={data} />
            </CardContent>
        </Card>
    )
}

export default FeatureBox
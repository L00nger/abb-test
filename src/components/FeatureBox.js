import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Table from '../components/Table'
import { Icon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { colors, icons } from '../theme'




function FeatureBox({ feature }) {

    const { id, data, status } = feature

    const useStyles = makeStyles({
        headerRoot: {
            background: colors[status],
            color: 'white'
        },
        cardRoot: {
            maxWidth: 400
        }
    })

    const classes = useStyles()

    return (
        <Card
            classes={{ root: classes.cardRoot }}
            variant='outlined'
        >
            <CardHeader
                classes={{ root: classes.headerRoot }}
                title={`Feature ${id}`}
                avatar={
                    <Icon>
                        {icons[status]}
                    </Icon>}
            />
            <CardContent>
                <Table data={data} />
            </CardContent>
        </Card>
    )
}

export default FeatureBox
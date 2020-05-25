import { createMuiTheme } from '@material-ui/core/styles'

export const colors = {
    0: '#288403',
    1: '#ffc107',
    2: '#d62728'
}

export const icons = {
    0: 'check_circle_outline',
    1: 'error_outline',
    2: 'highlight_off'
}

export const theme = createMuiTheme({
    overrides: {
        MuiCardContent: {
            root: {
                padding: 0,
                "&:last-child": {
                    paddingBottom: 0
                }
            }
        },
        MuiTableRow: {
            root: {
                background: '#dedede'
            }
        },
        MuiCard: {
            root: {
                margin: 10,
                minWidth: 400
            }
        },
        MuiTypography: {
            body2: {
                fontSize: '1rem',
                fontWeight: 600
            }
        }
    }
})
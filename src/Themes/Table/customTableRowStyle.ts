import { withStyles, Theme, createStyles, TableRow } from "@material-ui/core";

const CustomTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

export { CustomTableRow };
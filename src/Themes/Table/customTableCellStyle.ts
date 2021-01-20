import { withStyles, Theme, createStyles, TableCell } from "@material-ui/core";

const CustomTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontFamily: "Monospace",
            fontSize: 16,
            textAlign: "center"
        },
        body: {
            fontSize: 14,
            fontFamily: "Monospace",
            textAlign: "center"
        },
    }),
)(TableCell);

export { CustomTableCell };
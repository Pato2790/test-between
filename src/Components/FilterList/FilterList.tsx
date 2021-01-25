import React, { useContext } from "react";
import { Card, CardContent, Typography, Box, FormGroup, FormControlLabel, Switch } from "@material-ui/core";
import FilterListStyle from './FilterListStyle';
import { FilterContext } from "../../Helpers/filterContext";

const FilterList = () => {
    const classes = FilterListStyle();

    const { showMoreUsers, showOffline, setShowMoreUsers, setShowOffline } = useContext(FilterContext);

    return (
        <Card className={classes.filter}>
            <CardContent>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold" textAlign="left" fontSize="h5.fontSize" m={1}>
                        Filters
                </Box>
                </Typography>
                <FormGroup row>
                    <FormControlLabel
                        control={<Switch checked={showOffline} onChange={(e) => setShowOffline(e.target.checked)} name="showOffline" />}
                        label="Show Offline"
                    />
                    <FormControlLabel
                        control={<Switch checked={showMoreUsers} onChange={(e) => { setShowMoreUsers(e.target.checked) }} color="primary" name="showMoreUsers" />}
                        label="Show More Users"
                    />
                </FormGroup>
            </CardContent>
        </Card>
    );
}

export default FilterList;
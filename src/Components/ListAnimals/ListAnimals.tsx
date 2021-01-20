import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableBody, Box, Typography, Card, CardContent, FormControlLabel, FormGroup, Switch } from '@material-ui/core';
import { User } from '../../Models/user';
import { SortUsersByAnimal } from '../../Models/sortAnimal';
import { GetUsers } from '../../Services/Users/getUsers';
import { sortUsersByAnimals } from '../../Helpers/sortByAnimals';
import { CustomTableCell } from '../../Themes/Table/customTableCellStyle';
import { CustomTableRow } from '../../Themes/Table/customTableRowStyle';
import { ListAnimalsStyles } from './ListAnimalsStyle';

const ListAnimals = () => {
  const classes = ListAnimalsStyles();

  const [data, loading] = GetUsers();

  const [state, setState] = React.useState({
    showOffline: false,
    showMoreUsers: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      {loading ? (
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h3.fontSize" m={10}>
            Getting Users...
          </Box>
        </Typography>
      ) : (
          <div>
            <Card className={classes.filter}>
              <CardContent>
                <Typography component="div">
                  <Box fontWeight="fontWeightBold" textAlign="left" fontSize="h5.fontSize" m={1}>
                    Filters
                  </Box>
                </Typography>
                <FormGroup row>
                  <FormControlLabel
                    control={<Switch checked={state.showOffline} onChange={handleChange} name="showOffline" />}
                    label="Show Offline"
                  />
                  <FormControlLabel
                    control={<Switch checked={state.showMoreUsers} onChange={handleChange} color="primary" name="showMoreUsers" />}
                    label="Show More Users"
                  />
                </FormGroup>
              </CardContent>
            </Card>
            {sortUsersByAnimals(data, state.showOffline).map((usersByAnimal: SortUsersByAnimal, indexAnimals: number) => (
              <TableContainer key={indexAnimals}>
                <Typography component="div">
                  <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h3.fontSize" m={1}>
                    {usersByAnimal.animal.substring(0, 1).toUpperCase() + usersByAnimal.animal.substring(1, usersByAnimal.animal.length)}
                  </Box>
                </Typography>
                <Table className={classes.table} aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <CustomTableCell>First Name</CustomTableCell>
                      <CustomTableCell>Last Name</CustomTableCell>
                      <CustomTableCell>Age</CustomTableCell>
                      <CustomTableCell>Points</CustomTableCell>
                      <CustomTableCell>Active</CustomTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {usersByAnimal.users.slice(0, state.showMoreUsers ? 24 : 9).map((user: User, indexUser: number) => (
                      <CustomTableRow key={indexUser}>
                        <CustomTableCell>{user.name.given}</CustomTableCell>
                        <CustomTableCell>{user.name.surname}</CustomTableCell>
                        <CustomTableCell>{user.age}</CustomTableCell>
                        <CustomTableCell>{user.points}</CustomTableCell>
                        <CustomTableCell>{user.isActive ? 'Online' : 'Offline'}</CustomTableCell>
                      </CustomTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ))}
          </div>
        )}
    </>
  );
}

export default ListAnimals;
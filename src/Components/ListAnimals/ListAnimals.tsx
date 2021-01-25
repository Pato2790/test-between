import React, { useContext } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableBody, Box, Typography } from '@material-ui/core';
import { User } from '../../Models/user';
import { SortUsersByAnimal } from '../../Models/sortAnimal';
import { sortUsersByAnimals } from '../../Helpers/sortByAnimals';
import { CustomTableCell } from '../../Themes/Table/customTableCellStyle';
import { CustomTableRow } from '../../Themes/Table/customTableRowStyle';
import ListAnimalsStyles from './ListAnimalsStyle';
import useFetch from '../../Services/Fech/useFetch';
import { FilterContext } from '../../Helpers/filterContext';

const baseUrl: string = "http://localhost:3001/users";

const ListAnimals = () => {
  const classes = ListAnimalsStyles();

  const { data, loading } = useFetch(baseUrl);

  const { showMoreUsers, showOffline } = useContext(FilterContext);

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
            {sortUsersByAnimals(data, showOffline, showMoreUsers).map((usersByAnimal: SortUsersByAnimal, indexAnimals: number) => (
              <TableContainer key={indexAnimals}>
                <Typography component="div">
                  <Box style={{ textTransform: "capitalize" }} fontWeight="fontWeightBold" textAlign="center" fontSize="h3.fontSize" m={1}>
                    {usersByAnimal.animal}
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
                    {usersByAnimal.users.map((user: User, indexUser: number) => (
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
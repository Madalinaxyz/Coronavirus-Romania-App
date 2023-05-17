import react from 'react';
import Grid from '@mui/material/Grid';
import Navbar from '../NavBar/NavBar';
import './Exposure_sites.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(no,county,deaths) {
  return { no, county,deaths };
}

const rows = [
  createData('1','BRASOV',200),
  createData('2', 'BUCURESTI', 500),
  createData('3','GIURGIU',150),
  createData('4','ALBA',133),
  createData('5','ARAD',244),
  createData('6','ARGES',173),
  createData('7','BOTOSANI',122),
  createData('8','BRAILA',145),
  createData('9','CONSTANTA',190),
  createData('10','DOLJ',180)
];

export const ExposureSites = () =>{
    return(
    <div  style={{"backgroundColor":"black"}}>
    <Navbar/>
    <Grid container  style={{"backgroundColor":"black","height":"609px"}} >
        <Grid item xs={3} className="grid_exposure1">
        <TableContainer style={{backgroundColor:"black"}} component={Paper}>
      <Table  sx={{ minWidth: 300}} aria-label="caption table" >
        <TableHead>
          <TableRow>
            <TableCell style={{"color":"white"}}>No.</TableCell>
            <TableCell style={{"color":"white"}} align="right">County</TableCell>
            <TableCell style={{"color":"white"}} align="right">Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell  style={{"color":"white"}}component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell style={{"color":"white"}} align="right">{row.county}</TableCell>
              <TableCell style={{"color":"white"}} align="right">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
        <Grid item xs={6}>
        </Grid>
        <Grid item xs={3} className="grid_exposure3">
            <TableContainer style={{backgroundColor:"black"}} component={Paper}>
      <Table  sx={{ minWidth: 300}} aria-label="caption table" >
        <TableHead>
          <TableRow>
            <TableCell style={{"color":"white"}}>No.</TableCell>
            <TableCell style={{"color":"white"}} align="right">County</TableCell>
            <TableCell style={{"color":"white"}} align="right">Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.no}>
              <TableCell  style={{"color":"white"}}component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell style={{"color":"white"}} align="right">{row.county}</TableCell>
              <TableCell style={{"color":"white"}} align="right">{row.deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
    </Grid>
    </div>
    );
};
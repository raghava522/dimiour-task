import { AppBar, Box, Button, Fab, Grid, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import './styles.css';

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiPaper-root": {
            backgroundColor: '#ff9933'
        }
    }
}));

const PanelVoting = () => {
    const classes = useStyles();

    useEffect(() => {
        document.title = 'Panel Voting App';
    });

    const votingColumns = [
        { field: 'id', headerName: 'ID', width: 70, disableClickEventBubbling: true },
        { field: 'panel', headerName: 'Panel', width: 200, disableClickEventBubbling: true },
        { field: 'topic', headerName: 'Topic', width: 200, disableClickEventBubbling: true },
        {
            field: '', headerName: '', width: 100, renderCell: () => (
                <Button variant="contained" sx={{ backgroundColor: '#ff9933' }}>View</Button>
            ),
            disableClickEventBubbling: true
        },
    ];

    const votingRows = [
        { id: 1, panel: 'Snow Jon Jon', topic: 'Jon' },
        { id: 2, panel: 'Snow Jon Jon', topic: 'Jon' },
        { id: 3, panel: 'Snow', topic: 'Jon' },
        { id: 4, panel: 'Snow', topic: 'Jon' },
        { id: 5, panel: 'Snow', topic: 'Jon' },
        { id: 6, panel: 'Snow', topic: 'Jon' },
    ];

    const confColumns = [
        { field: 'id', headerName: 'ID', width: 100, disableClickEventBubbling: true },
        { field: 'panel', headerName: 'Panel', width: 200, disableClickEventBubbling: true },
        { field: 'topic', headerName: 'Topic', width: 200, disableClickEventBubbling: true },
    ];

    const confRows = [
        { id: 1, panel: 'Snow Jon Jon', topic: 'Jon' },
        { id: 2, panel: 'Snow Jon Jon', topic: 'Jon' },
        { id: 3, panel: 'Snow', topic: 'Jon' },
        { id: 4, panel: 'Snow', topic: 'Jon' },
        { id: 5, panel: 'Snow', topic: 'Jon' },
        { id: 6, panel: 'Snow', topic: 'Jon' },
    ];
    return (
        <div className={classes.root}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar component="nav" style={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Panel Voting App
                        </Typography>
                        <Button variant="text" sx={{ color: 'white' }}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <Grid container>
                    <Grid item xs={5}>
                        <div className="data-grid-card">
                            <div className="data-grid-card-title">Voting List</div>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={votingRows}
                                    columns={votingColumns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <div className="data-grid-card">
                            <div className="data-grid-card-title">Conference Schedule</div>
                            <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={confRows}
                                    columns={confColumns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                />
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={2}>
                        {/* <Fab color="primary" aria-label="add" variant="extended" sx={{ transform: 'rotate(90deg)' }}>
                            Feedback
                        </Fab> */}
                        <Button variant="contained" sx={{ marginTop: '3rem', marginBottom: '1rem' }}>Conference Feedback</Button>
                        <Button variant="contained" sx={{ marginTop: '1rem', marginBottom: '1rem' }}>Panel Suggestion</Button>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}

export default PanelVoting;
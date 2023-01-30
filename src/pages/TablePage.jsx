import { useNavigate, useParams } from "react-router";
import axios from "../api/AxiosConfig";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import COLUMNS from '../constants/COLUMNS';



const TablePage = () => {

    const { tableName } = useParams();
    const [table, setTable] = useState([]);
    const [columns, setColumns] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(tableName)
            .then(
                json => {
                    setTable(json.data);
                    setColumns(COLUMNS[tableName])
                }
            ).catch(
                error => {
                    return navigate("/error")
                }
            )

    }, [tableName, navigate]);


    return (
        <main>

            <h2> {tableName} list</h2>
            <Box sx={{ height: 375, width: 600 }}>
                <DataGrid
                    rows={table}
                    columns={columns}
                    checkboxSelection
                    newEditingApi
                    disableSelectionOnClick
                    getRowId={(row) => row.id || row.name}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    onCellEditCommit={(commit) => {
                        // console.log(commit);
                        let row = table[commit.id - 1];
                        row[commit.field] = commit.value;
                        console.log(row)
                        axios.post(tableName + "/save", row);

                    }}

                />
            </Box>

        </main >
    );
}

export default TablePage;

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Book } from "@/types";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "author", headerName: "Author", width: 130 },
  { field: "title", headerName: "Title", width: 300 },
  {
    field: "readingLevel",
    headerName: "Level",
    width: 20,
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DataTable({ readingList }: { readingList: Array<Book> | [] }) {
  return (
        <Box sx={style}>
      <DataGrid
        rows={readingList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      </Box>
  );
}

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { Book } from "@/types";
import useBooks from "@/hooks/useBooks";

const style = {
  minHeight: '10vh',
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
  const { removeFromReadingList } = useBooks();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "author", headerName: "Author", width: 130 },
    { field: "title", headerName: "Title", width: 300 },
    {
      field: "readingLevel",
      headerName: "Level",
      width: 20,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <Button
        size="small"
          variant="contained"
          color="secondary"
          onClick={() => removeFromReadingList(params.row)}
        >
          Remove
        </Button>
      ),
    },
  ];

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
      />
    </Box>
  );
}

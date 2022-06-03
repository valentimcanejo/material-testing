import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  TextField,
  IconButton,
  Modal,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
const columns = [
  { field: "nome", headerName: "Nome", width: 90 },
  {
    field: "cpf_cnpj",
    headerName: "CPF_CNPJ",
    width: 150,
    editable: true,
  },
  {
    field: "telefones",
    headerName: "Telefones",
    width: 150,
    editable: true,
  },
  {
    field: "opcoes",
    headerName: "Opções",

    width: 110,

    renderCell: (cellValues) => {
      return (
        <IconButton>
          <EditIcon />
        </IconButton>
      );
    },
  },
];

const rows = [
  { id: 1, nome: "Snow", cpf_cnpj: "Jon", telefones: 35 },
  {
    id: 2,
    nome: "Lannister",
    cpf_cnpj: "Cersei",
    telefones: 42,
    opcoes: "s",
  },
  {
    id: 3,
    nome: "Stark",
    cpf_cnpj: "Jaime",
    telefones: 45,
    opcoes: "s",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Fornecedores() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      spacing={2}
      direction="column"
    >
      <Grid item>
        <Grid container justifyContent="space-between" spacing={0}>
          <Grid item>
            <TextField id="outlined-basic" label="Filtrar" variant="outlined" />
          </Grid>
          <Grid item>
            <IconButton onClick={handleOpen} size="large">
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                <Grid container spacing={0} justifyContent="space-between">
                  <Grid item>{"Dados do Fornecedor"}</Grid>
                  <Grid item>
                    <IconButton onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </DialogTitle>
              <Divider />
              <Grid container spacing={0}>
                <Grid item>
                  <DialogContent>
                    <Grid container spacing={2}>
                      <Grid xs={4} item>
                        <TextField
                          fullWidth
                          label="CPF_CNPJ"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid xs={8} item>
                        <TextField fullWidth label="Nome" variant="outlined" />
                      </Grid>
                      <Grid xs={10} item>
                        <TextField
                          fullWidth
                          label="Logradouro"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid xs={2} item>
                        <TextField fullWidth label="N*" variant="outlined" />
                      </Grid>
                      <Grid xs={5} item>
                        <TextField
                          fullWidth
                          label="Bairro"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid xs={5} item>
                        <TextField
                          fullWidth
                          label="Cidade"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid xs={2} item>
                        <TextField fullWidth label="UF" variant="outlined" />
                      </Grid>
                      <Grid xs={6} item>
                        <TextField
                          fullWidth
                          label="Telefone"
                          variant="outlined"
                        />
                      </Grid>
                      <Grid xs={6} item>
                        <TextField
                          fullWidth
                          label="Telefone 2"
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <Grid container justifyContent="space-between" spacing={0}>
                      <Grid item>
                        <Button color="error" variant="contained">
                          Excluir
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button color="success" variant="contained">
                          Salvar
                        </Button>
                      </Grid>
                    </Grid>
                  </DialogActions>
                </Grid>
              </Grid>
            </Dialog>
          </Grid>
        </Grid>

        <Paper
          sx={{
            height: 400,
            width: "570px",
          }}
          elevation={2}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

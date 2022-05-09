import { Button, CircularProgress, Typography, TextField, FormControl } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import InsertTextComp from "../components/InsertTextComp";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { handleCreateUser, handleSetName, handleSetSurname } from "../redux/actions";


const Registration = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const {
    mail,
    password,
    user_id,
  } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios.post("https://thePostlink/users",  
    {
        "data": {
            "mail": mail,
            "password": password
        }
    }, 
    { headers: { 
        "X-Access-Token": "f98295ea42621f86f4606a5f09ab23083b28a3308fd26da5cef273543a1073d4"},
    }).then((res) => { 
      dispatch(handleCreateUser(res.data.id));
    })
    .catch((err) => setError(err))
    .finally(() => setLoading(false));

   
    history.push("/config");
  };

  const handleNameChange = (e) => {
    dispatch(handleSetName(e.target.value))
  };

  const handleSurnameChange = (e) => {
    dispatch(handleSetSurname(e.target.value))
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" mt={20} color='#0096c7'>
        Insert mail:
      </Typography>
      <TextField
          fullWidth
          onChange={handleNameChange}
          variant="outlined"
          label="Insert Text"
          type="text"
        />
        
      <Typography variant="h6" mt={20} color='#0096c7'>
      
        Insert password:
      </Typography>
      <TextField
          fullWidth
          onChange={handleSurnameChange}
          variant="outlined"
          label="Insert Text"
          type="text"
        />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Next
        </Button>
      </Box>
    </form>
  );
};
export default Registration;
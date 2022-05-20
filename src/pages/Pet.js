import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from "@mui/system";
import { useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPetName } from "../redux/actions";


const Pet = () => {
  const { response, error, loading } = useAxios({ url: "/quizzes" });
  const history = useHistory();
  const {
    user_id,
    pet_name
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    
    if(response != null){
      dispatch(getPetName(response[0].pet_name)) 
    }
  },[response]
  )

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Something Went Wrong! Couldn't load pet info page.
      </Typography>
    );
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/pet");
  };

  const gotoCreate = (e) => {
    e.preventDefault();
    history.push("/pet/plan")
  }


  
  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" fontWeight="bold" color='#0096c7'>
        {pet_name} is doing great.
      </Typography>
      <Image src="https://cdn.pixabay.com/photo/2020/06/08/22/50/dog-5276317_1280.png">Your pet</Image>
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          See {pet_name}\'s plan
        </Button>
      </Box>
      
    </form>  
    
  );
};

export default Pet;

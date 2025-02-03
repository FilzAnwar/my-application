import React from "react";
import {Avatar, Button, Grid2, Paper , TextField, Typography , Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const Login =()=>{
    const paperStyle = {padding:20 ,height:'30vh', width:280 , margin:"40px auto" }
    const avatarStyle={bgcolor:"green"}
    const btnStyle={margin:'8px'}
    return(
        <Grid2>
            <Paper elevation={10} sx={paperStyle}>
               <Grid2 align="center">
               <Avatar sx={avatarStyle}><LockOutlinedIcon/></Avatar>
               Sign In !
               </Grid2>
               <TextField fullWidth required  id="standard-basic" label="UserName" variant="standard" placeholder="Enterusername" />
               <TextField fullWidth required type="password" id="standard-basic" label="Password" variant="standard"  placeholder="Enterusername"/>
               <FormControlLabel  control={<Checkbox name="checkboxdb" color="primary" />} label="Remember Me!" />
               <Button sx={btnStyle} fullWidth variant="contained" type="submit" color="primary">
                submit 
            
               </Button>
               <Typography>
                <Link href="#"> Forget Password ?</Link>
               </Typography>
               <Typography> Do you have an account ?
                <Link href="#"> Signup </Link>
               </Typography>


             

            </Paper>
        </Grid2>
    )

}
export default Login
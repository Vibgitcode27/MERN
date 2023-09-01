import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { AppBar } from '@mui/material';

function SignIn(field) {
    return (
        <div>
        <center style={{
            height : "500px"
        }}>
            <div style={{
                // marginTop : "120px" ,
                paddingTop : "120px" ,
                marginBottom : "30px" ,
            }}>
                <h1>Welcome to VibgitCourse</h1>
                <h3 style={{
                    marginTop : "-15px"
                }}>Let's get you signed in</h3>
            </div>
            <Card variant="outlined" style={{
                // border : "2px solid black" ,
                width : "500px" ,
                padding : "30px" ,
                display : "flex" ,
                flexDirection : "column" ,
                justifyContent : "center"
            }}>
            <p><TextField fullWidth id="outlined-basic" label="Username" variant="outlined" /></p>
            <p><TextField fullWidth id="outlined-basic" label="Password" variant="outlined" type='password' /></p>
            <Button variant="contained" style={{
                width : "90px"
            }}>Login</Button>
            </Card>
        </center>
        </div>
    )
}

export default SignIn;
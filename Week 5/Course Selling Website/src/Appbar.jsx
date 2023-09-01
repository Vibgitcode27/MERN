import { Typography } from "@mui/material";
import { Button } from "@mui/material";

function Appbar()
{
    return (
        <div style={{
            display : "flex" ,
            flexDirection : "row" ,
            justifyContent : "space-between"
        }}>
            <div style={{
                marginTop : "6px" ,
                marginLeft : "20px"
            }}>
                <Typography>VibGitCourse</Typography>
            </div>
            <div style={{
                marginRight : "30px"
            }}>
                <Button onClick={() =>
                {
                    window.location = '/Signup'
                }}>Sign Up</Button>
                <Button onClick={() =>
                {
                    window.location = '/login'
                }}>Sign In</Button>
            </div>            
        </div>
    )
}

export default Appbar
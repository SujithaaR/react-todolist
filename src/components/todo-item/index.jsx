import { Card,CardActions,CardContent,Button,Typography } from "@mui/material";


function TodoItem({item,fetchDetailsofCurrentTodo}){
    console.log(item);
    
    return (<Card sx={{
        maxWidth:350,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"

    }}>
        <CardContent>
            <Typography variant="h5" color={"text.secondary"}>{item?.todo}</Typography>
        </CardContent>
        <CardActions>
            <Button sx={
                {
                    backgroundColor:'#000000',
                    color:'#fff',
                    opacity:"0.75",
                    "&:hover":{
                        backgroundColor:'#000000',
                        color:'#fff',
                        opacity:"1",
                    },

                }
            } onClick={()=>fetchDetailsofCurrentTodo(item?.id)}>
                Details
            </Button>
        </CardActions>
    </Card>)
}

export default TodoItem;
import { Dialog,DialogActions,Button, DialogTitle } from "@mui/material";


function TodoDetails(opendialog,tododetails,settododetails,setopendialog){
    return <>
        <Dialog onClose={()=>setopendialog(false)} open={opendialog}>
            <DialogTitle>{tododetails?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={()=>{
                   settododetails(null);
                    setopendialog(false);
                }
                }>
                    Close
                </Button>
            </DialogActions>
        </Dialog>

    </>
}

export default TodoDetails;
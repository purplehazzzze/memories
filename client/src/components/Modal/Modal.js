import {React, useState} from 'react';
import {useStyles} from "./styles";

import Modal from '@material-ui/core/Modal';
import {useDispatch} from "react-redux";
import {Button, Typography} from "@material-ui/core";
import {deletePost} from "../../actions/posts";

function SimpleModal({open, setOpen, post}) {
    const dispatch = useDispatch();

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className= {classes.paper}>
            <Typography variant="h6" id="simple-modal-title">Delete memory</Typography>
            <p id="simple-modal-description">
                Do you really want to delete your memory?
            </p>
            <Button  variant="contained" color="secondary" className={classes.buttonDelete} fullWidth
                     onClick={() => dispatch(deletePost(post._id))}>DELETE</Button>
            <Button variant="contained" color="primary" fullWidth onClick={handleClose} >Cancel</Button>
 
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default SimpleModal;
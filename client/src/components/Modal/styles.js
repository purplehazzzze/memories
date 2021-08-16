import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: "50vw",
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: 5,
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)"
    },
    buttonDelete:{
        marginBottom: 10,
    }
}));
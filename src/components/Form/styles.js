import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    input:{
        position:'relative',
         maxWidth: '100%',
         
    },
    paper: {
        padding: theme.spacing(1.5),
        display: 'flex',
        alignItems: 'center',
    },
   
}))

export default useStyles

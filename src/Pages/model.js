import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';
export const Inputs = [
    {
        id: 1,
        name : 'email',
        type : 'email',
        placeholder : 'Email',
        label : 'Email',
        errorMssage : 'It should be a valid email address!',
        // pattern : 
        icon : <ForwardToInboxIcon  sx={{ color : '#2f8b95' }}/>,
        required : true,
        
    },
    {
        id: 2,
        name : 'password',
        type : 'password',
        placeholder : 'Password',
        label : 'Password',
        errorMssage : 'Password sholud be 8-16 characters and include at least 1 letter, 1 number and 1 special character!',
        pattern : `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        icon : <HttpsIcon sx={{ color : '#2f8b95' }}/>, 
        required : false,
    },

]


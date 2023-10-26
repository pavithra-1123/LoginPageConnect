import { Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import BadgeSharpIcon from '@mui/icons-material/BadgeSharp';
import { logout, onQuit } from './Connect';

export const Homepage=()=>
{
    return(
        <>
            <Navbar bg='success'  expand='lg'>
                <NavbarBrand><b>ZOHO TECH CORP</b></NavbarBrand>
                <NavbarToggle aria-controls='#mynavbar'></NavbarToggle>
                <NavbarCollapse id='mynavbar'>
                    <Nav>
                        <Nav.Link href='/view' >Vision</Nav.Link>
                        <Nav.Link href='/update'>Update</Nav.Link>
                        <Nav.Link ></Nav.Link>
                        <button  className="btn btn-dark ms-5 col-6" onClick={async()=>
                        {
                            const d=await logout();
                            alert(d.data);

                        }}>LOG-OUT</button>
                        <button  className="btn btn-danger ms-1 col-6"
                        onClick={async()=>
                        {
                            const d=await onQuit();
                            alert(d.data);
                            window.location.assign("/")
                        }}
                        >CANCEL</button>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </>
    );  
}
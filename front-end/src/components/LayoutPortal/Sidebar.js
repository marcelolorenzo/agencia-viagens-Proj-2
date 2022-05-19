import { CloseButton, Nav } from "react-bootstrap";
import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";

const menuItems = [
    {
        to: '/portal',
        text: 'Dashboard'
    },
    {
        to: '/portal/cursos',
        text: 'Pacotes'
    }
]

export function Sidebar ({ isOpen, onClose }) {
    return (
        <SidebarStyled className="bg-dark text-white d-flex
         flex-column p-3" isOpen={isOpen}>
            <CloseButton variant="white" onClick={onClose}
             className='ms-auto d-lg-none' />
            <p className='h1'>Portal Hanover</p>
            <hr />
            <Nav variant="pills" className="flex-column">
                {menuItems.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </Nav>
        </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
width: 280px;
@media (max-width: 991px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    margin-left: -100%;
    transition: all .2s linear;
    ${(props) => props.isOpen && `
        margin-left: 0;
        `}
    }
`
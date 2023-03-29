import styled from "styled-components";

interface PropsDialogStyled {
    show: boolean;
}

export const DialogStyled = styled.div<PropsDialogStyled>`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${(p: PropsDialogStyled) => p.show ? 1 : 0};
    transition: all 0.3s ease-in-out;
    pointer-events: ${(p: PropsDialogStyled) => p.show ? 'visible' : 'none'};
`;

export const DialogContentStyled = styled.div<PropsDialogStyled>`
    width: 500px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    transform: ${(p: PropsDialogStyled) => p.show ? "translateY(0)" : "translateY(-200px)"};
`;

export const DialogHeaderStyled = styled.div`
    padding: 10px;
`;

export const DialogFooterStyled = styled.div`
    padding: 10px;
`;

export const DialogTitleStyled = styled.h4`
    margin: 0;
`;

export const DialogBodyStyle = styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`
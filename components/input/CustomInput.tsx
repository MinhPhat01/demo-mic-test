import { forwardRef } from "react";
import { InputProps, InputBase, styled } from "@mui/material";

const CustomInput = (props: InputProps, ref?: React.Ref<HTMLInputElement>) => {
    return (
        <StyledInput
            autoComplete="off"
            inputRef={ref}
            {...props}
        />
    )
}

export default forwardRef(CustomInput)

const StyledInput = styled(InputBase)(() => {
    return {
        border: "2px solid #E6E8EC",
        borderRadius: "12px",
    }
})
